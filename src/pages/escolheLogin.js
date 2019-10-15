import React from 'react'
import logo from '../assets/logoGet.svg'
import comerci from '../assets/comercial.png'
import pesso from '../assets/pesoal.png'
import slide3 from "../assets/slide3.jpg"
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
// eslint-disable-next-line
const item = new Array();
var imagem = new Image();
imagem.src = "https://resultadosdigitais.com.br/blog/files/2015/08/imcreator-imagem.jpg";
imagem.width = 500;
imagem.height = 100;
item[0] = imagem;
const items = [
    {
        src: 'https://resultadosdigitais.com.br/blog/files/2015/08/imcreator-imagem.jpg',
        caption: 'Quer facilitar sua vida?',
        header: 'Seja Bem Vindo!',
        key: '1'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg',
        altText: 'Arrume um emprego de um jeito Facil!',
        caption: 'De um jeito Facil e Dinamico!',
        header: 'Poste suas Vagas Aqui!',
        key: '2'
    },
    {
        src: slide3,
        altText: 'Arrume um emprego de um jeito Facil!',
        caption: 'Arrume um emprego de um jeito Facil!',
        header: 'Quer um emprego?',
        key: '3'
    }
];

export default function Login({ history }) {


    //  function componentDidMount() {
    //     window.onscroll = () => handleScroll()
    //   }   

    //   function handleScroll(){
    //     if (document.documentElement.scrollTop  + document.querySelector('#root') >= document.documentElement.scrollHeight) {
    //         console.log('final')
    //       } 
    //}



    return (

        <body>
            <nav>
                <div className="inicio">
                    <img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" />
                </div>
            </nav><br /><br />

            <div className="container">
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
                <p>O getJob() é uma ampla plataforma voltada para a área de Informática que tem como objetivo ajudar os profissionais da
                              área a encontrar as melhores vagas. <br />Na nossa plataforma você pode:</p>



                <div className="contas">
                    <p className="tipo">Escolha a conta ideal para você!</p>
                    <div className='collum'>

                        <div class=" texto1">
                            <h2>Conta Pessoal</h2>
                            <h3>Conta voltada para pessoas em busca de empregos ou estágios!</h3>
                            <a className="efeito" href="logindev"><img src={pesso} alt="logo" width="200px" /></a>
                        </div>
                        <div class=" texto">
                            <h2>Conta Comercial</h2>
                            <h3>Conta voltada para empresas que dejesam divulgar suas vagas!</h3>
                            <a className="efeito" href="loginemp">
                                <img src={comerci} alt="logo" width="200px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="qs">
                    <div className="lista">
                        <ul>
                            <li className="efeito">Entrar como Úsuario com seu perfil do GitHub</li>
                            <li className="efeito">Visualizar vagas de <strong>empregos</strong> ou <strong>estágios</strong></li>
                            <li className="efeito">Mostrar interesse nas vagas desejadas</li>
                        </ul>
                    </div>
                    <center><img className="cont" src={contrato} alt="Cont" /></center>
                    <div className="lista1">
                        <ul>
                            <li className="efeito">Criar o cadastro da sua Empresa</li>
                            <li className="efeito">Criar e divulgar vagas</li>
                            <li >Escolher o candidato ideal e conversar com ele pelo chat dentro da plataforma</li>
                        </ul>
                    </div>

                </div>
                <script src='./acoes.js' />
                <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
            </div>
            <footer className="rodape">
                <div className="rods">
                    <p className="rod1 rod"><strong>Desenvolvedores:</strong><br />Luís Ricardo Albano Santos<br />Açucena Lemes A. Silva<br />Luan Lucas da Silva</p>
                    <p className="rod">  Redes Sociais:<br />
                        <a href="#"><img className="redes2" src={git} alt="git" /></a>
                        <a href="#"><img className="redes1" src={gmail} alt="git" /></a>
                        <a href="#"><img className="redes2" src={insta} alt="git" /></a>

                    </p>

                    <p className="rod">Apps:<br />
                        <a href=" "><img className="redes2" src={android} alt="git" /></a>
                        <a href=" "><img className="redes2" src={ios} alt="git" /></a>
                    </p>
                </div>
                <p className="final">2019 - getJob - Todos os direitos reservados.</p>
            </footer>


        </body>
    );
}



