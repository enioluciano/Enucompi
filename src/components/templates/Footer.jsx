import React from "react";
import "../css/Footer.css";
import Logo from "../../assets/img/Logo.png";
import Ercemapi from "../../assets/img/LogoErcemapi.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
//<a href="/">
//<i id="icon" className="fab fa-facebook-f fa-2x"></i>
//</a>
//<element className="icons-geral" />
//<a href="/">
//<i id="icon" className="fab fa-instagram fa-2x"></i>
//</a>
// import { Container } from './styles';

export default function Footer() {
  return (
    <div className=" space1 background">
      <div className="container">
      <div className="row redes-sociais">
      <div className="col-12">
        <div className="img">
          <a href="/" className="logoErc">
            <img src={Ercemapi} alt="Logoerc" className="imagem1" />
          </a>
         
          <a href="/" className="logoEnu">
            <img src={Logo} alt="Logo" className="imagem" />
          </a>
        </div>
        
        
         
         
          </div>
         
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            <span className="text">
              © 2020 ERCEMAPI | ENUCOMPI 2020 | 17 a 19 de setembro | Parnaíba -
              PI. <br />
              Todos os direitos reservados.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
