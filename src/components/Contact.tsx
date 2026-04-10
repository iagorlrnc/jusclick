import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section className="emergency-section" id="contato" aria-labelledby="contact-title">
      <div className="emergency-top">
        <div className="container emergency-top-inner">
          <div className="emergency-number-block">
            <div className="emergency-pulse" aria-hidden="true" />
            <div className="emergency-text">
              <p className="emergency-eyebrow">Precisa de ajuda agora?</p>
              <a href="tel:180" className="emergency-phone" aria-label="Ligar para Central de Atendimento à Mulher 180">180</a>
              <p className="emergency-phone-label">Central de Atendimento à Mulher</p>
              <p className="emergency-phone-note">Gratuito · Confidencial · 24 horas</p>
            </div>
          </div>
          <div className="emergency-divider" aria-hidden="true" />
          <div className="emergency-quick">
            <p className="emergency-quick-title">Outras emergências</p>
            <div className="quick-numbers">
              <a href="tel:190" className="quick-num">
                <span className="quick-num-n">190</span>
                <span>Polícia</span>
              </a>
              <a href="tel:192" className="quick-num">
                <span className="quick-num-n">192</span>
                <span>SAMU</span>
              </a>
              <a href="tel:100" className="quick-num">
                <span className="quick-num-n">100</span>
                <span>Dir. Humanos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
