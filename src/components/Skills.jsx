import React from 'react'

const SKILL_CATEGORIES = [
  {
    label: 'Langages de programmation',
    chips: ['C', 'C++', 'Java', 'Python'],
    color: 'var(--primary)',
  },
  {
    label: 'Développement web',
    chips: ['PHP', 'JavaScript', 'Angular', 'Node.js', 'React.js', 'FastAPI'],
    color: 'var(--secondary)',
  },
  {
    label: 'Développement mobile',
    chips: ['Android Studio'],
    color: 'var(--accent)',
  },
  {
    label: 'Bases de données',
    chips: ['SQL', 'MySQL', 'Firebase', 'MongoDB', 'PostgreSQL'],
    color: '#8b5cf6',
  },
  {
    label: 'Intelligence artificielle',
    chips: ['YOLO', 'OpenCV', 'LLM', 'NLP / VLM', 'LangGraph', 'RAG', 'DeepEval', 'TensorFlow / Keras'],
    color: '#0ea5e9',
  },
  {
    label: 'DevOps',
    chips: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Vercel'],
    color: '#f59e0b',
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow reveal">Savoir-faire</p>
        <h2 className="section-title reveal">Compétences &amp; technologies</h2>
        <p className="section-intro reveal">
          Un socle technique construit au fil de cinq stages et plusieurs projets, entre intelligence artificielle,
          développement web et systèmes de données.
        </p>

        <div className="skills-categories reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label} className="skill-category">
              <div className="skill-category-label" style={{ color: cat.color }}>
                {cat.label}
              </div>
              <div className="skill-category-chips">
                {cat.chips.map((chip) => (
                  <span key={chip} className="tech-chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
