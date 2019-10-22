import React, { useState } from 'react'
import logo from '../assets/logoGet.svg'
import {Alert} from 'reactstrap'
import './Login.css'
import { Link } from 'react-router-dom'
import api from '../services/apis'
// função que recebe os dados dos campos e passa para api
export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/emps', {
            username,
            senha: password,
            type: true
        });
        // api devolve o id do usuario e carrega o home
        const { _id } = response.data;


        if (_id) {
            history.push(`/emp/${_id}`)
        } else {
            setError(true)
        }
    }

    return (
    <div className="fundo-login">
     {/*criação do card onde sera realizado o cadastro */}
     <div className="card-log">
        <div className="login-container">

            <form onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logo} className="logo" alt="Tindev" />
                </Link>
                {/*mostra um erro caso não encontre o usuario*/}
                {error && (
                    <Alert color="danger">
                        <strong>Algo deu Errado!</strong>Revise seu e Email e Senha
              </Alert>
                )}
                {/*campos para o usuario preencher*/}
                <input
                    type="text"
                    placeholder="Nome da Empresa"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Sua senha"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />



                <button className="botao" type="submit">
                    Enviar
				</button>
                <a href="/cadastroemp"><h4 className="Link">Fazer Cadastro</h4></a>
            </form>
        </div>


     </div>
</div>
     );
    
    
}


