import React from "react";

import "../css/Apresentacao.css";
import Cuia from "../../assets/img/cuia.jpg";


function Apresentacao() {
  return (
    <div className="container cont">
      <h3 id="apresentacao">Apresentação</h3>
      <div className="row">
        <div className="col-md-6 teste">
          <img src={Cuia} alt="Cuia" className="cuia" />
          <button id="botao1"type="button" className="btn btn-primary btn-lg btn-block">
          <i className="far fa-edit text-blue">Fazer inscrição!</i>
          </button>
        </div>

        <div className="col-md-6 sobre">
          <h2>Sobre o ERCEMAPI {"&"} ENUCOMPI</h2>
          <p>
            A<strong> VIII Escola Regional de Computação Ceará, Maranhão, Piauí
            (ERCEMAPI 2020) </strong>tem como objetivo disseminar o conhecimento técnico
            e científico sobre temas e assuntos de vanguarda na área de
            Computação. As Escolas Regionais são eventos promovidos pela
            <strong> Sociedade Brasileira de Computação (SBC)</strong>. A ERCEMAPI visa se
            consolidar como um evento de referência nos Estados do Maranhão,
            Ceará e Piauí e região. Além disso, o evento colabora e contribui
            com a consolidação dos Programas de Pós-Graduação da região.
          </p>
          <p>
            A ERCEMAPI 2020, acontece de 17 a 19 de setembro, na cidade de
            Parnaíba-PI, porta de entrada turística para a Rota das Emoções
            (Lençóis Maranhenses - Delta do Rio Parnaíba - Jericoacoara).
          
            Contará com a realização em paralelo do evento satélite <strong>Encontro
            Unificado de Computação do Piauí (ENUCOMPI 2020)</strong>. Em sua 13ª edição,
            o ENUCOMPI se consolida como um dos mais importantes eventos de
            Computação da região nordeste, especialmente no eixo Maranhão, Piauí
            e Ceará, visando contribuir para o enriquecimento da ciência
            regional, por meio do incentivo a pesquisa, a inovação e ao
            empreendedorismo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apresentacao;
