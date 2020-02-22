import React from "react";
import "../css/Mapas.css";

// import { Container } from './styles';

export default function Mapas() {
  return (
    <div className="menu-principal">
      <div className="container">
        <h1 className="title-event"> Local do Evento</h1>
        <p className="descrition-event">
          O ERCEMAPI & ENUCOMPI 2020 serão realizados de 12 a 14 de novembro de
          2019 no Auditório do Colégio Técnico de Teresina (CTT) da Universidade
          Federal do Piauí (UFPI), na Rua Dirce Oliveira, em Teresina.
        </p>
      </div>
      <div
        id="map-container-google-2"
        className="z-depth-1-half map-container"
        style={{ height: " 500px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6762189605633!2d-41.75663853524334!3d-2.9092298978810254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2537e8e01ebb%3A0x21922d996f6260ab!2sUFDPAR%20Campus%20Ministro%20Reis%20Velloso!5e0!3m2!1spt-BR!2sbr!4v1582241722398!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: "0;" }}
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
}
