import React, { useState, useEffect } from 'react'

const PROJECTS = [
  {
    id: 1,
    name: 'JobConnect',
    shortDesc: 'Plateforme de recrutement intégrant le matching candidats/offres par NLP.',
    desc: "Développement d'une plateforme de recrutement complète intégrant un algorithme de matching intelligent par NLP (Python) entre candidats et offres d'emploi. L'application inclut la gestion des candidatures, des profils candidats/recruteurs, des tableaux de bord statistiques, et un système de notifications en temps réel.",
    tags: ['React.js', 'Node.js', 'MongoDB', 'Python (AI/NLP)'],
    icon: '/images/projects/jobconnect.png',
    color: 'linear-gradient(135deg,#4f8ef7 0%,#6366f1 100%)',
    images: [ '/images/projects/jobconnect.png','/images/projects/dashboard job.png','/images/projects/condidature.png','/images/projects/offre.png','/images/projects/offres .png','/images/projects/analyse comptabilité.png'],
    github: 'https://github.com/yosr11/Job-Connect',
    bullets: [
      'Mise en place d’un moteur de matching intelligent entre candidats et offres à l’aide du NLP.',
      'Gestion complète des candidatures, profils et tableaux de bord statistiques pour les recruteurs.',
      'Développement d’une expérience utilisateur fluide avec React.js et une API backend robuste.'
    ],
  },
  {
    id: 2,
    name: 'Digicoli',
    shortDesc: 'Application de gestion et suivi de colis en temps réel.',
    desc: "Conception et développement d'une application web de gestion de colis permettant aux utilisateurs de créer, suivre et gérer leurs expéditions en temps réel. Intégration d'une carte interactive pour visualiser les trajets de livraison, avec un tableau de bord administrateur et des notifications de statut automatiques.",
    tags: ['React.js', 'Node.js', 'MySQL', 'XAMPP'],
    icon: '/images/projects/Digicoli.png',
    color: 'linear-gradient(135deg,#1fb6a3 0%,#06b6d4 100%)',
    images: ['/images/projects/logindigi.png','/images/projects/dashboarddigi.png', '/images/projects/Digicoli.png'],
    github: 'https://github.com/yosr11/Digicolie',
    bullets: [
      'Suivi des expéditions en temps réel avec aperçu des trajets et statuts de livraison.',
      'Conception d’un tableau de bord administrateur pour la gestion opérationnelle des colis.',
      'Intégration d’une logique de notifications et d’interface de gestion simplifiée pour les utilisateurs.'
    ],
  },
  {
    id: 3,
    name: 'Assistant IA — Reconnaissance de gestes',
    shortDesc: 'Chatbot IA reconnaissant les gestes main et expressions mathématiques.',
    desc: "Développement d'un assistant IA capable de reconnaître les gestes de la main via webcam (OpenCV + cvzone) et d'interpréter des expressions mathématiques tracées avec le doigt dans l'air. L'assistant répond en temps réel via un chatbot propulsé par Generative AI. ",
    tags: ['Python', 'OpenCV', 'cvzone', 'Generative AI'],
    icon: '/images/projects/Détection des gestes.png',
    color: 'linear-gradient(135deg,#f59e0b 0%,#ff8a65 100%)',
    images: [ '/images/projects/Détection des gestes.png','/images/projects/Gesture.jpg'],
    bullets: [
      'Reconnaissance des gestes et des expressions mathématiques en temps réel via webcam.',
      'Intégration de cvzone et OpenCV pour le suivi visuel et l’interprétation des gestes.',
      'Mise en place d’un chatbot IA répondant aux interactions en direct avec des résultats immédiats.'
    ],
  },
  {
    id: 4,
    name: 'Surveillance Intelligente du Trafic',
    shortDesc: 'Système basé sur la vision par ordinateur pour la surveillance du trafic.',
    desc: "Développement d'un système intelligent capable de surveiller le trafic en temps réel via des caméras et l'analyse d'images , l'estimation de la vitesse et l'analyse des accidents",
    tags: ['Python', 'YOLO', 'CNN'],
    icon: '/images/projects/Analyse route.png',
    color: 'linear-gradient(135deg,#f59e0b 0%,#ff8a65 100%)',
    images: ['/images/projects/Analyse route.png', '/images/projects/accident.jpg'],
    github: 'https://github.com/github-dorra/Analyse-route',
    bullets: [
      'Analyse vidéo en temps réel pour détecter les flux de circulation et les incidents.',
      'Utilisation de modèles de vision par ordinateur pour estimer la vitesse et détecter les anomalies.',
      'Conception d’un système de surveillance utile pour la sécurité routière et l’aide à la décision.'
    ],
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden'
      setActiveImg(0)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const openProject = (project) => setActiveProject(project)
  const closeProject = () => setActiveProject(null)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeProject()
  }

  return (
    <>
      <section id="projects">
        <div className="container">
          <p className="eyebrow reveal">Réalisations</p>
          <h2 className="section-title reveal">Projets</h2>
          <p className="section-intro reveal">
            Des projets académiques et personnels mêlant intelligence artificielle,
            développement web et vision par ordinateur.
          </p>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div key={p.id} className="project-card reveal">
                {/* Image / placeholder coloré */}
                <div className="project-img-wrap" style={{ background: p.color }}>
                  <img src={p.icon} alt={`Illustration de ${p.name}`} className="project-placeholder-icon" />
                </div>

                {/* Contenu */}
                <div className="project-body">
                  <div className="project-name">{p.name}</div>
                  <p className="project-desc">{p.shortDesc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button
                      className="btn-project-primary"
                      onClick={() => openProject(p)}
                      id={`btn-voir-${p.id}`}
                    >
                      Voir le projet
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeProject && (
        <div className="modal-overlay" onClick={handleOverlayClick} id="project-modal">
          <div className="modal-panel">
            <button className="modal-close" onClick={closeProject} aria-label="Fermer">✕</button>

            {/* Détails */}
            <div className="modal-details">
              <img
                src={activeProject.icon}
                alt={`Illustration de ${activeProject.name}`}
                className="modal-project-icon"
              />
              <h3 className="modal-title">{activeProject.name}</h3>
              <p className="modal-desc">{activeProject.desc}</p>

              <ul className="modal-exp-bullets">
                {(activeProject.bullets || []).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="modal-tags">
                {activeProject.tags.map((t) => (
                  <span key={t} className="modal-tag">{t}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-github"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  Voir le code sur GitHub
                </a>
              </div>
            </div>

            {activeProject.images && activeProject.images.length > 0 && (
              <div className="modal-gallery">
                <>
                  <img
                    src={activeProject.images[activeImg]}
                    alt={activeProject.name}
                    className="modal-main-img"
                  />
                  {activeProject.images.length > 1 && (
                    <div className="modal-thumbs">
                      {activeProject.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${activeProject.name} ${i + 1}`}
                          className={`modal-thumb${activeImg === i ? ' active' : ''}`}
                          onClick={() => setActiveImg(i)}
                        />
                      ))}
                    </div>
                  )}
                </>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
