// Generator stron dokumentów SafeCheck.
//
// Zamienia pliki Markdown z katalogu zrodla-md/ na gotowe strony HTML
// w katalogu głównym repozytorium (np. regulamin.md -> regulamin.html),
// ze wspólnym nagłówkiem, stopką, meta tagami SEO i spisem treści.
//
// Użycie (wymaga Node.js 18+):
//   npm install
//   npm run build
//
// Po edycji dowolnego pliku .md uruchom ponownie i zatwierdź wygenerowane .html.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://safecheckapk.github.io";

// Strony do wygenerowania: plik źródłowy, wynik, tytuł, opis (meta description).
const PAGES = [
  {
    src: "instrukcja.md", out: "instrukcja.html", title: "Instrukcja obsługi", template: true,
    description: "Instrukcja obsługi aplikacji SafeCheck: konfiguracja, uprawnienia, działanie alarmu, ustawienia baterii dla Samsung, Xiaomi, Huawei i najczęstsze pytania."
  },
  {
    src: "regulamin.md", out: "regulamin.html", title: "Regulamin", template: true,
    description: "Regulamin korzystania z aplikacji SafeCheck na Androida."
  },
  {
    src: "polityka-prywatnosci.md", out: "polityka-prywatnosci.html", title: "Polityka prywatności", template: true,
    description: "Polityka prywatności aplikacji SafeCheck: jakie dane są wykorzystywane, gdzie są przechowywane i jakie prawa przysługują użytkownikowi (RODO)."
  },
  {
    src: "dokumentacja-techniczna.md", out: "dokumentacja-techniczna.html", title: "Dokumentacja techniczna",
    description: "Dokumentacja techniczna SafeCheck: architektura, komponenty, sekwencja alarmowa, uprawnienia, publikacja w Google Play i znany dług techniczny.",
    mermaid: true
  },
  {
    src: "historia-zmian.md", out: "historia-zmian.html", title: "Historia zmian",
    description: "Historia zmian aplikacji SafeCheck."
  }
];

// Linki względne z oryginalnych plików .md (repozytorium kodu) -> adresy na stronie.
const LINK_MAP = {
  "../CHANGELOG.md": "historia-zmian.html",
  "CHANGELOG.md": "historia-zmian.html",
  "strona/": "/#dokumenty",
  "strona/instrukcja.md": "instrukcja.html",
  "strona/regulamin.md": "regulamin.html",
  "strona/polityka-prywatnosci.md": "polityka-prywatnosci.html",
  "instrukcja.md": "instrukcja.html",
  "regulamin.md": "regulamin.html",
  "polityka-prywatnosci.md": "polityka-prywatnosci.html",
  "DOKUMENTACJA_TECHNICZNA.md": "dokumentacja-techniczna.html",
  "docs/DOKUMENTACJA_TECHNICZNA.md": "dokumentacja-techniczna.html"
};

/** Kotwica w stylu GitHub: małe litery, bez interpunkcji, spacje -> "-". */
function slug(text) {
  return text.toLowerCase().trim()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const renderer = new marked.Renderer();

renderer.heading = (text, level, raw) => {
  const id = slug(raw);
  return `<h${level} id="${id}">${text}${level > 1 ? ` <a class="anchor" href="#${id}" aria-label="Link do sekcji">#</a>` : ""}</h${level}>\n`;
};

renderer.link = (href, title, text) => {
  if (href) {
    const [path, hash] = href.split("#");
    if (LINK_MAP[path] !== undefined) href = LINK_MAP[path] + (hash ? "#" + hash : "");
  }
  const external = /^https?:\/\//.test(href || "");
  return `<a href="${href}"${title ? ` title="${title}"` : ""}${external ? ' rel="noopener" target="_blank"' : ""}>${text}</a>`;
};

renderer.code = (code, lang) => {
  if (lang === "mermaid") return `<pre class="mermaid">${escapeHtml(code)}</pre>\n`;
  return `<pre><code${lang ? ` class="language-${lang}"` : ""}>${escapeHtml(code)}</code></pre>\n`;
};

// Tabele w przewijanym kontenerze (wąskie ekrany).
renderer.table = (header, body) => {
  // Pusty nagłówek (tabela "| | |" w Markdown) pomijamy.
  const emptyHeader = header.replace(/<[^>]+>/g, "").trim() === "";
  return `<div class="table-wrap"><table>${emptyHeader ? "" : `<thead>${header}</thead>`}<tbody>${body}</tbody></table></div>\n`;
};

marked.use({ renderer, gfm: true });

const template = readFileSync(join(ROOT, "tools", "doc-template.html"), "utf8");

for (const page of PAGES) {
  let md = readFileSync(join(ROOT, "zrodla-md", page.src), "utf8");
  md = md.replace(/<!--[\s\S]*?-->/g, ""); // noty dla wydawcy nie trafiają na stronę
  const html = marked.parse(md);
  // Wzory dokumentów prawnych: informacja dla czytelnika o polach do uzupełnienia.
  const notice = page.template
    ? `<blockquote><p><strong>Wzór dokumentu.</strong> Ten dokument jest częścią projektu SafeCheck oferowanego na sprzedaż. Pola w nawiasach kwadratowych [ … ] uzupełnia wydawca aplikacji.</p></blockquote>
`
    : "";

  const nav = PAGES.map((p) =>
    `<a href="${p.out}"${p.out === page.out ? ' aria-current="page"' : ""}>${p.title}</a>`
  ).join("\n          ");

  const out = template
    .replaceAll("{{TITLE}}", page.title)
    .replaceAll("{{DESCRIPTION}}", page.description)
    .replaceAll("{{URL}}", `${SITE}/${page.out}`)
    .replaceAll("{{NAV}}", nav)
    .replaceAll("{{MERMAID}}", page.mermaid
      ? `<script type="module">import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";mermaid.initialize({ startOnLoad: true, theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default" });</script>`
      : "")
    .replace("{{CONTENT}}", notice + html);

  writeFileSync(join(ROOT, page.out), out);
  console.log(`✓ ${page.src} -> ${page.out}`);
}
