import React from 'react'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="eyebrow reveal">Bagage académique</p>
        <h2 className="section-title reveal">Formation</h2>

        <div className="edu-lang-grid" style={{ gridTemplateColumns: '1fr' }}>
          {/* ── DIPLÔMES ── */}
          <div>
            <div className="edu-card reveal left">
              <div className="edu-degree-icon">🎓</div>
              <div>
                <div className="edu-degree">Diplôme national d'ingénieur en Téléinformatique</div>
                <div className="edu-school">ISITCOM — Institut Supérieur d'Informatique et des Technologies de Communication, Sousse</div>
                <div className="edu-meta">2023 – 2026</div>
              </div>
            </div>

            <div className="edu-card reveal left">
              <div className="edu-degree-icon">🎓</div>
              <div>
                <div className="edu-degree">Licence en ingénierie des systèmes informatiques</div>
                <div className="edu-school">ISITCOM — Institut Supérieur d'Informatique et des Technologies de Communication, Sousse</div>
                <div className="edu-meta">2020 – 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
