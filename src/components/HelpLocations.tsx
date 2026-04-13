import React from "react"
import "./HelpLocations.css"

const helpLocations = [
  {
    name: "Casa da Mulher Brasileira (CMB)",
    description:
      "Espaco de atendimento integrado com apoio psicologico, social e juridico.",
    bgColor: "var(--c-pink)",
    textColor: "var(--c-white)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Casa+da+Mulher+Brasileira",
  },
  {
    name: "Centro de Referencia da Mulher Flor de Lis",
    description:
      "Atendimento psicossocial e orientacao para acesso a direitos.",
    bgColor: "var(--c-blue)",
    textColor: "var(--c-white)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Centro+de+Referencia+da+Mulher+Flor+de+Lis",
  },
  {
    name: "Delegacia Especializada de Atendimento a Mulher (DEAM)",
    description:
      "Registro de ocorrencia, pedido de medida protetiva e encaminhamentos.",
    bgColor: "var(--c-purple)",
    textColor: "var(--c-white)",
    mapsUrl: "https://maps.app.goo.gl/Rb2vhVoJzLJPkMep9",
  },
]

export const HelpLocations: React.FC = () => {
  return (
    <section className="section help-locations-section" id="locais-ajuda">
      <div className="container">
        <h2 className="display-subtitle help-locations-title">
          <span className="cutout-text">ONDE BUSCAR AJUDA</span>
        </h2>
        <div className="help-locations-grid">
          {helpLocations.map((place) => (
            <article
              key={place.name}
              className="paper-card help-locations-card"
              style={{ backgroundColor: place.bgColor, color: place.textColor }}
            >
              <h3 className="help-locations-card-title">{place.name}</h3>
              <p className="help-locations-card-description">
                {place.description}
              </p>
              <a
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="help-locations-map-btn box-shadow-hard-hover"
              >
                Como chegar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
