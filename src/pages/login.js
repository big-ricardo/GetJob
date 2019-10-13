import React, { useState } from  'react'
import logo from '../assets/logoGet.svg'
import './Login.css'
import api from '../services/apis'
import {Alert} from 'reactstrap'
import {Link} from'react-router-dom'

export default function Login({history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[error,setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault() 

        const response = await api.post('/devs', { 
            user:username, 
            senha: password,
        });

        const {_id} = response.data;
        
        if(_id){
            history.push(`/homedev/${_id}`)
        }else{
            setError(true)
        }
    }
    
    return (
    <div className="fundo-login">
      <div className="card-log">
        <div className="login-container">
            <form onSubmit= {handleSubmit}>
            <Link to="/">
                <img src={logo} className="logo" alt="Tindev"/>
            </Link>
            {error && (
                <Alert color="danger">
               <strong>Algo deu Errado!</strong>Revise seu e Email e Senha
              </Alert>
            )}
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
                <button type="submit" className="botao">Enviar</button>
            </form>         
        </div>
      </div>
    </div>
    );
  }


