const markup = `
<div class="noise"></div>
<canvas id="particles"></canvas>
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-ring" id="cursorRing"></div>

<div id="loader">
  <div class="loader-initials">YM</div>
  <div class="loader-bar"><div class="loader-bar-fill"></div></div>
</div>

<nav>
  <div class="nav-logo">Yosr Mahfoudh</div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#hero">Accueil</a></li>
    <li><a href="#skills">Compétences</a></li>
    <li><a href="#experience">Expérience</a></li>
    <li><a href="#projects">Projets</a></li>
    <li><a href="#education">Formation</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-toggle" id="navToggle"><span></span><span></span><span></span></div>
</nav>

<section id="hero">
  <div class="container hero-grid">
    <div>
      <div class="badge"><span class="dot"></span> Disponible pour une nouvelle opportunité</div>
      <h1 class="hero-name">Yosr Mahfoudh</h1>
      <p class="hero-role">Ingénieure en Téléinformatique — spécialisée en Intelligence Artificielle &amp; développement logiciel</p>
      <div class="hero-ctas">
        <a href="#contact" class="btn btn-primary">Me contacter</a>
        <a href="#experience" class="btn btn-secondary">Voir mon parcours</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="glow-sphere"></div>
      <div class="dotted-ring"></div>
      <div class="floating-card">
        <div class="card-avatar">YM</div>
        <div class="card-role">Ingénieure IA &amp; Full-Stack</div>
        <div class="card-sub">ISITCOM Sousse · 2023–2026</div>
        <div class="card-stats">
          <div class="stat-row"><span class="stat-num">5</span><span class="stat-label">stages professionnels</span></div>
          <div class="stat-row"><span class="stat-num">3</span><span class="stat-label">projets IA &amp; web réalisés</span></div>
          <div class="stat-row"><span class="stat-num">🥇</span><span class="stat-label">Médaille d'or — Nuit de l'Info 2025</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="skills">
  <div class="container">
    <p class="eyebrow reveal">Savoir-faire</p>
    <h2 class="section-title reveal">Compétences &amp; technologies</h2>
    <p class="section-intro reveal">Un socle technique construit au fil de cinq stages et plusieurs projets, entre intelligence artificielle, développement web et systèmes de données.</p>

    <div class="skills-layout">
      <div class="skills-col">
        <div class="skill-item reveal left" data-level="90">
          <div class="skill-top"><span class="skill-name">Python</span><span class="skill-level">Avancé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="85">
          <div class="skill-top"><span class="skill-name">LLM, LangGraph &amp; RAG</span><span class="skill-level">Avancé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="82">
          <div class="skill-top"><span class="skill-name">FastAPI</span><span class="skill-level">Avancé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="80">
          <div class="skill-top"><span class="skill-name">Computer Vision (YOLO, OpenCV)</span><span class="skill-level">Confirmé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="78">
          <div class="skill-top"><span class="skill-name">React.js</span><span class="skill-level">Confirmé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="72">
          <div class="skill-top"><span class="skill-name">Node.js &amp; Angular</span><span class="skill-level">Confirmé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="70">
          <div class="skill-top"><span class="skill-name">SQL / PostgreSQL / MongoDB</span><span class="skill-level">Confirmé</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
        <div class="skill-item reveal left" data-level="65">
          <div class="skill-top"><span class="skill-name">Git, Docker &amp; CI/CD</span><span class="skill-level">Opérationnel</span></div>
          <div class="skill-track"><div class="skill-fill"></div></div>
        </div>
      </div>

      <div>
        <p class="cloud-title reveal right">Nuage de technologies</p>
        <div class="tech-cloud reveal right">
          <span class="tech-chip">Python</span>
          <span class="tech-chip">Java</span>
          <span class="tech-chip">C / C++</span>
          <span class="tech-chip">JavaScript</span>
          <span class="tech-chip">PHP</span>
          <span class="tech-chip">Angular</span>
          <span class="tech-chip">React.js</span>
          <span class="tech-chip">Node.js</span>
          <span class="tech-chip">FastAPI</span>
          <span class="tech-chip">LangGraph</span>
          <span class="tech-chip">RAG</span>
          <span class="tech-chip">ChromaDB</span>
          <span class="tech-chip">DeepEval</span>
          <span class="tech-chip">NLP / VLM</span>
          <span class="tech-chip">YOLOv8 / YOLO-Seg</span>
          <span class="tech-chip">OpenCV</span>
          <span class="tech-chip">EasyOCR</span>
          <span class="tech-chip">Roboflow</span>
          <span class="tech-chip">TensorFlow / Keras</span>
          <span class="tech-chip">Android Studio</span>
          <span class="tech-chip">MySQL</span>
          <span class="tech-chip">PostgreSQL</span>
          <span class="tech-chip">MongoDB</span>
          <span class="tech-chip">Firebase</span>
          <span class="tech-chip">Docker</span>
          <span class="tech-chip">Git / GitHub</span>
          <span class="tech-chip">CI/CD</span>
          <span class="tech-chip">Jira / Xray</span>
        </div>
      </div>
    </div>

    <div class="marquee-wrap reveal">
      <div class="marquee-track" id="marqueeTrack">
        <span>Sopra HR Software</span><span>Neopolis Development</span><span>Medisail</span><span>ISITCOM Sousse</span>
        <span>Sopra HR Software</span><span>Neopolis Development</span><span>Medisail</span><span>ISITCOM Sousse</span>
      </div>
    </div>
  </div>
</section>

<section id="experience">
  <div class="container">
    <p class="eyebrow reveal">Parcours</p>
    <h2 class="section-title reveal">Expérience professionnelle</h2>
    <p class="section-intro reveal">Cinq stages qui m'ont permis de passer de l'IA appliquée à la vision par ordinateur jusqu'à l'orchestration d'agents LLM en production.</p>

    <div class="timeline">
      <div class="timeline-item reveal">
        <div class="exp-card">
          <div class="exp-head"><span class="exp-title">Stage PFE</span><span class="exp-date">Février 2026 – Août 2026</span></div>
          <div class="exp-company">Sopra HR Software</div>
          <div class="exp-loc">Tunis, Tunisie</div>
          <ul class="exp-desc">
            <li>Conception d'un système multi-agents pour générer des scénarios de test à partir de user stories.</li>
            <li>Intégration d'un mécanisme RAG pour enrichir le contexte du LLM à partir de scénarios historiques.</li>
            <li>Orchestration du workflow avec LangGraph : validation des scénarios, contrôle de couverture, détection des redondances.</li>
            <li>Connexion des API Jira/Xray à une application web pour automatiser la génération des scénarios de test.</li>
          </ul>
          <div class="tag-row">
            <span class="tag">LangGraph</span><span class="tag">RAG</span><span class="tag">FastAPI</span>
            <span class="tag alt">React.js</span><span class="tag alt">PostgreSQL</span><span class="tag alt">Jira/Xray</span>
          </div>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="exp-card">
          <div class="exp-head"><span class="exp-title">Stage d'été en IA</span><span class="exp-date">Août 2025</span></div>
          <div class="exp-company">Neopolis Development</div>
          <div class="exp-loc">Nabeul, Tunisie</div>
          <ul class="exp-desc">
            <li>Développement d'un pipeline d'extraction de données de CIN : annotation Roboflow, détection/recadrage avec YOLO-Seg, localisation des champs avec YOLOv8.</li>
            <li>Intégration d'EasyOCR au pipeline et exposition des données extraites via une API REST FastAPI.</li>
          </ul>
          <div class="tag-row">
            <span class="tag">YOLOv8</span><span class="tag">YOLO-Seg</span><span class="tag alt">EasyOCR</span><span class="tag alt">OpenCV</span><span class="tag">FastAPI</span>
          </div>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="exp-card">
          <div class="exp-head"><span class="exp-title">Stage d'été en Machine Learning</span><span class="exp-date">Juillet 2025</span></div>
          <div class="exp-company">Neopolis Development</div>
          <div class="exp-loc">Nabeul, Tunisie</div>
          <ul class="exp-desc">
            <li>Conception d'un pipeline de détection d'anomalies dans les cours de clôture boursiers avec un LSTM Autoencoder.</li>
            <li>Intégration du modèle à une API et développement d'une interface de visualisation des anomalies détectées.</li>
          </ul>
          <div class="tag-row">
            <span class="tag">TensorFlow/Keras</span><span class="tag alt">Pandas</span><span class="tag">FastAPI</span><span class="tag alt">React.js</span>
          </div>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="exp-card">
          <div class="exp-head"><span class="exp-title">Stage d'été en développement mobile</span><span class="exp-date">Juillet 2024</span></div>
          <div class="exp-company">Sopra HR Software</div>
          <div class="exp-loc">Tunis, Tunisie</div>
          <ul class="exp-desc">
            <li>Développement d'une application de gestion des demandes de télétravail pour 3 profils : administrateurs, employés, managers.</li>
            <li>Connexion de l'application à MySQL via un serveur XAMPP et sécurisation des échanges de données.</li>
          </ul>
          <div class="tag-row">
            <span class="tag">Android Studio</span><span class="tag alt">MySQL</span><span class="tag">XAMPP</span>
          </div>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="exp-card">
          <div class="exp-head"><span class="exp-title">Stage PFE en développement web</span><span class="exp-date">Février 2023 – Mai 2023</span></div>
          <div class="exp-company">Medisail</div>
          <div class="exp-loc">Nabeul, Tunisie</div>
          <ul class="exp-desc">
            <li>Conception d'une plateforme de surveillance et de contrôle de bateaux à distance, en temps réel, via un boîtier connecté embarqué.</li>
          </ul>
          <div class="tag-row">
            <span class="tag">Angular</span><span class="tag alt">Node.js</span><span class="tag">MySQL</span><span class="tag alt">Firebase</span><span class="tag">Leaflet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects">
  <div class="container">
    <p class="eyebrow reveal">Réalisations</p>
    <h2 class="section-title reveal">Projets</h2>
    <p class="section-intro reveal">Des projets académiques et personnels mêlant intelligence artificielle, développement web et vision par ordinateur.</p>

    <div class="projects-grid">
      <div class="project-card reveal">
        <div class="project-icon">🧩</div>
        <div class="project-name">JobConnect</div>
        <p class="project-desc">Plateforme de recrutement intégrant le matching candidats/offres par NLP et la gestion des candidatures, profils et statistiques.</p>
        <div class="project-tags"><span>React.js</span><span>Node.js</span><span>MongoDB</span><span>Python (AI/NLP)</span></div>
      </div>

      <div class="project-card reveal">
        <div class="project-icon">📦</div>
        <div class="project-name">Digicoli</div>
        <p class="project-desc">Application pour gérer les colis et suivre leur acheminement en temps réel.</p>
        <div class="project-tags"><span>React.js</span><span>Node.js</span><span>MySQL</span><span>XAMPP</span></div>
      </div>

      <div class="project-card reveal">
        <div class="project-icon">🤖</div>
        <div class="project-name">Assistant IA — reconnaissance de gestes</div>
        <p class="project-desc">Chatbot capable de reconnaître les gestes de la main et d'interpréter des expressions mathématiques tracées avec le doigt. Réalisé lors d'un Atelier AI.</p>
        <div class="project-tags"><span>Python</span><span>OpenCV</span><span>cvzone</span><span>Generative AI</span></div>
      </div>
    </div>
  </div>
</section>

<section id="education">
  <div class="container">
    <p class="eyebrow reveal">Bagage académique</p>
    <h2 class="section-title reveal">Formation &amp; langues</h2>

    <div class="edu-lang-grid">
      <div>
        <div class="edu-card reveal left">
          <div class="edu-degree">Diplôme national d'ingénieur en Téléinformatique</div>
          <div class="edu-school">ISITCOM, Sousse</div>
          <div class="edu-meta">2023 – 2026</div>
        </div>
        <div class="edu-card reveal left">
          <div class="edu-degree">Licence en ingénierie des systèmes informatiques</div>
          <div class="edu-school">ISITCOM, Sousse</div>
          <div class="edu-meta">2020 – 2023</div>
        </div>

        <p class="extra-title reveal left">Certificats</p>
        <div class="extra-list">
          <div class="extra-item reveal left"><span class="extra-dot"></span><span><b>Nuit de l'Info</b> — Médaille d'or, compétition nationale (2025)</span></div>
          <div class="extra-item reveal left"><span class="extra-dot"></span><span><b>Fundamentals of Deep Learning</b> — NVIDIA (2025)</span></div>
          <div class="extra-item reveal left"><span class="extra-dot"></span><span><b>Introducing Generative AI with AWS</b> — Udacity (2025)</span></div>
          <div class="extra-item reveal left"><span class="extra-dot"></span><span><b>Nuit de l'Info</b> — Participation, compétition nationale (2024)</span></div>
          <div class="extra-item reveal left"><span class="extra-dot"></span><span><b>Devenir développeur/développeuse web front-end</b> — LinkedIn Learning (2022)</span></div>
        </div>
      </div>

      <div>
        <p class="lang-title reveal right">Langues</p>
        <div class="lang-badges">
          <div class="lang-badge reveal right"><span>Arabe</span><span class="lang-level">Natif</span></div>
          <div class="lang-badge reveal right"><span>Français</span><span class="lang-level">Intermédiaire</span></div>
          <div class="lang-badge reveal right"><span>Anglais</span><span class="lang-level">Intermédiaire</span></div>
        </div>

        <p class="extra-title reveal right">Vie associative</p>
        <div class="extra-list">
          <div class="extra-item reveal right"><span class="extra-dot"></span><span><b>Secrétaire générale</b> — JCI Dar Chaabane El Fehri (2024)</span></div>
          <div class="extra-item reveal right"><span class="extra-dot"></span><span><b>Trésorière</b> — JCI Dar Chaabane El Fehri (2023)</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container contact-grid">
    <div>
      <p class="eyebrow reveal">Discutons</p>
      <h2 class="section-title reveal">Contact</h2>
      <p class="section-intro reveal">Ouverte aux opportunités en IA, développement logiciel et ingénierie de données.</p>

      <div class="contact-card reveal">
        <div class="contact-icon">✉</div>
        <div><div class="contact-label">Email</div><div class="contact-value">yosrmahfoudh@gmail.com</div></div>
      </div>
      <div class="contact-card reveal">
        <div class="contact-icon">☎</div>
        <div><div class="contact-label">Téléphone</div><div class="contact-value">+216 21 210 888</div></div>
      </div>
      <div class="contact-card reveal">
        <div class="contact-icon">📍</div>
        <div><div class="contact-label">Lieu</div><div class="contact-value">Nabeul, Tunisie</div></div>
      </div>
      <div class="contact-card reveal">
        <div class="contact-icon">✓</div>
        <div><div class="contact-label">Disponibilité</div><div class="contact-value">Ouverte à une nouvelle opportunité</div></div>
      </div>
    </div>

    <div class="contact-visual">
      <div class="ripple-ring"></div>
      <div class="ripple-ring"></div>
      <div class="ripple-ring"></div>
      <div class="contact-avatar">YM</div>
    </div>
  </div>
</section>

<footer>
  © 2026 Yosr Mahfoudh — Ingénieure en Téléinformatique &amp; IA. Basé à Nabeul, Tunisie.
</footer>
`

export default markup
