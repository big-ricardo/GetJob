import React, { useState } from  'react'
import logo from '../assets/logoGet.svg'
import {Link} from'react-router-dom'
import './Login.css'
import api from '../services/apis'

export default function CriaVaga({match, history}) {
    const [atuacao, setUsername] = useState('');
    const [descricao, setPassword] = useState('');
    const [cidade, setCiadade] = useState('');
    const [emailC, setEmail] = useState('');

    async function handleSubmit(e){
        e.preventDefault() 

        const response = await api.post('/vags', { 
            atuacao,
            descricao,
            id:match.params.id,
            cidade,
            emailC
        });

        const {_id} = response.data;
        console.log(_id)
        
        
        history.push(`/emp/${match.params.id}`)
    }
    
    return (
        <div className="login-container">
            <form onSubmit= {handleSubmit}>
            <Link to="/">
                <img src={logo} className="logo" alt="Tindev"/>
            </Link>
                <input 
                    type="text" 
                    placeholder="Atuação" 
                    value={atuacao} 
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Descrição" 
                    required
                    value={descricao} 
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type="text" 
                    required
                    placeholder="Cidade" 
                    value={cidade} 
                    onChange={e => setCiadade(e.target.value)}
                />
                <input 
                    type="Email para Contato" 
                    required
                    placeholder="Email" 
                    value={emailC} 
                    onChange={e => setEmail(e.target.value)}
                />
                <button type="submit" className="botao">Enviar</button>
                <a href="/loginemp"><h4 className="link">Fazer Login</h4></a>
            </form>       
        </div>
    );
  }


