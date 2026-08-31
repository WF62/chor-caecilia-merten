import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ChurchIcon from './ChurchIcon'
import { ORGANISATION } from '../data/organisation'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Start', end: true },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/termine', label: 'Termine' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/mitglied-werden', label: 'Mitglied werden' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/mitgliederbereich', label: 'Mitgliederbereich' },
]

function getStoredTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem('cm_theme') || 'light'
}

export default function Header() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('cm_theme', theme)
  }, [theme])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <span className="site-header__brand-mark" aria-hidden="true">
            <ChurchIcon size={22} />
          </span>
          <span>
            {ORGANISATION.kurzname}
            <br />
            Chor Cäcilia Merten
          </span>
        </NavLink>

        <button
          type="button"
          className="site-header__burger"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="site-header__theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Farbmodus umschalten"
          >
            {theme === 'dark' ? '☀️ Hell' : '🌙 Dunkel'}
          </button>
        </nav>
      </div>
    </header>
  )
}
