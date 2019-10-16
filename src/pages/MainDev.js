import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import like from '../assets/like.svg'
import deslike from '../assets/dislike.svg'
import menu from '../assets/icone_menu.png'
import './menu.css'
import api from '../services/apis'
import { Row, Col, Container } from 'reactstrap'
import matchImage from '../assets/itsamatch.png'
import io from 'socket.io-client'
import './Main.css'

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matchsDevLog, setMatchs] = useState([])
    const [matchDev, setMachDev] = useState(null)
    const [verMatchs, setVerMatch] = useState(null)
    const [loggedDev, setDev] = useState({});
    const [pagina, setPg] = useState(1);

    useEffect(() => {
        async function loadUsers() {
            const dev = await api.get('/devLog', {
                headers: { user: match.params.id }
            })
            setDev(dev.data)
            const matchDev = await api.get('/matchs', {
                headers: { user: match.params.id }
            })
            setMatchs(matchDev.data)
            const response = await api.get(`/vags?pg=${pagina}&vs=6`, {
                headers: { user: match.params.id }
            })
            setUsers(response.data)
        }
        loadUsers();// eslint-disable-next-line
    }, [match.params.id])

    async function handleLike(id) {
        await api.post(`/vags/${id}/likes`, null, {
            headers: { user: match.params.id }
        })
        console.log('like', id)

        setUsers(users.filter(user => user._id !== id))
        testUsers()
    }

    useEffect(() => {
        const socket = io('https://getjobserver.herokuapp.com', {
            query: { user: match.params.id }
        })

        socket.on('match', dev => {
            setMachDev(dev)
        })

    }, [match.params.id])


    async function testUsers() {
        if (users.length  <= 1) {
            setPg(pagina + 1)
            console.log(pagina)
            const respons = await api.get(`/vags?pg=${pagina}&vs=6`, {
                headers: { user: match.params.id }
            })
            const data = respons.data
            console.log(pagina, data.length)
            if(data.length > 0){
                setUsers([...respons.data])
            }
        }
    }


    async function handleDeslike(id) {
        await api.post(`/vags/${id}/deslikes`, null, {
            headers: { user: match.params.id }
        })
        setUsers(users.filter(user => user._id !== id))
        console.log(users.length)
        testUsers()
    }

    return (
        <div className="main-container">
            {!matchDev && !verMatchs && (
                <header className="fixar">
                    <a className="logo" href="/">
                        <img src={logo} className='logoo' alt="logo" />
                        getJob()
                </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="# " onClick={() => setVerMatch(true)}>Matchs</a>
                            </li>
                            <li>
                                <a role="button" href=" ">{loggedDev.user}<img src={loggedDev.avatar} alt=" " /></a>
                            </li>

                        </ul>
                    </nav>
                    <div className="menu-toggle"> <i className="fa fa-bars" aria-hidden="true"> <img src={menu} alt="menu" /> </i> </div>
                </header>
            )}
            <br /><br /><br /><br />
            {users.length > 0 ? (
                <Container>
                    <Row id="Row">
                        {users.map(user => (
                            <Col id="Col" key={user._id} xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className={users.length === 2 ? ("item") : ("")}><div className="box-card">
                                    <div className="imgBx">
                                        <img src={user.avatar} alt={user.name} />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <strong>{user.atuacao}</strong>
                                        </div>
                                        <div className="texto">
                                            <p><strong>Empresa:</strong>  {user.user}</p>
                                            <p><strong>Descrição:</strong>  {user.descricao}</p>
                                            <p><strong>Localidade:</strong>  {user.cidade}</p>
                                        </div>
                                        <div className="buttons">
                                            <button type="button" onClick={() => handleDeslike(user._id)}>
                                                <img src={deslike} alt="deslike" />
                                            </button>
                                            <button type="button" onClick={() => handleLike(user._id)}>
                                                <img src={like} alt="deslike" />
                                            </button>
                                        </div>
                                    </div>
                                </div></div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                    <div className="empty">Acabou</div>
                )}

            {matchDev && (
                <div className="match-container">
                    <img src={matchImage} alt="itsMatch" />
                    <img className="avatar" src={matchDev.avatar} alt="Avatar" />
                    <strong>{matchDev.user}</strong>
                    <p>{matchDev.atuacao}</p>
                    <p>{matchDev.descricao}</p>
                    <p>{matchDev.emailContato}</p>
                    <button type="button" onClick={() => setMachDev(null)}>Fechar</button>
                </div>
            )}

            {verMatchs && (
                <div className="matchVer-container">
                    {matchsDevLog.length > 0 ? (
                        <Container>
                            <img className="imgMatch" src={matchImage} alt="Its a Match" />
                            <Row id="Row">
                                {matchsDevLog.map(user => (
                                    <Col id="Col" key={user._id} xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                       <div className={matchsDevLog.length === 2 ? ("item") : ("")}><div className="box-card">
                                            <div className="imgBx">
                                                <img src={user.avatar} alt={user.name} />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <strong>{user.atuacao}</strong>
                                                </div>
                                                <div className="texto">
                                                    <p><strong>Empresa:</strong>  {user.user}</p>
                                                    <p><strong>Descrição:</strong>  {user.descricao}</p>
                                                    <p><strong>Localidade:</strong>  {user.cidade}</p>
                                                    <p><strong>Email Contato:</strong>  {user.emailContato}</p>
                                                    <div className="buttonss">
                                                        <a href={`/mensagens/${match.params.id}/${user._id}`}>Mensagens</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    ) : (
                            <div className="empty">Acabou</div>
                        )}

                    <button type="button" onClick={() => setVerMatch(null)}>Fechar</button>
                </div>
            )}

        </div>

    )
}