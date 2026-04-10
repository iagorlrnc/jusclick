import React from 'react';
import './Contact.css';

const resources = [
  {
    title: 'Central de Atendimento à Mulher',
    number: '180',
    desc: 'Ligue a qualquer hora, de qualquer lugar do Brasil. Atendimento gratuito, sigiloso e disponível 24 horas.',
    type: 'Violência',
    color: 'res-pink',
  },
  {
    title: 'Disque 100 — Direitos Humanos',
    number: '100',
    desc: 'Canal para denúncias de violações de direitos humanos, incluindo violência contra a mulher.',
    type: 'Denúncia',
    color: 'res-blue',
  },
  {
    title: 'Polícia Militar',
    number: '190',
    desc: 'Em situação de risco imediato, ligue imediatamente. Sirva-se do botão de pânico quando disponível.',
    type: 'Emergência',
    color: 'res-dark',
  },
  {
    title: 'SAMU',
    number: '192',
    desc: 'Serviço de Atendimento Móvel de Urgência para casos de violência física que necessitem cuidado médico.',
    type: 'Saúde',
    color: 'res-yellow',
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="section resources-section" id="contatos">
      <div className="container">
        <div className="resources-header">
          <h2 className="display-subtitle">
            <span className="cutout-text yellow">CONTATOS ESSENCIAIS</span>
          </h2>
          <p className="resources-subtitle">
            Guarde estes números. Você pode precisar deles — ou alguém próximo a você pode.
          </p>
        </div>

        <div className="resources-phones">
          {resources.map((r, i) => (
            <article key={i} className={`res-card box-shadow-hard ${r.color}`} style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1}deg)` }}>
              <div className="res-card-head">
                <span className="res-type">{r.type}</span>
                <span className="res-number">{r.number}</span>
              </div>
              <h3 className="res-title">{r.title}</h3>
              <p className="res-desc">{r.desc}</p>
              <a href={`tel:${r.number}`} className="res-call-btn box-shadow-hard-hover" aria-label={`Ligar para ${r.number}`}>
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" fill="currentColor"/>
                </svg>
                Ligar agora
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
