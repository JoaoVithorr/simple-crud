import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// importando os componentes
import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Home from '../home/Home';
import Footer from '../template/Footer';
import Routes from './Routes';

export default props => 
    <BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
    </BrowserRouter>