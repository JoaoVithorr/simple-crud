import React from "react";
import './App.css';

// importando os componentes
import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>