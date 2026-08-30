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

**Neue Mitglieder einladen (nur der Vorstand, per Supabase-Dashboard/SQL-Editor):**

```sql
insert into public.chor_einladungen (email) values ('neue.person@example.com');
```

Das Konto muss noch nicht existieren. Sobald sich die Person mit exakt dieser E-Mail-Adresse
über "Konto anlegen" auf `/mitgliederbereich` registriert (und die Bestätigungs-Mail von
Supabase Auth bestätigt), schaltet ein serverseitiger Trigger (`chor_handle_new_user`) automatisch
eine Zeile in `chor_mitglieder` frei — danach sieht die Person die Dokumentstruktur. Ohne passende
Einladung bleibt das Konto ohne Zugriff (Meldung "Noch kein Zugang").

**Dateistruktur:** Kategorien in `chor_dokument_kategorien` (aktuell: Noten, Protokolle,
Formulare, Sonstiges), Dokumente in `chor_dokumente` je Kategorie. `dateiurl` ist aktuell leer —
es gibt noch keinen echten Datei-Upload/-Speicher (z. B. Supabase Storage), das wäre ein
separater Ausbauschritt. Kategorien/Dokumente aktuell nur per SQL im Supabase-Dashboard pflegbar,
kein Admin-UI in der App.

## Hinweise

- Alle Inhalte (Adresse, Termine, Ansprechpartner, Impressum/Datenschutz-Texte) sind
  **Platzhalter** und müssen vor Veröffentlichung durch echte Angaben des Chors ersetzt werden.
- Das Kontaktformular (`src/components/ContactForm.jsx`) nutzt einen reinen `mailto:`-Link,
  es gibt kein Backend. Fotos für die Galerie liegen noch nicht vor (`src/pages/Galerie.jsx`).
- Dark/Light Mode per Klasse `dark` auf `<html>`, Umschalter in `Header.jsx`, Persistenz über
  `localStorage` (`cm_theme`).
- `useSEO(title, description)` (`src/hooks/useSEO.js`) setzt `<title>` und Meta-Description je Seite.
