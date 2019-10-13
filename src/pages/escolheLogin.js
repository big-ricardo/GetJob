import React from 'react'
import logo from '../assets/logoGet.svg'
import comerci from '../assets/comercial.png'
import pesso from '../assets/pesoal.png'
import slide3 from "../assets/slide3.jpg"
import log from '../assets/Icone/favicon (1).ico'
import './Escolhe.css'
import { Row, Col, Container } from 'reactstrap'
import { UncontrolledCarousel } from 'reactstrap';

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
            <center><nav> <div className="inicio"><img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" /></div></nav></center>
            
            <div className="container">
            <Container>
                <Row>
                    <Col xs={{size: 0}} sm={{ size: 12 }} md={{ size: 12 }} lg={{ size: 12 }} xl={{ size: 12 }}>
                        <div className="carrosel">
                            <UncontrolledCarousel items={items} className="image" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/>
                <div className="expla texto ">
                    <div>
                        <h1>Quem somos?</h1>
                    </div><br />
                    <div>
                        <p>O getJob() é uma ampla plataforma que tem o objetivo de facilitar a vida de quem esta a procura de um emprego ou estagios
                            e para a divulgação dessas vagas.
                    </p><br />
                        <p>Tendo assim dois tipos de contas!</p>
                    </div>
                </div>
                <div className=" expla container">
                </div>
                <div className='collum'>
                    <div class=" texto">
                        <br />
                        <h2>Conta Pessoal</h2>
                        <a className="efeito" href="logindev"><img src={pesso} alt="logo" width="200px" /></a>
                        <h3>Conta voltada para pessoas em busca de empregos ou estagios!</h3>
                    </div>
                    <div class=" texto">
                        <br />
                        <h2>Conta Comercial</h2>
                        <a className="efeito" href="loginemp">
                            <img src={comerci} alt="logo" width="200px" />
                        </a>
                        <h3>Conta voltada para empresas que dejesam divulgar suas vagas!</h3>
                    </div>
                </div><br /><br /><br />
                <div className="rodape">
                    <center> Luís-Açucena-Luan getJob() 2019</center>
                </div>
                <script src='./acoes.js' />
                <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
            </div>
        </body>
    );
}



