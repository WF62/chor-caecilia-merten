import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO('Seite nicht gefunden')

  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>404 – Seite nicht gefunden</h1>
        <p>Die gesuchte Seite existiert leider nicht.</p>
        <Link to="/" className="btn">Zurück zur Startseite</Link>
      </div>
    </section>
  )
}
