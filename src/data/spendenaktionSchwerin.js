// Zweite, unabhängige "Allzesamme"-Kampagne neben der Weihnachtskonzert-Aktion
// (siehe src/data/spendenaktion.js) — eigener Kampagnen-Link, da beide Aktionen
// unterschiedliche Zwecke verfolgen und getrennt abgerechnet werden sollen.
// Kampagnen-Link ist noch Platzhalter. Spendenkonto nutzt (wie bei der
// Weihnachtskonzert-Aktion) das echte, auf der Pfarrei-Website veröffentlichte
// Konto der Pfarrgemeinde St. Martin Merten — der Verwendungszweck ordnet die
// Spende eindeutig dieser Aktion zu.
export const SPENDENAKTION_SCHWERIN = {
  aktiv: true,
  titel: '5-Euro-Aktion: Chorausflug nach Schwerin für alle',
  einleitung: [
    'Unser Mitgliedsbeitrag ist bewusst niedrig gehalten, damit alle interessierten ' +
      'Menschen bei uns mitsingen können. Wer mitsingt, soll auch mitfeiern und an ' +
      'unseren Ausflügen teilnehmen können.',
    'Mitglieder, die sich das aus den unterschiedlichsten Gründen nicht leisten können, ' +
      'sollen durch Spenden so weit unterstützt werden, dass eine Teilnahme an der ' +
      'Mehrtagesreise möglich ist. Ein ganz kleiner Kreis entscheidet dabei vertraulich, ' +
      'wer in welchem Umfang unterstützt wird.',
    'Auch unsere Mehrtagestour nach Schwerin und Umgebung können wir nur dann für alle ' +
      'realisieren, wenn Spenderinnen und Spender uns dabei unterstützen.',
  ],
  termin: {
    datum: 'Christi Himmelfahrt bis Sonntag, 6.–9. Mai 2027',
    ort: 'Schwerin und Umgebung',
  },
  aufruf:
    'Neben der 5-Euro-Aktion für unser Weihnachtskonzert richten wir dafür eine zweite, ' +
    'eigenständige Kampagne auf „Allzesamme" (Volksbank Köln Bonn) ein — jede Spende ab ' +
    '5 Euro hilft uns, den Ausflug für alle möglich zu machen.',
  hervorgehoben: [
    {
      text:
        'Ihre Spende kommt direkt der Teilnahme von Chormitgliedern zugute, die sich die ' +
        'Reise sonst nicht leisten könnten — wer wie viel Unterstützung erhält, entscheidet ' +
        'ein kleiner, vertraulicher Kreis, damit niemand offenlegen muss, dass er auf ' +
        'Unterstützung angewiesen ist.',
      betont: true,
    },
  ],
  plattform: 'Allzesamme (Volksbank Köln Bonn)',
  kampagnenUrl: '[Link zur Kampagne auf allzesamme.de einfügen]',
  spendenkonto: {
    inhaber: 'Kath. Pfarrgemeinde St. Martin Merten',
    iban: 'DE68 3806 0186 0410 3550 60',
    bic: 'GENODED1BRS',
    verwendungszweck: '5-Euro-Aktion Chorausflug Schwerin',
  },
}
