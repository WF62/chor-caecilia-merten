import { Link } from 'react-router-dom'
import { ORGANISATION } from '../data/organisation'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h3>{ORGANISATION.name}</h3>
          <p>
            {ORGANISATION.probenort}
            <br />
            {ORGANISATION.strasse} · {ORGANISATION.plzOrt}
          </p>
        </div>

        <div>
          <h3>Kontakt</h3>
          <p>
            <a href={`mailto:${ORGANISATION.email}`}>{ORGANISATION.email}</a>
            <br />
            <a href={ORGANISATION.telefonHref}>{ORGANISATION.telefon}</a>
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
        © {new Date().getFullYear()} {ORGANISATION.name}
      </p>
    </footer>
  )
}
