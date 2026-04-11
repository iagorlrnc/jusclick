import React from 'react';
import './CallToAction.css';

export const CallToAction: React.FC = () => {
  return (
    <section className="section cta-section" id="comece-agora">
      <div className="container">
        <div className="cta-content box-shadow-hard">
          <div className="cta-text">
            <h2 className="display-title cta-title">
              <span className="cutout-text">Reconhecer o perigo é o primeiro passo.</span>
            </h2>
            <p className="cta-subtitle">O Jusclick pode salvar vidas.</p>
            

          </div>
          
          <div className="cta-visual">
            {/* Adding the hero image or another visual element here */}
            <div className="cta-image-wrapper">
              <img src="/imagehero.png" alt="We can do it!" className="cta-image" />
              <svg className="doodle doodle-circle" width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Q10,10 50,10 Z" className="icon-stroke" style={{ stroke: 'var(--c-light)' }} strokeDasharray="10 5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
