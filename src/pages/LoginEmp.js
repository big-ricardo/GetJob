import React, { useState, useMemo } from 'react'
import logo from '../assets/logoGet.svg'
import { Link } from 'react-router-dom'
import './Login.css'
import api from '../services/apis'
import camera from '../assets/camera.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cidade, setCiadade] = useState('');
    const [email, setEmail] = useState('');
    const [thumbnail, setthumbnail] = useState(null)
    let imagem;

    let preview = useMemo(() =>{
        let n = thumbnail ? URL.createObjectURL(thumbnail): null
        console.log(n)
        return thumbnail ? URL.createObjectURL(thumbnail): null
    }, [thumbnail])

    function selectFileHandle(e){
        imagem = { selectFile: e.target.files[0]}
        setthumbnail(imagem.selectFile)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const datas = new FormData()

        datas.append('file', imagem.selectFile, imagem.selectFile.name)
        const resp = await api.post('/upload', datas)
        const { avatar} = resp.data
        console.log(avatar)

        if (avatar) {
            const response = await api.post('/emps', {
                user: username,
                senha: password,
                cidade,
                email,
                avatar,
                type: false
            });

            const { _id } = response.data;


            history.push(`/emp/${_id}`)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <br/><br/><br/>
                <Link to="/">
                    <img src={logo} className="logo" alt="Tindev" />
                </Link>
                <label id="thumbnail" style={{BackgroundImage: `url(${preview})`}}>
                <input
                    type="file"
                    required
                    placeholder="Imagem"
                    value={imagem}
                    onChange={e => selectFileHandle(e)}
                />
                <img src={camera} alt="Imagem"/>
                </label>
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
                <input
                    type="text"
                    required
                    placeholder="Cidade"
                    value={cidade}
                    onChange={e => setCiadade(e.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="file"
                    required
                    placeholder="Imagem"
                    value={imagem}
                    onChange={e => selectFileHandle(e)}
                />
                <button type="submit" className="botao">Enviar</button>
                <a href="/loginemp"><h4 className="link">Fazer Login</h4></a>
            </form>
        </div>
    );
}


