import React from "react";
import { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'users', 
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários - Incluir, Listar, Alterar e Excluir '
}

export default class UserCrud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}