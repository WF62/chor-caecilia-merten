import './Hero.css'

export default function Hero({ eyebrow, title, text, children }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="hero__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}
