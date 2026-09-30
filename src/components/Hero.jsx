import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="hero-centered">
      <div className="container hero-content">
        <div className="badge badge-center">
          <span className="dot" /> AVAILABLE FOR WORK
        </div>
        <h1 className="hero-name-large">Yosr Mahfoudh</h1>
        <div className="hero-divider">
          <span className="hero-divider-line"></span> 
          
          <span className="hero-divider-line"></span>
        </div>
        <p className="hero-subtitle">
          Ingénieure en Téléinformatique — Spécialisée en Intelligence Artificielle et Développement Logiciel
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-hero btn-hero-primary">
            View My Work ↗
          </a>
          <a href="/cv/yosr-mahfoudh.pdf" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-secondary">
            Resume 📄
          </a>
          <a href="https://github.com/yosr11" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-secondary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mahfoudh-yosr-b78a4323a/" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-secondary">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="scroll-indicator">SCROLL</div>
    </section>
  )
}
