// Platzhalter-Termine – bitte durch echte Termine des Chors ersetzen.
export const termine = [
  {
    id: 1,
    datum: '2026-09-10',
    zeit: '19:30',
    titel: 'Chorprobe',
    ort: 'Pfarrheim Merten',
    beschreibung: 'Reguläre wöchentliche Probe, neue Sängerinnen und Sänger sind herzlich willkommen.',
  },
  {
    id: 2,
    datum: '2026-11-22',
    zeit: '17:00',
    titel: 'Cäcilienfest',
    ort: 'St. Cäcilia Merten',
    beschreibung: 'Feierlicher Gottesdienst zu Ehren unserer Patronin mit anschließendem Beisammensein.',
  },
  {
    id: 3,
    datum: '2026-12-13',
    zeit: '18:00',
    titel: 'Weihnachtskonzert',
    ort: 'St. Cäcilia Merten',
    beschreibung: 'Adventliches und weihnachtliches Programm mit Gastchor.',
  },
  {
    id: 4,
    datum: '2027-04-05',
    zeit: '10:00',
    titel: 'Osterhochamt',
    ort: 'St. Cäcilia Merten',
    beschreibung: 'Musikalische Gestaltung des Osterhochamts.',
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
