import React from 'react'

export default function Navbar(){
	return (
		<nav>
			<div className="nav-logo">Yosr Mahfoudh</div>
			<ul className="nav-links" id="navLinks">
				<li><a href="#hero">Accueil</a></li>
				<li><a href="#about">À propos</a></li>
				<li><a href="#skills">Compétences</a></li>
				<li><a href="#experience">Expérience</a></li>
				<li><a href="#projects">Projets</a></li>
				<li><a href="#education">Formation</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<div className="nav-toggle" id="navToggle"><span></span><span></span><span></span></div>
		</nav>
	)
}
