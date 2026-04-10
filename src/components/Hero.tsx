import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg pink-side"></div>
      <div className="hero-bg yellow-side"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="display-title hero-title">
            <span className="cutout-text pink">Jusclick</span>
            <br />
            <span className="cutout-text white" style={{ backgroundColor: 'var(--c-light)', color: 'var(--c-dark)' }}>Informação que</span>
            <br />
            <span className="cutout-text blue">protege</span> e <br/> pode <span className="cutout-text yellow">salvar vidas.</span>
          </h1>
          
          <p className="hero-subtitle paper-card box-shadow-hard">
            Uma plataforma digital que ajuda mulheres a identificar situações de risco, entender seus direitos e agir com segurança.
          </p>
          
          <button className="cta-button box-shadow-hard-hover">
            Proteger-me Agora
          </button>
        </div>

        <div className="hero-visuals">
          {/* Hand drawn graphic elements */}
          <svg className="doodle doodle-arrow" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q50,90 90,10 M80,10 L90,10 L90,20" stroke="var(--c-dark)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img src="/hero_typewriter.png" alt="Máquina de escrever retrô digital collage" className="hero-image" />
          </div>

          <svg className="doodle doodle-sparkle" width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="var(--c-yellow)" stroke="var(--c-dark)" strokeWidth="4" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
