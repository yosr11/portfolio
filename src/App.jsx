import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // loader
    setTimeout(() => {
      const loader = document.getElementById('loader')
      if (loader) loader.classList.add('hide')
    }, 1200)

    // cursor
    const dot  = document.getElementById('cursorDot')
    const ring = document.getElementById('cursorRing')
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
    }
    window.addEventListener('mousemove', onMove)
    let running = true
    const anim = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      if (running) requestAnimationFrame(anim)
    }
    requestAnimationFrame(anim)

    // nav toggle
    const navToggle = document.getElementById('navToggle')
    const navLinks  = document.getElementById('navLinks')
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => navLinks.classList.toggle('open'))
      navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')))
    }

    // reveal
    const revealEls = document.querySelectorAll('.reveal')
    const ro = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    revealEls.forEach(el => ro.observe(el))

    // nav solid on scroll
    const nav = document.querySelector('nav')
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const threshold = hero ? hero.offsetHeight - 120 : 80
      nav && nav.classList.toggle('nav--solid', window.scrollY > threshold)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    // skill fills
    setTimeout(() => {
      document.querySelectorAll('.skill-item').forEach(item => {
        const fill  = item.querySelector('.skill-fill')
        const level = item.getAttribute('data-level')
        if (fill && level) fill.style.width = level + '%'
      })
    }, 300)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      running = false
    }
  }, [])

  return (
    <>
      <div className="noise" />
      <canvas id="particles" />
      <div className="cursor-dot" id="cursorDot" />
      <div className="cursor-ring" id="cursorRing" />

      <div id="loader">
        <div className="loader-initials">YM</div>
        <div className="loader-bar"><div className="loader-bar-fill" /></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        © 2026 Yosr Mahfoudh — Ingénieure en Téléinformatique &amp; IA. Nabeul, Tunisie.
      </footer>
    </>
  )
}

export default App
