import React from "react"
import "./LegalProtectionLinks.css"

const laws = [
  {
    name: "Lei Maria da Penha (Lei 11.340/2006)",
    focus: "Violência doméstica e familiar contra a mulher.",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
  },
  {
    name: "Lei do Feminicídio (Lei 13.104/2015)",
    focus: "Inclui o feminicídio como forma qualificada de homicídio.",
    url: "http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13104.htm",
  },
  {
    name: "Lei Carolina Dieckmann (Lei 12.737/2012)",
    focus: "Tipifica crimes informáticos, como invasão de dispositivo.",
    url: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm",
  },
  {
    name: "Lei Mariana Ferrer (Lei 14.245/2021)",
    focus:
      "Garante proteção à dignidade da vítima durante audiências e julgamentos.",
    url: "http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14245.htm",
  },
]

export const LegalProtectionLinks: React.FC = () => {
  return (
    <section className="section legal-protection-section" id="leis-protecao">
      <div className="container">
        <h2 className="display-subtitle legal-protection-title">
          <span className="cutout-text blue">
            LEIS QUE PROTEGEM AS MULHERES
          </span>
        </h2>

        <p className="text-hand legal-protection-subtitle">
          Conhecer seus direitos é uma forma de se proteger.
        </p>

        <div className="legal-protection-grid">
          {laws.map((law) => (
            <article
              key={law.name}
              className="paper-card legal-protection-card"
            >
              <h3 className="legal-protection-card-title">{law.name}</h3>
              <p className="legal-protection-card-focus">{law.focus}</p>
              <a
                href={law.url}
                target="_blank"
                rel="noopener noreferrer"
                className="box-shadow-hard-hover legal-protection-link"
              >
                Ler lei completa
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
