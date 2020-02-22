import React from 'react';
import "../css/Menu.css";

// import { Container } from './styles';

export default function Menu() {
  return (
    <>
         <header id="header">
    <nav className="navbar navbar-fixed-top" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
          <a className="navbar-brand" href="index.html">Bikin</a>
        </div>
        <div className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#header">Home</a></li>
            <li><a href="/#">Feature</a></li>
            <li><a href="/#">Gallery</a></li>
            <li><a href="/#pricing">Price & Plan</a></li>
            <li><a href="/#our-team">Our Team</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </div>

    </nav>
    
  </header>
    </>
  );
}
