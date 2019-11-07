import React, { useEffect, useState } from 'react'
import './Main.css'
import logo from '../assets/logo.png'
import like from '../assets/like.svg'
import deslike from '../assets/dislike.svg'
import api from '../services/apis'
import menu from '../assets/icone_menu.png'
import './menu.css'
import { Row, Col, Container } from 'reactstrap'
import "./card.css"
import matchImage from '../assets/itsamatch.png'
import io from 'socket.io-client'

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matchsEmpLog, setMatchs] = useState([])
    const [matchDev, setMachDev] = useState(null)
    const [verMatchs, setVerMatch] = useState(null)
    const [loggedEmp, setEmp] = useState({});
    const [pagina, setPg] = useState(1);

    useEffect(() => {
        async function loadUsers() {
            const dev = await api.get('/vagLog', {
                headers: { user: match.params.id }
            })
            setEmp(dev.data)
            const matchDev = await api.get('/matcs', {
                headers: { user: match.params.id }
            })
            setMatchs(matchDev.data)
            const response = await api.get(`/devs?pg=${pagina}&vs=6`, {
                headers: { user: match.params.id }
            })
            setUsers(response.data)
        }
        loadUsers();// eslint-disable-next-line 
    }, [match.params.id])

    async function testUsers() {
        if (users.length <= 1) {
            setPg(pagina + 1)
            const response = await api.get(`/devs?pg=${pagina}&vs=6`, {
                headers: { user: match.params.id }
            })
            setUsers([...response.data])
        }
    }

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
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

    async function handleDeslike(id) {
        await api.post(`/devs/${id}/deslikes`, null, {
            headers: { user: match.params.id }
        })
        console.log('deslike', id)
        setUsers(users.filter(user => user._id !== id))
        testUsers()
    }

    return (
        <div className="main-container">
            {!matchDev && !verMatchs && (
                <header class="fixar">
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
                                <a role="button" href={`/emp/${loggedEmp.idEmp}`}>{loggedEmp.user}<img src={loggedEmp.avatar} alt=" " /></a>
                            </li>

                        </ul>
                    </nav>
                    <div className="menu-toggle"> <i class="fa fa-bars" aria-hidden="true"> <img src={menu} alt="menu" /> </i> </div>
                </header>
            )}
            <br /><br /><br /><br />
            {users.length > 0 ? (
                <Container>
                    <Row>
                        {users.map(user => (
                            <Col id="Col" className="kkk" key={user._id} xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className={users.length === 2 ? ("item") : ("")}>
                                    <div className="box-card">
                                        <div className="imgBx">
                                            <img src={user.avatar} alt={user.name} />
                                        </div>
                                        <div className="content">
                                            <div className="top">
                                                <strong>{user.name}</strong>
                                            </div>
                                            <div className="texto">
                                                <p><strong>Usuario:</strong>  {user.user}</p>
                                                <p><strong>Repositorios:</strong>  {user.repositorios}</p>
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
                    <div className="empty">Esta vaga ainda não possui nenhum like</div>
                )}

            {matchDev && (
                <div className="match-container">
                    <img src={matchImage} alt="itsMatch" />
                    <img className="avatar" src={matchDev.avatar} alt="Avatar" />
                    <strong className="teste">{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>
                    <button type="button" onClick={() => setMachDev(null)}>Fechar</button>
                </div>
            )}

            {verMatchs && (
                <div className="matchVer-container">
                    {matchsEmpLog.length > 0 ? (

                        <Container>
                            <img className="imgMatch" src={matchImage} alt="Its a Match" />
                            <Row >
                                {matchsEmpLog.map(user => (
                                    <Col id="Col" className="kkkk" key={user._id} xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                        <div className={matchsEmpLog.length === 2 ? ("item") : ("")}><div className="box-card">
                                            <div className="imgBx">
                                                <img src={user.avatar} alt={user.name} />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <strong>{user.name}</strong>
                                                </div>
                                                <div className="texto">
                                                    <p><strong>Usuario:</strong>  {user.user}</p>
                                                    <p><strong>Repositorios:</strong>  {user.repositorios}</p>
                                                    <p><strong>Localidade:</strong>  {user.cidade}</p>
                                                    <p><strong>Bio:</strong>  {user.bio}</p>
                                                    <p><strong>Email:</strong>  {user.email}</p>
                                                    <div className="buttonss">
                                                        <a href={`/mensagensE/${match.params.id}/${user._id}`}>Mensagens</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    ) : (
                            <div className="empty">Você não possui nenhum match ainda</div>
                        )}
                    <button type="button" onClick={() => setVerMatch(null)}>Fechar</button>
                </div>
            )}
        </div>
    )
}