# Chor Cäcilia Merten — Website

Website des Chores Cäcilia Merten. React 18 + Vite + React Router, kein CSS-Framework.

## Start

```bash
npm install
npm run dev      # Port 5173
```

## Build

```bash
npm run build
```

## Seiten (`src/pages/`)

| Route | Datei | Inhalt |
|---|---|---|
| `/` | Home.jsx | Startseite: Hero, Stimmen, nächste Termine |
| `/ueber-uns` | UeberUns.jsx | Geschichte, Vorstand & Chorleitung, Repertoire |
| `/termine` | Termine.jsx | Alle Termine (Platzhalterdaten in `src/data/termine.js`) |
| `/galerie` | Galerie.jsx | Foto-Galerie (aktuell Platzhalter-Kacheln) |
| `/presse` | Presse.jsx | Presse-Archiv (Daten in `src/data/presse.js`) |
| `/mitglied-werden` | MitgliedWerden.jsx | Ablauf des Einstiegs + Kontaktformular |
| `/kontakt` | Kontakt.jsx | Adresse, Erreichbarkeit, Kontaktformular |
| `/mitgliederbereich` | Mitgliederbereich.jsx | Interner Bereich mit echtem Login (siehe unten) |
| `/impressum` | Impressum.jsx | Impressum (Platzhaltertext, muss ausgefüllt werden) |
| `/datenschutz` | Datenschutz.jsx | Datenschutzerklärung (Platzhaltertext, muss ausgefüllt werden) |

## Mitgliederbereich

Echtes Login pro Mitglied (E-Mail/Passwort) über Supabase Auth, kein gemeinsames Passwort.
Zugriffsschutz läuft über Row Level Security (RLS) in der Datenbank, nicht nur im Frontend.

**Wichtig — geteiltes Supabase-Projekt:** Aus Kostengründen (Supabase-Free-Tier erlaubt nur
2 aktive Projekte, beide waren bereits durch andere Apps belegt) läuft der Mitgliederbereich
im selben Supabase-Projekt wie die "Rikscha"-App (`hcbqmqyxpasojbrewnps`), **nicht** in einem
eigenen Projekt. Alle Chor-Tabellen tragen deshalb das Präfix `chor_` und haben eigene RLS-Policies,
die keinen Bezug zu den übrigen Tabellen des Projekts haben. Einzige geteilte Ressource ist der
Auth-Nutzerpool (`auth.users`) — ein Login-Konto ist projektweit gültig, verschafft aber ohne
passende Zeile in `chor_mitglieder` keinen Zugriff auf Chor-Daten. Client-seitig verwendet
(`src/lib/supabaseClient.js`) den öffentlichen Publishable Key dieses Projekts; per
`VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` überschreibbar, falls später auf ein eigenes
Supabase-Projekt umgezogen wird.

**Neue Mitglieder einladen:** Über das Admin-UI (siehe unten, Tab "Einladungen") oder alternativ
per Supabase-Dashboard/SQL-Editor:

```sql
insert into public.chor_einladungen (email) values ('neue.person@example.com');
```

Das Konto muss noch nicht existieren. Sobald sich die Person mit exakt dieser E-Mail-Adresse
über "Konto anlegen" auf `/mitgliederbereich` registriert (und die Bestätigungs-Mail von
Supabase Auth bestätigt), schaltet ein serverseitiger Trigger (`chor_handle_new_user`) automatisch
eine Zeile in `chor_mitglieder` frei — danach sieht die Person die Dokumentstruktur. Ohne passende
Einladung bleibt das Konto ohne Zugriff (Meldung "Noch kein Zugang").

**Dateistruktur:** Kategorien in `chor_dokument_kategorien` (aktuell: Noten, Protokolle,
Formulare, Sonstiges), Dokumente in `chor_dokumente` je Kategorie. `dateiurl` ist aktuell ein
frei eintragbarer Link (z. B. zu einer extern gehosteten Datei) — es gibt noch keinen echten
Datei-Upload/-Speicher direkt in der App (z. B. Supabase Storage), das wäre ein separater
Ausbauschritt.

### Admin-UI (`src/components/AdminBereich.jsx`)

Mitglieder mit `chor_mitglieder.ist_admin = true` sehen unterhalb der Dokumentstruktur einen
zusätzlichen Admin-Bereich mit drei Tabs:

- **Einladungen** — neue Einladungen anlegen, Status (offen/registriert) einsehen, offene
  Einladungen löschen.
- **Dokumentstruktur** — Kategorien anlegen/umbenennen/löschen, Dokumente je Kategorie
  anlegen/löschen und ihre Datei-URL setzen.
- **Mitglieder** — rein lesende Übersicht aller registrierten Mitglieder inkl. Rolle.

Alles serverseitig über RLS abgesichert (`chor_is_admin()`-Helper-Funktion, `security definer`),
nicht nur UI-seitig ausgeblendet — ein Nicht-Admin kommt über die API nicht an diese Schreibrechte.

**Ersten Admin einrichten:** Es gibt bewusst keine Self-Service-Admin-Werdung. Die Person muss
sich zunächst regulär einladen (`chor_einladungen`) und registrieren, danach im
Supabase-Dashboard/SQL-Editor:

```sql
update public.chor_mitglieder set ist_admin = true
where id = (select id from auth.users where email = 'vorstand@example.com');
```

Danach kann dieser erste Admin über das UI weitere Einladungen/Dokumente verwalten. Weitere
Admins ernennen läuft aktuell ebenfalls nur per SQL (bewusst nicht im UI, um versehentliche
Selbst-Beförderung/Rechte-Weitergabe zu vermeiden).

## Hinweise

- Adresse, Probenzeit, Vereinsname (e.V.), Chorgeschichte und Chorleitung
  (`src/data/organisation.js`, `src/pages/UeberUns.jsx`) sind bereits echte Angaben des Chores.
  Weiterhin **Platzhalter**: Telefonnummer, Registergericht/-nummer, 1. Vorsitzende/r,
  Schriftführung, Kassenführung (`src/data/organisation.js`, `src/pages/UeberUns.jsx`) sowie die
  Beispiel-Termine (`src/data/termine.js`) — bitte vor Veröffentlichung ersetzen.
- Das Kontaktformular (`src/components/ContactForm.jsx`) nutzt einen reinen `mailto:`-Link,
  es gibt kein Backend. Fotos für die Galerie liegen noch nicht vor (`src/pages/Galerie.jsx`).
- Dark/Light Mode per Klasse `dark` auf `<html>`, Umschalter in `Header.jsx`, Persistenz über
  `localStorage` (`cm_theme`).
- `useSEO(title, description)` (`src/hooks/useSEO.js`) setzt `<title>` und Meta-Description je Seite.
