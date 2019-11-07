import React from 'react'
import logo from '../assets/logoGet.svg'
import comerci from '../assets/comercial.png'
import pesso from '../assets/pesoal.png'
import contrato from "../assets/contrato.jpg"
import git from "../assets/Redes/git.png"
import gmail from "../assets/Redes/gmail.png"
import insta from "../assets/Redes/insta.png"
import android from "../assets/Redes/android.png"
import ios from "../assets/Redes/ios.png"
import log from '../assets/Icone/favicon (1).ico'
import './Escolhe.css'
import { Row, Col, Container } from 'reactstrap'
import { UncontrolledCarousel } from 'reactstrap';
import instaladorAndroid from '../Instaladores/getJob.apk'
import pri from "../assets/primeira.jpg"
import seg from "../assets/segunda.jpg"
import terc from "../assets/terceira.jpg"
// eslint-disable-next-line
// criação do carrosel

//criação de um vetor que recebe as imagens do carrosel
const items = [
    {
        src:pri,
        caption: 'Quer facilitar sua vida?',
        header: 'Seja Bem Vindo!',
        key: '1'
    },
    {
        src:seg,
        altText: 'Arrume um emprego de um jeito Facil!',
        caption: 'De um jeito Facil e Dinamico!',
        header: 'Poste suas Vagas Aqui!',
        key: '2'
    },
    {
        src: terc,
        altText: 'Arrume um emprego de um jeito Facil!',
        caption: 'Arrume um emprego de um jeito Facil!',
        header: 'Quer um emprego?',
        key: '3'
    }
];

export default function Login() {

    return (

        <body>

            {/*criando a navbar*/}
            <nav>
                <div className="inicio">
                    <img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" />
                </div>
            </nav>
            <div className="cor">
                <div className="container"><br /><br />
                    {/*adicionando o carrosel e defenindo a responsividade*/}
                    <Container>
                        <Row>
                            <Col xs={{ size: 0 }} sm={{ size: 12 }} md={{ size: 12 }} lg={{ size: 12 }} xl={{ size: 12 }}>
                                <div className="carrosel">
                                    <UncontrolledCarousel items={items} className="image" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <br />

                    <center><h1>Quem somos?</h1></center>
                    <p>O getJob() é uma ampla plataforma voltada à Informática a qual tem como objetivo ajudar os profissionais da
                              área a encontrar as melhores vagas. <br />
                        <div className="efeito">
                        <br/>
                            <a href="/creditos">Saiba Mais...</a>
                        </div>
                    </p>

                    <p className="tipo"><strong>Baixe nosso Aplicativo!</strong> <p className="">
                        {/*adicionando link para baixar o app*/}
                        <div className="efeito">
                            <a href={instaladorAndroid}><img className="rodi" src={android} alt="git" /></a>
                            <a className="not"><img className="rodi" src={ios} alt="git" /></a>
                        </div>
                    </p></p>


                    <div className="contas">
                        <p className="tipo">Escolha a conta ideal para você!</p>
                        <div className='collum'>
                            {/*botões para os tipos de cadastro*/}
                            <div class=" texto1">
                                <h2>Conta Pessoal</h2>
                                <h3>Conta voltada para pessoas em busca de empregos ou estágios.</h3>
                                <a className="efeito" href="logindev"><img src={pesso} alt="logo" width="200px" /></a>
                            </div>
                            <div class=" texto">
                                <h2>Conta Comercial</h2>
                                <h3>Conta voltada para empresas que dejesam divulgar suas vagas.</h3>
                                <a className="efeito" href="loginemp">
                                    <img src={comerci} alt="logo" width="200px" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="qs">
                        {/*lista mostrando os atributos de cada conta*/}
                        <div className="lista">
                            <ul>
                                <div className="efeito"><li >Entrar como Úsuario com seu perfil do GitHub</li></div>
                                <div className="efeito"><li >Visualizar vagas de <strong>empregos</strong> ou <strong>estágios</strong></li></div>
                                <div className="efeito"><li >Mostrar interesse nas vagas desejadas</li></div>
                            </ul>
                        </div>
                        <center><img className="cont" src={contrato} alt="Cont" /></center>
                        <div className="lista1">
                            <ul>
                                <div className="efeito"><li>Criar o cadastro da sua Empresa</li></div>
                                <div className="efeito"><li>Criar e divulgar vagas</li></div>
                                <div className="efeito"><li>Escolher o candidato ideal e conversar com ele pelo chat dentro da plataforma</li></div>
                            </ul>
                        </div>

                    </div>
                    <script src='./acoes.js' />
                    <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
                </div >
                {/*criação do rodapé*/}
                <footer className="rodape">
                    <div className="rods">
                        <p className="rod1 rod"><strong>Desenvolvedores:</strong><br />Luís Ricardo Albano Santos<br />Açucena Lemes A. Silva<br />Luan Lucas da Silva</p>
                        {/*links para redes social e para o download do app*/}
                        <p className="rod"><strong>Redes Sociais:</strong> <br />{/*eslint-disable-next-line*/}
                            <a href="https://github.com/Luiss1569/Frontend-getJob" target="_blank"><img className="redes2" src={git} alt="git" /></a>
                            <a href="mailto:getjob.cep@gmail.com"><img className="redes1" src={gmail} alt="git" /></a>
                            {/*eslint-disable-next-line*/}
                            <a href="https://www.instagram.com/getjob_info/?hl=pt-br" target="_blank"><img className="redes2" src={insta} alt="git" /></a>

                        </p>

                        <p className="rod"><strong> Apps:</strong> <br />
                            <a href={instaladorAndroid}><img className="redes2" src={android} alt="git" /></a>
                            <a className="not"><img className="redes2" src={ios} alt="git" /></a>
                        </p>
                    </div>
                    <p className="final"><strong> 2019 - getJob() - Todos os direitos reservados.</strong> </p>
                </footer>

            </div>

        </body >
    );
}



