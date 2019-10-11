import React from 'react'
import logo from '../assets/logoGet.svg'
import comerci from '../assets/comercial.png'
import pesso from '../assets/pesoal.png'
import log from '../assets/Icone/favicon (1).ico'
import './Escolhe.css'
import { UncontrolledCarousel } from 'reactstrap';

const item = new Array();
var imagem = new Image();
imagem.src = "https://resultadosdigitais.com.br/blog/files/2015/08/imcreator-imagem.jpg";
imagem.width = 500;
imagem.height = 100;
item[0]=imagem;
const items = [
    {
     src: 'https://resultadosdigitais.com.br/blog/files/2015/08/imcreator-imagem.jpg',
      
      key: '1'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg',
     
      key: '2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
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
       
        <div className="carrosel">
            <UncontrolledCarousel items={item}/>
        </div>
        <div className="container">
          

         
           
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
            </div><br/><br/><br/>
            <div className="rodape">
               <center> Luís-Açucena-Luan getJob() 2019</center>
            </div>
            <script src='./acoes.js' />
            <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
        </div>
    </body>
    );
}



