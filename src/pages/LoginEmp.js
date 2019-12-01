import React, { useState, useMemo } from 'react'
import logo from '../assets/logoGet.svg'
import { Link } from 'react-router-dom'
import './Login.css'
import api from '../services/apis'
import camera from '../assets/camera.svg'
// recebe os dados inseridos nos campos
export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cidade, setCiadade] = useState('');
    const [email, setEmail] = useState('');
    const [thumbnail, setThumbnail] = useState(null)
    let imagem;


    function selectFileHandle(e) {
        imagem = { selectFile: e.target.files[0] }
        setThumbnail(imagem.selectFile)
    }

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(e) {
        e.preventDefault()

        const datas = new FormData()

        datas.append('file', thumbnail, thumbnail.name)
        const resp = await api.post('/upload', datas)
        const { avatar } = resp.data
        console.log(avatar)
        //criação do usuario atraves da api
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
        <div className="fundo-login">
            {/*criação do card onde sera realizado o cadastro*/}
            <div className="card-log1">
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <Link to="/">
                            <img src={logo} className="logo" alt="Tindev" />
                        </Link>
                        {/*campos que irão receber os dados */}
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
                        <label style={{ backgroundImage: `url(${preview})` }}
                            className={thumbnail ? 'has-thumbnail' : ''}
                            id="thumbnail">
                                <img src={camera} alt="Enviar imagem" />
                                <input
                                className="file"
                                type="file"
                                required
                                placeholder="Imagem"
                                value={imagem}
                                onChange={e => selectFileHandle(e)}
                            />
                        </label>
                        <button type="submit" className="botao">Enviar</button>
                        <a href="/loginemp"><h4 className="link">Fazer Login</h4></a>
                    </form>
                </div>
            </div>
        </div>
    );
}


