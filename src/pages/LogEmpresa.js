import React, { useState } from 'react'
import logo from '../assets/logoGet.svg'
import './Login.css'
import { Link } from 'react-router-dom'
import api from '../services/apis'

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/emps', {
            username,
            senha: password,
            type: true
        });

        const { _id } = response.data;


        if (_id) {
            history.push(`/emp/${_id}`)
        } else {
            history.push('/')
        }
    }

    return (
        <div className="login-container">

            <form onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logo} className="logo" alt="Tindev" />
                </Link>
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


                {/* <div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" type="submit">
                            Enviar
							</button>
						</div> */}

                <a href="/cadastroemp"><h4 className="Link">Fazer Cadastro</h4></a>
            </form>



        </div>


    );
}


