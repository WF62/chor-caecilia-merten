import './Timeline.css'

export default function Timeline({ eintraege }) {
  return (
    <ol className="timeline">
      {eintraege.map((e) => (
        <li className="timeline__item" key={e.jahr}>
          <div className="timeline__marker">
            <span className="timeline__dot" />
          </div>
          <div className="timeline__content">
            <span className="timeline__jahr">{e.jahr}</span>
            <h3>{e.titel}</h3>
            <p>{e.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
