import React from 'react';
import './Law.css';

export const Law: React.FC = () => {
  return (
    <section className="section law-section" id="a-lei">
      <div className="container">
        <h2 className="display-subtitle law-title">
          <span className="cutout-text blue">Feminicídio e a Lei</span>
        </h2>
        
        <div className="infographic-container">
          {/* Infographic block 1 */}
          <div className="info-block info-1 paper-card">
            <span className="info-number text-hand">01.</span>
            <p>Previsto pela <strong className="highlight-text pink">Lei do Feminicídio</strong>, é considerado um crime hediondo.</p>
          </div>
          
          <svg className="doodle connector-1" width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M90,10 Q70,20 20,70 M34,66 L20,70 L24,56" className="icon-stroke" stroke="var(--c-blue)"/>
          </svg>

          {/* Infographic block 2 */}
          <div className="info-block info-2 paper-card">
            <span className="info-number text-hand">02.</span>
            <p>Raramente é um ato isolado. Geralmente é o <strong className="highlight-text pink">desfecho trágico</strong> de violências anteriores.</p>
          </div>

          <svg className="doodle connector-2" width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M90,10 Q70,20 20,70 M34,66 L20,70 L24,56" className="icon-stroke" stroke="var(--c-blue)"/>
          </svg>

          {/* Infographic block 3 */}
          <div className="info-block info-3 paper-card">
            <span className="info-number text-hand">03.</span>
            <p>Proteja-se: muitas vítimas desconhecem os mecanismos da <strong className="highlight-text pink">Lei Maria da Penha</strong>.</p>
          </div>
          
          <div className="hand-drawn-notes">
            <p className="text-hand note-1">A informação é a sua principal defesa!</p>
            <svg className="doodle note-arrow" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M70,70 Q40,20 10,10 M30,10 L10,10 L10,30" className="icon-stroke" stroke="var(--c-blue)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
