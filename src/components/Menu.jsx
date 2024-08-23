import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import logo from './figure/dxbranco.svg'; // Caminho relativo correto
import Login from '../components/Login';
export default function Menu() {
 return (
 <header>
 <nav>
 <ul>
         <li><Link to="/implementando"> Produtos </Link> </li>
 <li><Link to="/implementando"> Serviços </Link> </li>
 <li><Link to="/"><img src={logo} alt="logo" className='logo' /></Link></li>
 <li><Link to="/quemsomos"> Quem somos nós? </Link></li>
 <li><Link to="/login"> Conta </Link></li>
 </ul>
 </nav>
 </header>
 )
}