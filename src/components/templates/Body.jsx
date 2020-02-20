import React from 'react';
import '../css/Body.css'

import Principal from "../../assets/img/principal.jpeg";
import Principal2 from "../../assets/img/principal2.jpeg";


// import { Container } from './styles';

export default function Body() {
  return (
      <div className="tamanho">
          <section id="home" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-12 capa">
            
            <div id="carousel-spotify" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                
                <div className="carousel-item active">
                
                <img src={Principal} alt="Principal" className="Principal" />
              
                </div>

                <div className="carousel-item">
                <img src={Principal2} alt="Principal2" className="Principal2" />
                </div>

              </div>

             
              <a href="#carousel-spotify" className="carousel-control-prev" data-slide="prev">
                <i className="fas fa-angle-left fa-3x"></i>
              </a>

              <a href="#carousel-spotify" className="carousel-control-next" data-slide="next">
                <i className="fas fa-angle-right fa-3x"></i>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>



      </div>
  );
}
