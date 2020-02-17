import React from "react";
import "../css/Header.css";
import Logo from "../../assets/img/Logo.png";
import Ercemapi from "../../assets/img/LogoErcemapi.png";
import Logosbc from "../../assets/img/Logosbc.png";



function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
      
      <a href="/" className="logoErc">
        <img src={Ercemapi} alt="Logoerc" className="imagem1" />
      </a>
      <div className="fonte"> | </div>
      <a href="/" className="logoEnu">
        <img src={Logo} alt="Logo" className="imagem" />
      </a>

      <a href="http://www.sbc.org.br/" className="logoSbc">
        <img src={Logosbc} alt="Logosbc" className="imagem2" />
      </a>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#nav-principal"
      >
        
        
        <i className="fas fa-bars text-blue"></i>
        
        
      </button>

      <div className="collapse navbar-collapse" id="nav-principal">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown" id="dropdownEvento">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              O evento
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#apresentacao">
               Apresentação
              </a>
              
              <a className="dropdown-item" href="/#">
               A ERCEMAPI
              </a>
              
              <a className="dropdown-item" href="/#">
               O ENUCOMPI
              </a>
           
              <a className="dropdown-item" href="/#">
               Organização
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Programação
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/#">
                Palestras
              </a>
              <a className="dropdown-item" href="/#">
                Minicursos
              </a>
            
              <a className="dropdown-item" href="/#">
                Fórum
              </a>
              <a className="dropdown-item" href="/#">
                Sessões Técnicas
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Chamadas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/#">
                Artigos
              </a>
              <a className="dropdown-item" href="/#">
                Minicursos
              </a>
            </div>
          </li>



           <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Informações
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/#">
                Local Evento
              </a>
              <a className="dropdown-item" href="/#">
                Sobre Parnaíba
              </a>
            
              <a className="dropdown-item" href="/#">
                Hospedagem
              </a>
              <a className="dropdown-item" href="/#">
                Turismo
              </a>
            </div>
            </li>



          <li className="nav-item">
            <a href="/#" className="nav-link">
              Contato
            </a>
          </li>
          <li className="nav-item divisor"></li>
          <li className="nav-item">
          

              <button id="botao"className="btn btn-outline-primary" type="button"> INSCREVA-SE AQUI!</button>
            
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
    
  );
}

export default Header;
