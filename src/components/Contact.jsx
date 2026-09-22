import React from 'react'

export default function Contact(){
	return (
		<section id="contact">
			<div className="container contact-grid">
				<div>
					<p className="eyebrow reveal">Discutons</p>
					<h2 className="section-title reveal">Contact</h2>
					<p className="section-intro reveal">Ouverte aux opportunités en IA, développement logiciel et ingénierie de données.</p>

					<div className="contact-card reveal">
						<div className="contact-icon">✉</div>
						<div><div className="contact-label">Email</div><div className="contact-value">yosrmahfoudh@gmail.com</div></div>
					</div>
					<div className="contact-card reveal">
						<div className="contact-icon">☎</div>
						<div><div className="contact-label">Téléphone</div><div className="contact-value">+216 21 210 888</div></div>
					</div>
					<div className="contact-card reveal">
						<div className="contact-icon">📍</div>
						<div><div className="contact-label">Lieu</div><div className="contact-value">Nabeul, Tunisie</div></div>
					</div>
					<div className="contact-card reveal">
						<div className="contact-icon">✓</div>
						<div><div className="contact-label">Disponibilité</div><div className="contact-value">Ouverte à une nouvelle opportunité</div></div>
					</div>
				</div>

				<div className="contact-visual">
					<div className="ripple-ring" />
					<div className="ripple-ring" />
					<div className="ripple-ring" />
					<div className="contact-avatar">YM</div>
				</div>
			</div>
		</section>
	)
}
