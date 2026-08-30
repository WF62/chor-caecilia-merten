import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import './Galerie.css'

const platzhalter = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Bild ${i + 1}`,
}))

export default function Galerie() {
  useSEO('Galerie', 'Impressionen von Auftritten, Proben und Chorfahrten des Chores Cäcilia Merten.')

  return (
    <>
      <Hero
        eyebrow="Galerie"
        title="Impressionen"
        text="Hier entstehen bald Fotos von Konzerten, Proben und Chorfahrten. Aktuell noch Platzhalter."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {platzhalter.map((p) => (
              <div className="gallery-tile" key={p.id}>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
