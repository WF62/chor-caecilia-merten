import { useState } from 'react'
import { ORGANISATION } from '../data/organisation'
import './ContactForm.css'

const EMPFAENGER = ORGANISATION.email

export default function ContactForm({ betreffVorgabe }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    betreff: betreffVorgabe || '',
    nachricht: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = `${form.nachricht}\n\n— ${form.name} (${form.email})`
    const mailto = `mailto:${EMPFAENGER}?subject=${encodeURIComponent(
      form.betreff || 'Nachricht über die Website'
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required value={form.name} onChange={handleChange} />
      </label>
      <label>
        E-Mail
        <input type="email" name="email" required value={form.email} onChange={handleChange} />
      </label>
      <label>
        Betreff
        <input type="text" name="betreff" value={form.betreff} onChange={handleChange} />
      </label>
      <label>
        Nachricht
        <textarea name="nachricht" rows={5} required value={form.nachricht} onChange={handleChange} />
      </label>
      <button type="submit" className="btn">Nachricht senden</button>
      <p className="contact-form__hint">
        Öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht an {EMPFAENGER}.
      </p>
    </form>
  )
}
