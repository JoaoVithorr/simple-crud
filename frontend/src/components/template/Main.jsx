import React from "react";
import './Main.css';
import Header from './Header';
import { Fragment } from "react";

export default props =>
    <Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </Fragment>