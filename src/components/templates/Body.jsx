import React from 'react';
import '../css/Body.css'
import IMG from '../../assets/img/img1.jpg'

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
                
                  <img src={IMG} alt="IMG"  />
              
                </div>

                <div className="carousel-item">
                    <img src={IMG} alt="IMG"  />
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
