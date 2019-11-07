import React from 'react'
import logo from '../assets/logoGet.svg'
import git from "../assets/Redes/git.png"
import gmail from "../assets/Redes/gmail.png"
import insta from "../assets/Redes/insta.png"
import android from "../assets/Redes/android.png"
import ios from "../assets/Redes/ios.png"
import log from '../assets/Icone/favicon (1).ico'
import './Escolhe.css'
import "./card.css"
import { Row, Col, Container } from 'reactstrap'
import instaladorAndroid from '../Instaladores/getJob.apk'
import Luis from '../assets/luis.jpeg'
import Luan from '../assets/luan.jpeg'
import Acucena from '../assets/acucena.jpeg'
// eslint-disable-next-line

export default function Login() {

    return (

        <body className="">

            {/*criando a navbar*/}
            <nav>
                <div className="inicio">
                    <img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" />
                </div>
            </nav>
            <div className="cor">
                <div className="container"><br /><br />
                <center><h1>Quem somos?</h1></center>
                    <Container>
                        <Row id="Row">
                            <Col id="Col" xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className="box-card">
                                    <div className="imgBx">
                                        <img src={Luis} alt="Luis" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <center><strong>  Luis Ricardo</strong></center>
                                        </div>
                                        <div className="texto">
                                            <p><strong>Usuario:</strong> luiss1569</p>
                                            <p><strong>Cargo:</strong> Fourder e CEO</p>
                                            <p><strong>Localidade:</strong> São Bento do Sapucai-SP</p>
                                            <p><strong>Redes Sociais:</strong><div className="efeito">
                                                {/*eslint-disable-next-line*/}

                                                <a href="https://github.com/Luiss1569" target="_blank"><img className="redes2" src={git} alt="git" /></a>
                                                <a href="mailto:luisricardo0626@gmail.com"target="_blank"><img className="redes1" src={gmail} alt="git" /></a>
                                                {/*eslint-disable-next-line*/}
                                                <a href="https://www.instagram.com/luis_ricardo.js/?hl=pt-br" target="_blank"><img className="redes2" src={insta} alt="git" /></a>
                                            </div></p>
                                        </div>


                                    </div>
                                </div>
                            </Col>
                            <Col id="Col" xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className="box-card">
                                    <div className="imgBx">
                                        <img src={Acucena} alt="Luis" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <center><strong>  Açucena Lemes</strong></center>
                                        </div>
                                        <div className="texto">
                                            <p><strong>Usuario:</strong> açucena14</p>
                                            <p><strong>Cargo:</strong> Fourder e CFO</p>
                                            <p><strong>Localidade:</strong> Sapucai Mirim-MG</p>
                                            <p><strong>Redes Sociais:</strong><div className="efeito">
                                                {/*eslint-disable-next-line*/}

                                                <a href="mailto:assucenalemes5@gmail.com"><img className="redes1" src={gmail} alt="git" /></a>
                                                {/*eslint-disable-next-line*/}
                                            </div></p>
                                        </div>


                                    </div>
                                </div>
                            </Col>
                            <Col id="Col" xs={{ size: 8, offset: 2 }} sm={{ size: 9, offset: 2 }} md={{ size: 5, offset: 1 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 1 }}>
                                <div className="box-card">
                                    <div className="imgBx">
                                        <img src={Luan} alt="Luan Lucas" />
                                    </div>
                                    <div className="content">
                                        <div className="top">
                                            <center><strong>  Luan Lucas</strong></center>
                                        </div>
                                        <div className="texto">
                                            <p><strong>Usuario:</strong> luan_lucas</p>
                                            <p><strong>Cargo:</strong> Fourder e CIO</p>
                                            <p><strong>Localidade:</strong> Brazopolis-MG</p>
                                            <p><strong>Redes Sociais:</strong><div className="efeito">
                                                {/*eslint-disable-next-line*/}
                                                <a href="mailto:lluanllucas@gmmail.com"><img className="redes1" src={gmail} alt="git" /></a>
                                                {/*eslint-disable-next-line*/}
                                                <a href="https://www.instagram.com/luanlucaslemesdasilva/?hl=pt-br" target="_blank"><img className="redes2" src={insta} alt="git" /></a>
                                            </div></p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <p className="tipo">Introdução</p>
                    <p>getJob() é uma plataforma, ‘web’ e ‘mobile’,
para a divulgação de vagas de emprego e estágio,
desenvolvido especificamente para oferta e procura
de vagas de Informática.
</p>
                    <p>O nosso projeto tem o objetivo facilitar na busca
por emprego de profissionais da área de informática,
através de uma plataforma onde ele encontrará
diversas oportunidades e poderá mostrar seu
interesse na vaga de forma mais dinâmica, tornando
o processo de admissão desses funcionários por parte
das empresas mais fácil</p>

                    <p>Por meio de um sistema de curtidas nosso
projeto busca ser mais prático, onde os usuários
poderão curtir as vagas a quais estão interessados e a
empresa que a divulgou terá acesso ao perfil desses
usuários podendo, ou não, curti-los de volta, caso
isso ocorra o usuário e a empresa poderão conversar
a partir de um ‘chat’ dentro da própria plataforma</p>

                    <p>O projeto busca atender a demanda das
empresas por talentos com a dificuldade dos
profissionais da área em encontrar vagas, garantindo
uma melhor eficiência se comparado a plataformas
existentes no mercado, que possuem um grande
número de vagas de diferentes áreas, dificultando o
encontro das mesmas.</p>

                    <p>getJob() permite que usuários tenham acesso a
diversas vagas na área, aumentando suas chances de
encontrar a vaga ideal.
</p>

                    <p className="tipo">Desenvolvimento</p>
                    <p>Previamente foi desenvolvida toda a ideia do
projeto onde decidimos a linguagem e a IDE que
seria criada as aplicações, pesquisando a melhor
forma de desenvolve-las. 
</p>
                    <p>O getJob() foi desenvolvido utilizando
linguagem JavaScript. Como ambiente de execução
foi empregado o NodeJs, para a criação da ‘interface
web’ foi utilizado a biblioteca ReactJs e para a
criação da parte ‘mobile’ foi utilizado React Native,
um framework baseado no ReactJs que possibilita a
criação de aplicações ‘mobiles’ utilizando JavaScript.</p>

                    <p>A IDE utilizada foi o Visual Studio Code e o
banco de dados foi criado no MongoDB e hospedado
no MongoDB Atlas.
</p>

                    <p>Nosso site está hospedado na plataforma Heroku
e a partir dele é possível fazer ‘download’ da
aplicação.</p>

                    <p className="tipo">Conclusão</p>
                    <p>Concluímos que getJob() traz uma forma
simples de divulgação de vagas e de escolha de
candidatos, na área de informática, a qual está
crescendo muito nos últimos anos. Tornando mais
rápida o processo de admissão e auxiliando os
profissionais a encontrarem vagas de interesse com
maior facilidade. </p>

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



