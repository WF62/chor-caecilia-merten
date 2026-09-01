import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import { presse } from '../data/presse'

export default function Presse() {
  useSEO('Presse & Berichte', 'Presseberichte und Rückblicke des Kirchenchores Cäcilia Merten.')

  return (
    <>
      <Hero
        eyebrow="Presse & Berichte"
        title="Presse & Berichte"
        text="Ein Rückblick auf Berichte, Auszeichnungen und Ereignisse aus dem Vereinsleben."
      />

      <section className="section">
        <div className="container">
          <p style={{ fontSize: '0.85rem', marginBottom: '2rem' }}>
            Einträge ohne Link sind Zeitungsartikel, die aus Urheberrechtsgründen nicht online
            zur Verfügung stehen (mit *) markiert).
          </p>
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '1.25rem' }}>
            {presse.map((eintrag) => (
              <div className="card" key={eintrag.anlass}>
                <h3 style={{ marginTop: 0 }}>{eintrag.anlass}</h3>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  {eintrag.berichte.map((bericht) => (
                    <li key={bericht.titel}>
                      {bericht.url ? (
                        <a href={bericht.url} target="_blank" rel="noreferrer">
                          {bericht.titel}
                        </a>
                      ) : (
                        bericht.titel
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
