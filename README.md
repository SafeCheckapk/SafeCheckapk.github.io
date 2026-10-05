# SafeCheck – strona projektu

Strona promocyjna aplikacji **SafeCheck** (Android), publikowana przez GitHub Pages:
**https://safecheckapk.github.io**

SafeCheck to aplikacja bezpieczeństwa typu *dead man's switch*. Jeśli użytkownik nie potwierdzi obecności przed upływem ustawionego czasu, telefon włącza alarm, a następnie wysyła SMS z lokalizacją GPS do wskazanych opiekunów.

**Projekt jest na sprzedaż.** Kod źródłowy znajduje się w osobnym, prywatnym repozytorium. Kontakt: [Discussions](https://github.com/SafeCheckapk/SafeCheckapk.github.io/discussions) lub pxware@pxware.pl.

## Pobieranie

Plik APK (wersja demonstracyjna) jest dostępny w zakładce [Releases](https://github.com/SafeCheckapk/SafeCheckapk.github.io/releases/latest).

## Struktura repozytorium

| Ścieżka | Zawartość |
|---|---|
| `index.html` | strona główna |
| `instrukcja.html`, `regulamin.html`, `polityka-prywatnosci.html`, `dokumentacja-techniczna.html`, `historia-zmian.html` | strony dokumentów **generowane** z `zrodla-md/` |
| `zrodla-md/` | źródła dokumentów w Markdown – edytuj tutaj |
| `tools/build-docs.mjs`, `tools/doc-template.html` | generator stron dokumentów i ich szablon |
| `assets/` | style, ikony, logo, zrzuty ekranu, obraz Open Graph |
| `robots.txt`, `sitemap.xml` | pliki dla wyszukiwarek |
| `404.html`, `site.webmanifest`, `favicon*`, `apple-touch-icon.png` | strona błędu i ikony |
| `.nojekyll` | wyłącza przetwarzanie Jekyll w GitHub Pages |

## Edycja dokumentów

```bash
npm install      # jednorazowo (Node.js 18+)
npm run build    # generuje *.html z zrodla-md/*.md
```

Po zmianie zaktualizuj datę `<lastmod>` w `sitemap.xml`.

## Google Search Console

1. Dodaj usługę `https://safecheckapk.github.io/` w [Search Console](https://search.google.com/search-console).
2. Weryfikacja: metoda „Tag HTML” – wklej meta tag w `index.html` (miejsce oznaczone komentarzem) albo „Plik HTML” – wgraj plik `google….html` do katalogu głównego.
3. Prześlij mapę witryny: `sitemap.xml`.

© 2026 SafeCheck. Wszelkie prawa zastrzeżone – zob. [LICENSE.md](LICENSE.md). Ikony: Material Symbols (Apache 2.0).
