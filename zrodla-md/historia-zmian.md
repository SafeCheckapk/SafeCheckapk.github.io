# Historia zmian

Format zgodny z [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/), wersjonowanie: `versionName` (`versionCode`).

## [2.5.3] (19)

### Naprawione
- **Fałszywy alarm po przywróceniu kopii zapasowej.** Ustawienia aplikacji mogą być przenoszone przez systemową kopię zapasową Androida. Wcześniej wraz z nimi wracał stary, zwykle już miniony termin licznika, więc pierwsze otwarcie aplikacji na nowym telefonie mogło od razu uruchomić alarm, a bez reakcji wysłać SMS do opiekunów. Termin licznika jest teraz w osobnym pliku `safecheck_device_state`, wyłączonym z kopii. Po przywróceniu licznik startuje od nowa i pojawia się komunikat „Przywrócono ustawienia z kopii. Licznik liczy od nowa.”.
- **Link w zaproszeniu SMS** prowadził do Google Play, gdzie aplikacji nie ma. Teraz prowadzi do strony pobierania (`safecheck.downloadUrl`).

### Zmienione
- Reguły kopii zapasowej (`backup_rules.xml`, `data_extraction_rules.xml`) obejmują wyłącznie plik ustawień `safecheck_local_db.xml`.
- Migracja: termin licznika zapisany przez wersje ≤ 2.5.2 jest automatycznie przenoszony do nowego pliku przy pierwszym uruchomieniu.
- `AlarmService` i `BootReceiver` korzystają z `LocalPrefs`, a nazwy plików i kluczy są w jednym miejscu.
- Domyślne linki do dokumentów prowadzą do strony projektu `https://safecheckapk.github.io`.
- Dokumentacja: dokładny opis kopii zapasowej (co jest przenoszone, a co nie), model dystrybucji przez APK (bez Google Play), ryzyko reklam AdMob bez publikacji w sklepie.

## [2.5.2] (18)

### Naprawione
- **Fałszywy alarm po zmianie długości licznika.** Aplikacja utrzymywała dwa niezależne alarmy systemowe (`requestCode` 1 i 1001). Alarm 1001 nie był przesuwany przy zmianie czasu w oknie „Ustaw czas”, więc mógł wybuchnąć w starym terminie, a przy braku reakcji wysłać SMS do opiekunów. Teraz `AlarmScheduler` utrzymuje jeden alarm, a stary alarm 1001 jest zawsze anulowany (także po aktualizacji z 2.5.1).
- **Alarm po „Usuń konto”.** `cancelAlarm()` nie anulował alarmu 1001, przez co telefon mógł zadzwonić po usunięciu danych. Naprawione razem z powyższym.
- **Tytuł okna wyboru kraju** wyświetlał „Wybierz Język”. Dodano string `select_country` (EN/PL/DE/FR).
- **Brak spacji w zgodzie na regulamin** („AkceptujęRegulaminiPolitykę Prywatności”). Stringi `accept` i `and` w 4 językach mają teraz spacje (w cudzysłowie, żeby Android ich nie obcinał).
- **Ucięty tytuł w górnym pasku** ekranu głównego (sztywna wysokość 75 dp nie mieściła paska statusu). Usunięto sztywną wysokość.
- **Zawartość karty licznika przesunięta w lewo**: kolumna ma teraz pełną szerokość karty.

### Dodane
- **Formularz zgody na reklamy (Google UMP 2.2.0, RODO/TCF)** – `AdsConsentManager.kt`. Reklamy (baner i pełnoekranowa) ładują się dopiero po uzyskaniu zgody lub gdy zgoda nie jest wymagana w danym regionie. W „O aplikacji” jest nowy przycisk **Ustawienia prywatności reklam** (string `ad_privacy_settings`, 4 języki). W buildach debug region jest wymuszany na EOG.

### Zmienione
- Dane indywidualne (applicationId, identyfikatory AdMob, linki do dokumentów) przeniesione do `gradle.properties` i przekazywane przez `BuildConfig` / `manifestPlaceholders`.
- Pakiet kodu: `com.example.safecheck`. Podpis `powered_by` jest teraz neutralny, a ekran startowy korzysta ze stringu zamiast tekstu wpisanego na sztywno.
- Komentarze w całym kodzie, dokumentacja techniczna, instrukcja, regulamin i polityka prywatności (`docs/`).

## [2.5.1] (17)
- Wersja opublikowana w Google Play. Punkt wyjścia projektu.
