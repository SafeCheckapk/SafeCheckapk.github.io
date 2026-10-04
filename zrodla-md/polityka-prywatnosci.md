<!--
  NOTA DLA WYDAWCY APLIKACJI (niewidoczna po wyrenderowaniu):
  1. Uzupełnij pola […] i zleć weryfikację prawnikowi.
  2. Rozdział 6 opisuje formularz zgody Google UMP zaimplementowany w aplikacji
     (AdsConsentManager.kt). Przed publikacją opublikuj komunikat zgody w konsoli
     AdMob (Privacy & messaging -> European regulations).
  3. Jeśli zmienisz działanie aplikacji (np. dodasz serwer, analitykę, logowanie),
     zaktualizuj ten dokument PRZED wydaniem nowej wersji.
-->

# Polityka prywatności aplikacji SafeCheck

**Obowiązuje od:** [DATA WEJŚCIA W ŻYCIE]

W tym dokumencie wyjaśniamy, jakie dane wykorzystuje aplikacja **SafeCheck** („**Aplikacja**”), w jakim celu, komu są przekazywane i jakie prawa Ci przysługują. Dokument spełnia obowiązek informacyjny z art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 („**RODO**”).

---

## 1. Najważniejsze w skrócie

- ✅ **Nie masz u nas konta, a my nie mamy serwera.** Twoje imię, numery opiekunów i ustawienia są zapisane **tylko w Twoim telefonie**.
- ✅ **Nie widzimy Twoich danych.** Dostawca Aplikacji nie otrzymuje Twojego imienia, numerów, lokalizacji ani kontaktów.
- 📍 **Lokalizacja** jest pobierana tylko w chwili alarmu, gdy nie zareagujesz, i trafia wyłącznie w SMS-ie do wskazanych przez Ciebie opiekunów.
- 📇 **Kontakty** są odczytywane tylko wtedy, gdy otworzysz „Zaproś znajomych”, i nie są nigdzie zapisywane ani wysyłane.
- 📢 **Reklamy** dostarcza Google AdMob, który przetwarza dane urządzenia (m.in. identyfikator reklamowy) zgodnie z zasadami Google.
- 🗑 Wszystkie dane usuniesz funkcją **„Usuń konto”** albo odinstalowując Aplikację.

---

## 2. Administrator danych

W zakresie, w jakim przetwarzamy dane osobowe, administratorem jest:

**[NAZWA FIRMY / IMIĘ I NAZWISKO]**
[ADRES]
NIP: [NIP]
e-mail: **[E-MAIL KONTAKTOWY]**

W sprawach dotyczących danych osobowych pisz na powyższy adres e-mail.

> **Ważne:** większość danych w Aplikacji (imię, numery opiekunów, ustawienia) **nie trafia do administratora**. Są przetwarzane lokalnie na Twoim urządzeniu i pod Twoją kontrolą. Administrator nie ma do nich dostępu i nie może ich odczytać, poprawić ani usunąć zdalnie.

---

## 3. Jakie dane wykorzystuje Aplikacja

| Dane | Skąd | Gdzie są przechowywane | Do czego służą |
|---|---|---|---|
| **Imię** | wpisujesz je przy konfiguracji | tylko w telefonie | podpisanie SMS-a alarmowego („Anna NIE POTWIERDZIŁ OBECNOŚCI!”) |
| **Numery telefonów opiekunów** | wpisujesz je | tylko w telefonie | wysłanie SMS-a alarmowego i wiadomości o fałszywym alarmie |
| **Ustawienia** (język, długość licznika, termin, postęp konfiguracji) | Aplikacja | tylko w telefonie | działanie licznika i Aplikacji |
| **Lokalizacja urządzenia** (GPS) | system Android / usługi Google Play | **nie jest zapisywana** | jednorazowo, w chwili wysłania SMS-a alarmowego, jako link do mapy w treści SMS |
| **Kontakty z książki telefonicznej** (imię, numer) | system Android | **nie są zapisywane** | wyświetlenie listy w oknie „Zaproś znajomych”, gdy je otworzysz |
| **Dane urządzenia i identyfikator reklamowy** | Google AdMob | po stronie Google | wyświetlanie reklam (patrz rozdział 6) |

Aplikacja **nie** zbiera: adresu e-mail, haseł, danych o zdrowiu, historii przeglądania, nagrań audio ani zdjęć. Nie stosujemy też własnych narzędzi analitycznych.

---

## 4. Przekazywanie danych – kto je otrzymuje

### 4.1 Opiekunowie (SMS alarmowy)
Jeśli licznik dojdzie do zera i nie zareagujesz na alarm, Aplikacja wysyła **z Twojego telefonu** SMS do opiekunów. SMS zawiera:
- Twoje imię,
- informację o braku potwierdzenia obecności,
- jeśli to możliwe, Twoją lokalizację w postaci współrzędnych i linków do Google Maps i Apple Maps.

Jeśli potem potwierdzisz obecność, opiekunowie dostaną SMS o fałszywym alarmie.

### 4.2 Zapraszane osoby
Po naciśnięciu „Zaproś” przy wybranym kontakcie wysyłany jest SMS z linkiem do Aplikacji w Google Play. Robisz to świadomie, dla każdej osoby osobno.

### 4.3 Operator komórkowy
SMS-y wysyła Twój operator na zasadach Twojej umowy z nim. Operator jest odrębnym administratorem danych związanych z usługą telekomunikacyjną.

### 4.4 Google
- **Google AdMob** (Google Ireland Limited): reklamy, patrz rozdział 6.
- **Usługi lokalizacyjne Google Play**: system ustala pozycję urządzenia na żądanie Aplikacji. Google przetwarza dane lokalizacyjne zgodnie z [Polityką prywatności Google](https://policies.google.com/privacy) i ustawieniami lokalizacji na Twoim koncie Google.
- **Kopia zapasowa Androida**: jeśli masz ją włączoną, system może zapisać ustawienia Aplikacji (w tym imię i numery opiekunów) w kopii na Twoim koncie Google, aby przywrócić je po zmianie telefonu. Funkcję tę wyłączysz w ustawieniach telefonu (*Ustawienia → Google → Kopia zapasowa*).

Administrator **nie sprzedaje** danych i nie przekazuje ich innym podmiotom.

---

## 5. Cele i podstawy prawne

| Cel | Podstawa prawna (RODO) |
|---|---|
| Świadczenie usługi: licznik, alarm, SMS do opiekunów, zaproszenia | art. 6 ust. 1 lit. b (wykonanie umowy, czyli Regulaminu) |
| Dołączenie lokalizacji do SMS-a alarmowego | art. 6 ust. 1 lit. b oraz Twoja zgoda na dostęp do lokalizacji udzielona w systemie Android, którą możesz w każdej chwili cofnąć |
| Wyświetlanie reklam niespersonalizowanych | art. 6 ust. 1 lit. f (prawnie uzasadniony interes, czyli finansowanie bezpłatnej Aplikacji) |
| Wyświetlanie reklam spersonalizowanych, dostęp do identyfikatora reklamowego | art. 6 ust. 1 lit. a (zgoda) oraz art. 399 ustawy – Prawo komunikacji elektronicznej |
| Obsługa zapytań i reklamacji wysłanych e-mailem | art. 6 ust. 1 lit. b i lit. f |

**Dane opiekunów.** Wpisując numer opiekuna, sam decydujesz o wykorzystaniu jego danych dla bezpieczeństwa swojego i swojej rodziny. Prosimy, poinformuj opiekunów o tym fakcie.

---

## 6. Reklamy (Google AdMob)

Aplikacja wyświetla reklamy dostarczane przez **Google Ireland Limited**, Gordon House, Barrow Street, Dublin 4, Irlandia.

Google może w tym celu przetwarzać m.in.:
- identyfikator reklamowy urządzenia,
- adres IP,
- informacje o urządzeniu i systemie,
- przybliżoną lokalizację wynikającą z adresu IP,
- informacje o interakcjach z reklamami.

Celem jest wyświetlanie reklam, pomiar ich skuteczności i zapobieganie oszustwom.

- **Zgoda (EOG, Wielka Brytania, Szwajcaria):** przy pierwszym uruchomieniu Aplikacja wyświetla formularz zgody Google. Możesz zgodzić się na reklamy spersonalizowane albo z nich zrezygnować. Wtedy wyświetlane są reklamy niespersonalizowane.
- **Zmiana decyzji:** *Menu → O aplikacji → Ustawienia prywatności reklam* (przycisk jest widoczny w regionach, w których wymagana jest zgoda).
- **Identyfikator reklamowy:** możesz go usunąć lub zresetować w *Ustawienia → Google → Reklamy* (lub *Ustawienia → Prywatność → Reklamy*).
- Szczegóły: [Jak Google wykorzystuje informacje z witryn i aplikacji partnerów](https://policies.google.com/technologies/partner-sites).

---

## 7. Przekazywanie danych poza EOG

Administrator nie przekazuje danych poza Europejski Obszar Gospodarczy. Google może przetwarzać dane w państwach trzecich, w tym w USA, na podstawie decyzji Komisji Europejskiej w sprawie odpowiedniego stopnia ochrony (*EU-U.S. Data Privacy Framework*) lub standardowych klauzul umownych.

---

## 8. Jak długo przechowujemy dane

| Dane | Okres |
|---|---|
| Imię, numery opiekunów, ustawienia | do czasu użycia funkcji „Usuń konto”, wyczyszczenia danych Aplikacji lub jej odinstalowania. Kopia zapasowa Google zgodnie z ustawieniami Twojego konta |
| Lokalizacja | nie jest przechowywana przez Aplikację. Pozostaje w treści wysłanych SMS-ów u Ciebie i u odbiorców |
| Kontakty | nie są przechowywane |
| Korespondencja e-mail z administratorem | przez czas potrzebny do obsługi sprawy, a następnie do upływu terminu przedawnienia roszczeń |
| Dane reklamowe | zgodnie z zasadami Google |

---

## 9. Twoje prawa

Przysługuje Ci prawo do:
- dostępu do danych i otrzymania ich kopii (art. 15 RODO),
- sprostowania danych (art. 16),
- usunięcia danych (art. 17),
- ograniczenia przetwarzania (art. 18),
- przenoszenia danych (art. 20),
- sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21),
- **cofnięcia zgody** w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania,
- **wniesienia skargi** do organu nadzorczego: Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, [uodo.gov.pl](https://uodo.gov.pl).

Ponieważ dane z Aplikacji są przechowywane w Twoim telefonie, większość praw realizujesz sam, bezpośrednio w Aplikacji:

| Chcę… | Jak to zrobić |
|---|---|
| zobaczyć lub zmienić imię | *Menu → Zarządzaj kontem → Edytuj* |
| zobaczyć lub zmienić numery opiekunów | *Menu → Zmień Opiekuna* |
| usunąć wszystkie dane | *Menu → Usuń konto* albo odinstalowanie Aplikacji |
| cofnąć zgodę na lokalizację lub kontakty | *Ustawienia telefonu → Aplikacje → SafeCheck → Uprawnienia* |
| zrezygnować z reklam spersonalizowanych | rozdział 6 |

W sprawie danych przetwarzanych przez Google (reklamy, lokalizacja, kopia zapasowa) możesz także kontaktować się bezpośrednio z Google: [myaccount.google.com](https://myaccount.google.com).

---

## 10. Uprawnienia systemowe

| Uprawnienie | Dlaczego |
|---|---|
| Wysyłanie SMS | wysyłka SMS-a alarmowego i zaproszeń |
| Lokalizacja (dokładna / przybliżona) | dołączenie pozycji do SMS-a alarmowego |
| Kontakty | lista osób w oknie „Zaproś znajomych” |
| Powiadomienia, powiadomienia pełnoekranowe | informacja o czuwaniu i wyświetlenie alarmu |
| Alarmy i przypomnienia, praca w tle, uruchamianie po restarcie, ignorowanie optymalizacji baterii, wyświetlanie nad innymi aplikacjami | niezawodne uruchomienie alarmu o czasie |
| Internet | wyłącznie reklamy |

Każde uprawnienie możesz cofnąć w ustawieniach telefonu. Część funkcji przestanie wtedy działać.

---

## 11. Dzieci

Aplikacja jest przeznaczona dla osób, które ukończyły **16 lat**. Nie kierujemy jej do dzieci i świadomie nie przetwarzamy ich danych.

---

## 12. Bezpieczeństwo

- Dane w telefonie są zapisane w prywatnym obszarze Aplikacji, niedostępnym dla innych aplikacji.
- Komunikacja wewnątrz Aplikacji jest ograniczona do jej własnych komponentów.
- **SMS nie jest kanałem szyfrowanym.** Treść wiadomości, w tym lokalizacja, jest przesyłana przez sieć operatora i przechowywana w telefonach odbiorców.
- Zabezpiecz telefon blokadą ekranu.

---

## 13. Zmiany polityki prywatności

O istotnych zmianach poinformujemy w Aplikacji lub w opisie aktualizacji w Google Play. Aktualna wersja jest zawsze dostępna pod adresem **[ADRES URL POLITYKI PRYWATNOŚCI]** oraz w Aplikacji (*Menu → O aplikacji → Polityka Prywatności*).

**Kontakt:** [E-MAIL KONTAKTOWY]
