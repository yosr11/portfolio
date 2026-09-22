import React, { useEffect, useState } from 'react'

const EXPERIENCES = [
  {
    id: 1,
    title: 'Stage PFE',
    company: 'Sopra HR Software',
    location: 'Tunis, Tunisie',
    date: 'Février 2026 – Août 2026',
    summary: 'Conception d’un système multi-agents pour la génération des scénarios de test à partir de user stories.',
    details: 'Mise en place d’une architecture multi-agents pour transformer des user stories en scénarios de tests prêts à l’emploi. Le projet combine extraction de contexte, génération de cas de test, validation métier et orchestration d’outils via des flux RAG et LLM.',
    tags: ['LangGraph', 'RAG', 'FastAPI', 'React.js', 'PostgreSQL', 'Jira/Xray'],
    images: ['/images/projects/interface vitrine.png', '/images/projects/login sopra.png', '/images/projects/dashboard admin.png', '/images/projects/Résultat analyse.png', '/images/projects/scénarios générés.png'],
    github: 'https://github.com/yosr11/Generation-des-scenarios-de-Tests',
    accent: 'linear-gradient(135deg, #4f8ef7 0%, #6366f1 100%)',
    bullets: [
      'Conception d’un système multi-agents basé sur les LLM pour automatiser l’analyse des User Stories et la génération de scénarios de test.',
      'Intégration d’un Example-Augmented RAG basé sur des scénarios de test historiques issus de Jira/Xray.',
      'Développement d’un mécanisme de validation et de contrôle de couverture des scénarios générés, avec correction automatique.',
      'Évaluation de la qualité des résultats avec DeepEval et LLM-as-a-Judge.',
      'Intégration avec Jira/Xray pour exploiter les User Stories et les données de test existantes.',
      'Développement d’une application web complète avec FastAPI et React.js pour la gestion des utilisateurs, des rôles, des historiques, des User Stories et des scénarios de test.'
    ],
  },
  {
    id: 2,
    title: 'Stage d’été en IA',
    company: 'Neopolis Development',
    location: 'Nabeul, Tunisie',
    date: 'Août 2025',
    summary: 'Développement d’un pipeline d’extraction de données de CIN.',
    details: 'Conception d’un pipeline automatique de reconnaissance et d’extraction des informations présentes sur une carte d’identité. Le système exploite la détection d’objets, la segmentation et l’OCR pour transformer des images de documents en données structurées exploitable par des applications métiers.',
    tags: ['YOLOv8', 'YOLO-Seg', 'EasyOCR', 'OpenCV', 'FastAPI'],
    images: [],
    github: 'https://github.com/MariemTlatli/cin-ocr-api',
    accent: 'linear-gradient(135deg, #1fb6a3 0%, #06b6d4 100%)',
    bullets: [
      'Conception d’un pipeline de reconnaissance et d’extraction de données de CIN.',
      'Annotation des données avec Roboflow et préparation du dataset.',
      'Détection et recadrage des cartes d’identité avec YOLO-Seg',
      'Localisation des différents champs de la CIN avec YOLOv8.',
      'Exposition des données extraites via une API REST développée avec FastAPI.'
    ],
  },
  {
    id: 3,
    title: 'Stage d’été en Machine Learning',
    company: 'Neopolis Development',
    location: 'Nabeul, Tunisie',
    date: 'Juillet 2025',
    summary: 'Conception et développement d’une application de détection d’anomalies dans les cours de clôture boursiers.',
    details: 'Analyse de séries temporelles financières pour identifier des anomalies et des comportements inhabituels dans les cours de clôture. Le projet couvre le prétraitement des données, l’entraînement de modèles prédictifs et la mise en place d’une interface de visualisation pour exploiter les résultats.',
    tags: ['TensorFlow/Keras', 'Pandas', 'FastAPI', 'React.js'],
    images: ['/images/projects/accueil.png', '/images/projects/anomalies.png'],
    github: 'https://github.com/yosr11/detection_anomalies',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ff8a65 100%)',
    bullets: [
      'Conception d’un pipeline de détection d’anomalies dans les cours de clôture boursiers basé sur un LSTM Autoencoder.',
      'Entraînement du modèle sur des séries temporelles financières afin d’identifier les comportements atypiques à partir de l’erreur de reconstruction',
      'Intégration du modèle dans une API backend pour automatiser la détection des anomalies.',
      'Développement d’une interface web interactive permettant de consulter et visualiser les anomalies détectées.'
    ],
  },
  {
    id: 4,
    title: 'Stage d’été en développement mobile',
    company: 'Sopra HR Software',
    location: 'Tunis, Tunisie',
    date: 'Juillet 2024',
    summary: 'Développement d’une application de gestion des demandes de télétravail pour 3 profils : administrateurs, employés, managers.',
    details: 'Réalisation d’une application Android pour la gestion du télétravail avec rôles distincts et workflows de validation. Le projet comprend des écrans de gestion des demandes, suivi des décisions et sécurité des accès selon le profil utilisateur.',
    tags: ['Android Studio', 'MySQL', 'XAMPP'],
    images: ['/images/projects/loginsopra2.png', '/images/projects/dashboard.png','/images/projects/suivie.jpg','/images/projects/notifications.jpg'],
  
    accent: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    bullets: [
      'Développement d’une application Android orientée workflows de validation pour le télétravail.',
      'Gestion des rôles distincts : administrateur, employé et manager.',
      'Mise en place d’un tableau de bord simple et fonctionnel pour le suivi des demandes.'
    ],
  },
  {
    id: 5,
    title: 'Stage PFE en développement web',
    company: 'Medisail',
    location: 'Nabeul, Tunisie',
    date: 'Février 2023 – Mai 2023',
    summary: 'Conception d’une plateforme de surveillance et de contrôle de bateaux à distance, en temps réel, via un boîtier connecté embarqué.',
    details: 'Développement d’une application web de supervision pour le suivi des bateaux et de leur statut en temps réel. Le système intègre une carte interactive, des données de télémetrie embarquées et une logique d’alerte pour le pilotage et la surveillance à distance.',
    tags: ['Angular', 'Node.js', 'MySQL', 'Firebase', 'Leaflet'],
    images: ['/images/projects/login bateau.jpg','/images/projects/liste bateaux.jpg','/images/projects/map.jpg','/images/projects/waypoints.jpg','/images/projects/meteo.jpg'],
    github: 'https://github.com/yosr11/Surveillance-des-bateaux',
    accent: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
    bullets: [
      'Conception d’une plateforme de supervision pour le suivi de bateaux en temps réel.',
      'Intégration d’un boîtier connecté embarqué pour la collecte et la transmission des données du bateau.',
      'Développement d’une interface de supervision permettant de suivre l’état et les paramètres des bateaux à distance.',
    ],
  },
]

export default function About() {
  const [activeExperience, setActiveExperience] = useState(null)
  const [activeExpImg, setActiveExpImg] = useState(0)

  useEffect(() => {
    if (activeExperience !== null) {
      document.body.style.overflow = 'hidden'
      setActiveExpImg(0)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeExperience])

  const openExperience = (experience) => setActiveExperience(experience)
  const closeExperience = () => setActiveExperience(null)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeExperience()
  }

  return (
    <>
      <section id="experience">
        <div className="container">
          <p className="eyebrow reveal">Parcours</p>
          <h2 className="section-title reveal">Expériences professionnelles</h2>
          <p className="section-intro reveal">Cinq stages qui m'ont permis de passer de l'IA appliquée à la vision par ordinateur jusqu'à l'orchestration d'agents LLM en production.</p>

          <div className="timeline">
            {EXPERIENCES.map((exp) => (
              <div className="timeline-item reveal" key={exp.id}>
                <div
                  className="exp-card exp-card--clickable"
                  onClick={() => openExperience(exp)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openExperience(exp)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="exp-head">
                    <span className="exp-title">{exp.title}</span>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-loc">{exp.location}</div>
                  <ul className="exp-desc">
                    <b>{exp.summary}</b>
                  </ul>
                  <div className="tag-row">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={tag.includes('React') || tag.includes('FastAPI') ? 'tag alt' : 'tag'}>{tag}</span>
                    ))}
                  </div>
                  <div className="exp-click-hint">Voir les détails</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeExperience && (
        <div className="modal-overlay" onClick={handleOverlayClick} id="experience-modal">
          <div className="modal-panel">
            <button className="modal-close" onClick={closeExperience} aria-label="Fermer">✕</button>

            <div className="modal-details">
              <span className="modal-exp-badge" style={{ background: activeExperience.accent }}>{activeExperience.company}</span>
              <h3 className="modal-title">{activeExperience.title}</h3>

              <div className="modal-exp-meta">
                <span>📍 {activeExperience.location}</span>
                <span>🗓️ {activeExperience.date}</span>
              </div>

              <p className="modal-desc">{activeExperience.details}</p>

              <ul className="modal-exp-bullets">
                {(activeExperience.bullets || []).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="modal-tags">
                {activeExperience.tags.map((tag) => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>

              {activeExperience.github && (
                <div className="modal-actions">
                  <a
                    href={activeExperience.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal-github"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    Voir le GitHub
                  </a>
                </div>
              )}
            </div>

            {activeExperience.images && activeExperience.images.length > 0 && (
              <div className="modal-gallery">
                <>
                  <img
                    src={activeExperience.images[activeExpImg]}
                    alt={activeExperience.title}
                    className="modal-main-img"
                  />
                  {activeExperience.images.length > 1 && (
                    <div className="modal-thumbs">
                      {activeExperience.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${activeExperience.title} ${i + 1}`}
                          className={`modal-thumb${activeExpImg === i ? ' active' : ''}`}
                          onClick={() => setActiveExpImg(i)}
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
