import React from 'react';
import Header from '../components/templates/Header'
import Body from '../components/templates/Body'
import Apresentacao from '../components/templates/Apresentacao'
import ProgEvento from '../components/templates/ProgEvento'
import Empresas from '../components/templates/Empresas'
import Mapas from '../components/templates/Mapas'
import Redes from '../components/templates/Redes'
import Footer from '../components/templates/Footer'
import "../components/css/Home.css"




function Home() {
    return (
      <div className="planoFundo">
        <Header />
        <Body />
        <Apresentacao />
        <ProgEvento />
        <Empresas />
        <Mapas />
        <Redes />
        <Footer />
      </div>
    );
  }
  
  export default Home;