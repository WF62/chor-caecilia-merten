import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h3>Chor Cäcilia Merten</h3>
          <p>
            Pfarrheim Merten
            <br />
            Kirchstraße 1 · 50389 Merten
          </p>
        </div>

        <div>
          <h3>Kontakt</h3>
          <p>
            <a href="mailto:info@chor-caecilia-merten.de">info@chor-caecilia-merten.de</a>
            <br />
            <a href="tel:+4922329912345">02232 / 99123 45</a>
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <nav className="site-footer__links">
            <Link to="/termine">Termine</Link>
            <Link to="/mitglied-werden">Mitglied werden</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>

      <p className="site-footer__copy">
        © {new Date().getFullYear()} Chor Cäcilia Merten
      </p>
    </footer>
  )
}
