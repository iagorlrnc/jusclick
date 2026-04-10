import React from 'react';
import './Differentiator.css';

export const Differentiator: React.FC = () => {
  return (
    <section className="section differentiator-section" id="diferencial">
      <div className="container">
        <h2 className="display-subtitle diff-title">
          <span className="cutout-text yellow">O Diferencial</span>
        </h2>
        
        <div className="diff-collage">
          
          <div className="diff-box db-1 box-shadow-hard box-shadow-hard-hover">
            <h3 className="diff-box-title">Linguagem<br/>Acessível</h3>
            <p>Tradução do Direito para uma linguagem simples e humana.</p>
            <div className="diff-tape tape-1"></div>
          </div>

          <div className="diff-box db-2 box-shadow-hard box-shadow-hard-hover">
            <h3 className="diff-box-title">Prevenção<br/>Ativa</h3>
            <p>Tecnologia desenhada não apenas para reagir, mas para prevenir.</p>
            <div className="diff-tape tape-2"></div>
            <svg className="doodle doodle-star" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="var(--c-yellow)" stroke="var(--c-dark)" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="diff-box db-3 box-shadow-hard box-shadow-hard-hover">
            <h3 className="diff-box-title">Análise de<br/>Risco</h3>
            <p>Avaliação rápida e sensível do perigo atual da situação.</p>
            <div className="diff-tape tape-3"></div>
          </div>

          <div className="diff-box db-4 box-shadow-hard box-shadow-hard-hover">
            <h3 className="diff-box-title">Apoio<br/>Real</h3>
            <p>Conexão automática com apoio jurídico de verdade, sem robôs intermináveis.</p>
            <div className="diff-tape tape-4"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
