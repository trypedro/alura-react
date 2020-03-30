import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';

import PopUp from '../../Utils/PopUp';

import Tabela from '../../Components/Tabela/Tabela';

import ApiService from '../../Utils/ApiService';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: []
        }
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success') {
                    this.setState({ nomes: [...this.state.nomes, ...res.data] });
                    PopUp.exibeMensagem("success", "Autores listados com sucesso.");
                }
            }).catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar os autores."));
    }

    render() {
        const campos = [{titulo: 'Autores', dado: 'nome'}]
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h3>Autores</h3>
                    <Tabela dados={this.state.nomes} campos={campos} />
                </div>
            </Fragment>
        );
    }
};

export default Autores;