import React from "react";
import "../css/Empresas.css";
import Logosbc from "../../assets/img/Logosbc.png";

function Empresas() {
    return(
        <>
            
            <div className = "space"></div>
            <div className="empresas">
                <h2 className="title">Empresas Parceiras</h2>
                <p className="subhead">Quer apoiar o evento? Baixe nossa <a className="link" href="/#">Proposta de Patrocínio</a></p>
            </div>
            <div className="title-sbc">
                <h3 className="title-sbc">Realização</h3>
                <a href="http://www.sbc.org.br/" className="logoSbc">
                    <img className="img-sbc-title" src={Logosbc} alt="LogoSbc"/>
                </a>
                
            </div>
            <div className="space-org"></div>
            <div className="title-org">
                <h2 className="org">Organização</h2>
                <p> EM BREVE</p>
            </div>
            <div className="space-org"></div>

           

            <div className="title-org">
                <h2 className="org">Patrocinadores Ouro</h2>
                <p> EM BREVE</p>
            </div>

            <div className="space-org"></div>

            <div className="title-org">
                <h2 className="org">Patrocinadores Prata</h2>
                <p> EM BREVE</p>
            </div>

            <div className="space-org"></div>
            

            <div className="title-org">
                <h2 className="org">Apoio Financeiro</h2>
                <p> EM BREVE</p>
            </div>
            <div className="space-org"></div>
            </>
    );
    
} export default Empresas;