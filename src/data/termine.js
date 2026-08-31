// Platzhalter-Termine – bitte durch echte Termine des Chors ersetzen.
export const termine = [
  {
    id: 2,
    datum: '2026-11-22',
    zeit: '17:00',
    titel: 'Cäcilienfest',
    ort: '[Veranstaltungsort einfügen]',
    beschreibung: 'Feierlicher Gottesdienst zu Ehren unserer Patronin mit anschließendem Beisammensein.',
  },
  {
    id: 3,
    datum: '2026-12-13',
    zeit: '16:00',
    titel: 'Abschiedskonzert für Chorleiter Stephan Krings',
    ort: 'Pfarrkirche St. Martin, Merten',
    beschreibung:
      'Besonderes Weihnachtskonzert zum Abschied von Chorleiter Stephan Krings nach 32 Jahren. ' +
      'Um dieses Konzert zu finanzieren, sind wir auf Spenden angewiesen — siehe unsere ' +
      '5-Euro-Aktion auf der Startseite.',
  },
  {
    id: 6,
    datum: '2026-12-25',
    zeit: '[Uhrzeit einfügen]',
    titel: 'Weihnachtsmesse',
    ort: '[Veranstaltungsort einfügen]',
    beschreibung: 'Der Chor gestaltet die Weihnachtsmesse musikalisch mit.',
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
