import React, { useState,useEffect } from 'react'
import logo from '../assets/logoGet.svg'
import './Login.css'
import api from '../services/apis'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
/*função que recebe o nome e a senha do usuario e passa para api */
export default function Login({ history, match }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        function loadCookies(){
            let myCookies = {}
            var kv = document.cookie.split(";")
            console.log(kv)
            for(let id in kv){
                var cookie = kv[id].split("=")
                myCookies[cookie[0].trim()] = cookie[1];
            }
            if(myCookies['_user'] !== "" && myCookies['_password'] !== ""){
                setUsername(myCookies['_user'])
                setPassword(myCookies['_password'])
                document.querySelector('#horns').checked = true
            }
        }
        loadCookies()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        let check = document.querySelector('#horns').checked
       await login(check)
    }

    async function login(check){
        const response = await api.post('/devs', {
            user: username,
            senha: password,
        });
        /*recebe a resposta(id) da api e eniva o usuario ao home*/
        const { _id } = response.data;

        if (_id) {
            if(check == true){
                var myCookies = {}
                myCookies["_user"] = username
                myCookies["_password"] = password
                document.cookie = ""
                let dataExpired = new Date(Date.now()+60*1000).toString()
                var cookieString = ''
                cookieString = '_user' + "=" + myCookies['_user'] + ";" + dataExpired + ";"
                document.cookie = cookieString
                cookieString = '_password' + "=" + myCookies['_password'] + ";" + dataExpired + ";"
                document.cookie = cookieString
            }
            history.push(`/homedev/${_id}`)
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
                        {/*erro caso não foi possivel encontrar o usuario*/}
                        {error && (
                            <Alert color="danger">
                                <strong>Algo deu Errado!</strong>Revise seu e Email e Senha
              </Alert>
                        )}{/*campos que recebem os dados digitados pelo usuario */}
                        <input
                            type="text"
                            placeholder="Seu usuario do GitHub"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label className="check">
                            <input type="checkbox" id="horns" className="horns" /><h6>Lembre de Mim</h6>
                        </label>
                        <button type="submit" className="botao">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


