import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'reactstrap'
import './Vagas.css'
import menu from '../assets/icone_menu.png'
import logo from '../assets/logo.png'
import api from '../services/apis'
import matchImage from '../assets/itsamatch.png'

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matchDev, setMachDev] = useState(null)
    const [loggedEmp, setEmp] = useState({});

    useEffect(() => {
        async function loadUsers() {
            const dev = await api.get('/empLog', {
                headers: { user: match.params.id }
            })
            setEmp(dev.data)
            const response = await api.get('/emps', {
                headers: { user: match.params.id }
            })
            setUsers(response.data)
        }
        loadUsers();
    }, [match.params.id])

    return (
        <div className="vagas-container">
            <header class="fixar">
                <a className="logo" href="/">
                    <img src={logo} className='logoo' alt="logo" />
                    getJob()
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href={`/criavaga/${match.params.id}`}>Criar vaga</a>
                        </li>
                        <li>
                            <a role="button" href="/">{loggedEmp.user}<img src={loggedEmp.avatar} alt=" " /></a>
                        </li>

                    </ul>
                </nav>
                <div className="menu-toggle"> <i class="fa fa-bars" aria-hidden="true"> <img src={menu} alt="menu" /> </i> </div>
            </header><br /><br /><br /><br />
            {users.length > 0 ? (
                <Container>
                    <Row id="Row">
                        {users.map(user => (
                            <Col id="Col" key={user._id} xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className={users.length === 2 ? ("item") : ("")}>
                                    <div className="box-card">
                                        <div className="imgBx">
                                            <img src={user.avatar} alt={user.user} />
                                        </div>
                                        <div className="content">
                                            <div className="top">
                                                <strong>{user.atuacao}</strong>
                                            </div>
                                            <div className="texto">
                                                <p><strong>Usuario:</strong>  {user.user}</p>
                                                <p><strong>Descrição:</strong>  {user.descricao}</p>
                                                <p><strong>Localidade:</strong>  {user.cidade}</p>
                                            </div>
                                            <div className="buttonss">
                                                <a href={`/homevaga/${user._id}`}>Ver vaga</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    <img className="avatar" src={'localhost:3333/image/' + matchDev.avatar} alt="Avatar" />
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>
                    <button type="button" onClick={() => setMachDev(null)}>Fechar</button>
                </div>
            )}
        </div>
    )
}