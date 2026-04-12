import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Descreva sua situação",
      text: "Conte o que está acontecendo em um ambiente seguro e confidencial.",
      color: "pink"
    },
    {
      id: 2,
      title: "Identificação do risco",
      text: "Nosso sistema analisa os padrões para identificar o nível de perigo atual.",
      color: "yellow"
    },
    {
      id: 3,
      title: "Orientações jurídicas",
      text: "Receba informações claras em linguagem simples, sem juridiquês, sobre seus direitos.",
      color: "blue"
    },
    {
      id: 4,
      title: "Encaminhamento",
      text: "Conexão direta com a Defensoria Pública do Tocantins e instituições parceiras.",
      color: "dark"
    }
  ];

  return (
    <section className="section how-it-works-section" id="como-funciona">
      <div className="container">
        <h2 className="display-subtitle how-title">
          <span className="cutout-text pink">Como funciona</span>
        </h2>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`step-card box-shadow-hard box-shadow-hard-hover ${step.color}-card step-${step.id}`}
            >
              <div className="step-tape"></div>
              <div className="step-number text-hand">Etapa {step.id}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.text}</p>
              
              {/* Optional doodly arrow connecting to next step on desktop */}
              {index < steps.length - 1 && (
                <svg className="doodle step-arrow" width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,20 Q40,10 70,20 M60,10 L70,20 L60,30" stroke="var(--c-dark)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
