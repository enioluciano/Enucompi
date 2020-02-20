import React from 'react';
import Header from '../components/templates/Header'
import Body from '../components/templates/Body'
import Apresentacao from '../components/templates/Apresentacao'
import ProgEvento from '../components/templates/ProgEvento'
import Empresas from '../components/templates/Empresas'


function Home() {
    return (
      <>
        <Header />
        <Body />
        <Apresentacao />
        <ProgEvento />
        <Empresas />
      </>
    );
  }
  
  export default Home;