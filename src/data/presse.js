// Presse-Archiv, übernommen von der offiziellen Kirchenchor-Seite der
// Pfarrgemeinde St. Martin Merten (sankt-martin-merten.de/gemeindeleben/
// choere/kirchenchor, Abschnitt "Presse & Berichte", zuletzt ergänzt dort
// am 01.02.2017). Einträge ohne url sind Zeitungsartikel, die laut Pfarrei
// aus Urheberrechtsgründen nicht online verfügbar sind.
const BASE = 'https://www.sankt-martin-merten.de/images/gruppen/kirchenchor/download/'

export const presse = [
  {
    anlass: 'Pressestimmen zu Vorstandswahlen 2017',
    berichte: [
      { titel: 'Stabübergabe in Merten – Bonner Rundschau', url: BASE + 'Stabuebergabe_in_Merten_Rundschau.pdf' },
      { titel: 'Meyer folgt Marx – General-Anzeiger', url: BASE + 'Meyer_folgt_Marx_General_Anzeiger.PDF' },
    ],
  },
  {
    anlass: 'Vorstandswahlen 2017',
    berichte: [{ titel: 'Generation Zukunft', url: BASE + '2017-01-30_Generation_Zukunft.pdf' }],
  },
  {
    anlass: 'Neujahrswanderung der Kirchenchor-Männer 2017',
    berichte: [
      { titel: 'Sänger versuchen sich als Schützen – Bonner Rundschau', url: BASE + '2017_Neujahrswanderung_1_Rundschau.jpg' },
      { titel: 'Op Jöck', url: BASE + '2017-01-31_Neujahrswanderung.pdf' },
    ],
  },
  {
    anlass: 'Jahreshauptversammlung am 17. Januar 2017',
    berichte: [{ titel: 'Geschäftsbericht 2016', url: BASE + '2017-01-20_Gesch%C3%A4ftsbericht_Final_v5.pdf' }],
  },
  {
    anlass: 'Ehrung langjähriger Sängerinnen am 11. Dezember 2016',
    berichte: [{ titel: 'Pressemitteilung zu Ehrungen in 2016', url: BASE + '2016_Ehrung_f%C3%BCr_viele_Jahre_Chorgesang.pdf' }],
  },
  {
    anlass: 'Mehrtagesfahrt 2016',
    berichte: [{ titel: 'Kirchenchor Cäcilia Merten auf „Tournee" 05.–08.05.2016', url: BASE + 'Dreilaendertour_Kirchenchor_Merten_2016-2.pdf' }],
  },
  {
    anlass: 'Auf den Spuren der Seidenweber',
    berichte: [{ titel: 'Besuch bei Freunden vom 16.04.2016', url: BASE + 'Der_Chor_trifft_seine_Freude.pdf' }],
  },
  {
    anlass: 'Karnevalistische Chorprobe am 2. Februar 2016',
    berichte: [{ titel: 'Bericht MeUl vom 10.02.2016', url: BASE + '2016-02-10-karnevalistische_Chorprobe_Pfarrbrief_1.pdf' }],
  },
  {
    anlass: 'Jahreshauptversammlung am 12. Januar 2016',
    berichte: [{ titel: 'Bericht MeUl vom 11.02.2016', url: BASE + '2016-02-11_Jahreshauptversammlung.pdf' }],
  },
  {
    anlass: 'Geschäftsbericht 2015',
    berichte: [{ titel: 'Bericht MeUl vom 12.01.2016', url: 'https://www.sankt-martin-merten.de/images/gruppen/kirchenchor/2016-01-12_Gesch%C3%A4ftsbericht-2015.pdf' }],
  },
  {
    anlass: '37. Weihnachtskonzert am 13. Dezember 2015',
    berichte: [
      { titel: 'Bonner Generalanzeiger vom 16. Dezember 2015 *)' },
      { titel: 'Wir Bornheimer vom 26. Dezember 2015 *)' },
    ],
  },
  {
    anlass: 'Tagesfahrt zum Lava-Dome am 27. Juni 2015',
    berichte: [{ titel: 'Bericht MeUl vom 15.08.2014', url: BASE + '2015-08-15-Tagesausflug_Pfarrbrief_Internet_.pdf' }],
  },
  {
    anlass: 'Chorprojekt ab 24. Februar 2015',
    berichte: [{ titel: 'Bonner Generalanzeiger vom 11.02.2015 *)' }],
  },
  {
    anlass: 'Karnevalistische Chorprobe am 10. Februar 2015',
    berichte: [{ titel: 'Bericht MeUl vom 03.03.2015', url: BASE + '2015-03-03-karnevalistische_Chorprobe_Pfarrbrief.pdf' }],
  },
  {
    anlass: 'Jahreshauptversammlung am 13. Januar 2015',
    berichte: [
      { titel: 'Bericht MeUl vom 03.03.2015', url: BASE + '2015-03-03-%C3%84nderung_im_Vorstand_Pfarrbrief.pdf' },
      { titel: 'Mitteilungsblatt Bornheim vom 14.02.2015 *)' },
      { titel: 'Bonner Rundschau vom 07.02.2015 *)' },
    ],
  },
  {
    anlass: 'Weihnachtsfeier mit Ehrung der Jubilare am 14. Dezember 2014',
    berichte: [{ titel: 'Brühler Schloßbote vom 11. März 2015 *)' }],
  },
]
