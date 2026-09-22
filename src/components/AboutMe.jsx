import React from 'react'

export default function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <p className="eyebrow reveal">À propos</p>
        <h2 className="section-title reveal">Qui suis-je ?</h2>
        
        <div className="edu-lang-grid" style={{ gap: '40px', alignItems: 'center' }}>
          <div className="reveal left">
            <p className="section-intro" style={{ marginBottom: '20px' }}>
              Ingénieure diplômée en Téléinformatique de l'ISITCOM Sousse, spécialisée en intelligence artificielle et développement logiciel. Passionnée par les technologies d'IA et le développement web.
            </p>
            <p className="section-intro" style={{ marginBottom: '20px' }}>
              Rigoureuse, curieuse et dotée d'un bon esprit d'analyse, je souhaite mettre mes compétences techniques au service de projets innovants au sein d'un environnement collaboratif favorisant l'excellence et l'amélioration continue.
            </p>
          </div>
          
          <div className="reveal right" style={{ display: 'flex', justifyContent: 'center' }}>
             <div className="card-avatar-photo" style={{ width: '350px', height: '350px', borderRadius: 'var(--radius-lg)' }}>
              <img
                src="/images/profile/profile.png"
                alt="Yosr Mahfoudh"
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="profile-initials" style={{ display: 'none', fontSize: '3rem' }}>YM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
