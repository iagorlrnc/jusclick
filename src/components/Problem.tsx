import React from 'react';
import './Problem.css';

export const Problem: React.FC = () => {
  return (
    <section className="section problem-section" id="o-problema">
      <div className="container">
        <h2 className="display-subtitle problem-title">
          <span className="cutout-text yellow">O Problema</span>
        </h2>
        
        <div className="problem-content">
          <div className="problem-box box1 paper-card tape-corner">
            <p>
              Muitas mulheres vivenciam situações de violência sem perceber que estão em risco.
            </p>
          </div>
          
          <div className="problem-connector">
            <svg className="doodle doodle-connector" width="35" height="60" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,0 Q60,50 30,100" stroke="var(--c-yellow)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8"/>
              <path d="M20,85 L30,100 L45,90" stroke="var(--c-yellow)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="problem-box box2 paper-card tape-corner">
            <p>
              Ameaças, controle e agressões fazem parte de um ciclo que pode evoluir para o <strong className="highlight-text pink">feminicídio</strong>.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="problem-decorations">
           <svg className="doodle doodle-tears" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,30 Q30,60 50,80 Q70,60 70,30 Q50,0 30,30 Z" fill="var(--c-blue)" stroke="var(--c-dark)" strokeWidth="4" strokeLinejoin="round"/>
            <path d="M40,35 Q40,50 50,60" stroke="var(--c-light)" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
