import React, { useState, useEffect } from 'react'
import logo from '../assets/logoGet.svg'
import './Messagens.css'
import api from '../services/apis'
import io from 'socket.io-client'
import log from '../assets/Icone/favicon (1).ico'

export default function Login({ history, match }) {
    const [message, setMessage] = useState('')
    const [messagens, setMessagens] = useState([])
    const [loggedUser, setLogged] = useState({})
    const [targetUser, setTarget] = useState({})
    let mss = []
    const idloggedUser = match.params.id
    const idtargetUser = match.params.idE

    useEffect(() => {
        async function loadUsers() {
            const emp = await api.get('/vagLog', {
                headers: { user: match.params.id }
            })
            console.log(emp.data)
            setLogged(emp.data)
            const dev = await api.get('/devLog', {
                headers: { user: match.params.idE }
            })
            setTarget(dev.data)
            console.log(emp)
        }
        loadUsers();
    }, [match.params.id])

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post(`/mess/${idtargetUser}`, {
            id: idloggedUser,
            message,
        }, {
            headers: { user: idloggedUser }
        });
        setMessage("")
        var objDiv = document.querySelector(".mensagens-box");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: match.params.id }
        })
        socket.on('message', messageRecebida => {
            mss.push(messageRecebida)
            setMessagens([...mss])
            var objDiv = document.querySelector(".mensagens-box");
            objDiv.scrollTop = objDiv.scrollHeight;
        })

    }, [match.params.id])

    return (
        <div className="message-container">
            <center><nav> <div className="inicio"><img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" /></div></nav></center>
            <div className="mensagens-box">
                {messagens.length > 0 ? (
                    <div>
                        {
                            messagens.map(mess => (
                                <div>
                                    {mess.id === idloggedUser ? (
                                        <div className="loggedMessage"><div className="messageE"><strong>{loggedUser.user}</strong><div className="text">{mess.message}</div></div></div>
                                    ) : (
                                            <div className="targetMessage"><div className="messageR"><strong>{targetUser.user}</strong><div className="text">{mess.message}</div></div></div>
                                        )}
                                </div>
                            ))
                        }
                    </div>
                ) : (
                        <div className="empty">Acabou</div>
                    )}
            </div>
            <div className="envio-container=">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="inputTexto"
                        placeholder="Digite sua Mensagem"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button type="submit" className="botaao">Enviar</button>
                </form>
            </div>
        </div>
    );
}


