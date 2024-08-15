import React from "react";
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
            <i className="fa fa-home"></i> Início
            </a>
{/* fa é o font-awesome que estou usando para adicionar ícones */}
            <a href="#/users">
            <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>