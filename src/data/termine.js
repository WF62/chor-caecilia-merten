// Termine, teils übernommen von der offiziellen Kirchenchor-Seite der
// Pfarrgemeinde St. Martin Merten (sankt-martin-merten.de/gemeindeleben/
// choere/kirchenchor, Stand 28.08.2026) — Osterhochamt-Uhrzeit/-Ort dort
// noch nicht veröffentlicht, bleibt Platzhalter.
export const termine = [
  {
    id: 7,
    datum: '2026-08-30',
    zeit: '15:00',
    titel: 'Sommerfest',
    ort: '[Veranstaltungsort einfügen]',
    beschreibung: 'Geselliges Beisammensein des Kirchenchores.',
  },
  {
    id: 2,
    datum: '2026-11-22',
    zeit: '09:30',
    titel: 'Cäcilienfest',
    ort: 'Pfarrkirche St. Martin, Merten',
    beschreibung: 'Musikalische Mitgestaltung der Messe zu Ehren unserer Patronin, anschließend gemeinsames Frühstück.',
  },
  {
    id: 3,
    datum: '2026-12-13',
    zeit: '16:00',
    titel: '46. Weihnachtskonzert',
    ort: 'Pfarrkirche St. Martin, Merten',
    beschreibung:
      'Besonderes Weihnachtskonzert mit dem Ensemble Ars Millennium zum Abschied von ' +
      'Chorleiter Stephan Krings nach 32 Jahren. Um dieses Konzert zu finanzieren, sind wir ' +
      'auf Spenden angewiesen — siehe unsere 5-Euro-Aktion auf der Startseite.',
  },
  {
    id: 8,
    datum: '2026-12-13',
    zeit: '18:00',
    titel: 'Festakt zur Verabschiedung des Chorleiters',
    ort: 'Pfarrzentrum Merten',
    beschreibung: 'Im Anschluss an das Weihnachtskonzert: Festakt zur Verabschiedung von Chorleiter Stephan Krings.',
  },
  {
    id: 6,
    datum: '2026-12-25',
    zeit: '09:30',
    titel: 'Weihnachtsmesse',
    ort: 'Pfarrkirche St. Martin, Merten',
    beschreibung: 'Musikalische Mitgestaltung des Festhochamts zu Weihnachten mit dem Ensemble Ars Millennium.',
  },
  {
    id: 9,
    datum: '2027-01-19',
    zeit: '19:30',
    titel: 'Jahreshauptversammlung',
    ort: 'Pfarrzentrum Merten',
    beschreibung: 'Jährliche Mitgliederversammlung des Kirchenchores.',
  },
  {
    id: 4,
    datum: '2027-04-05',
    zeit: '10:00',
    titel: 'Osterhochamt',
    ort: '[Veranstaltungsort einfügen]',
    beschreibung: 'Musikalische Gestaltung des Osterhochamts.',
  },
  {
    id: 5,
    datum: '2027-05-06',
    zeit: 'ganztägig',
    titel: 'Chorausflug nach Schwerin',
    ort: 'Schwerin und Umgebung',
    beschreibung:
      'Mehrtägiger Ausflug von Christi Himmelfahrt (Donnerstag, 6. Mai) bis Sonntag, ' +
      '9. Mai 2027. Interessierte können sich schon jetzt melden.',
  },
]

export function formatiereDatum(iso) {
  return new Date(iso).toLocaleDateString('de-DE', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
