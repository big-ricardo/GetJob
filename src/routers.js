import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/login'
import FeedComercial from './pages/Main'
import Home from './pages/escolheLogin'
import HomeEmp from './pages/VagasEmpresa'
import LoginEmp from './pages/LogEmpresa'
import CadastroEmp from './pages/LoginEmp'
import FeedPessoal from './pages/MainDev'
import CriaVaga from './pages/CriaVaga'
import teste from './pages/teste'
import Messagens from './pages/Messagens'
import MessagensEmp from './pages/MensagensEmp'
import Credito from './pages/Creditos'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/logindev" exact component={Login}/>
            <Route path="/homevaga/:id" exact component={FeedComercial}/>
            <Route path="/" exact component={Home}/>
            <Route path="/cadastroemp" exact component={CadastroEmp}/>
            <Route path="/loginemp" exact component={LoginEmp}/>
            <Route path="/homedev/:id" exact component={FeedPessoal}/>
            <Route path="/criavaga/:id" exact component={CriaVaga}/>
            <Route path="/emp/:id" exact component={HomeEmp}/>
            <Route path="/teste" exact component={teste}/>
            <Route path="/mensagens/:id/:idE" exact component={Messagens}/>
            <Route path="/mensagensE/:id/:idE" exact component={MessagensEmp}/>
            <Route path="/creditos" exact component={Credito}/>
        </BrowserRouter>
    )
}