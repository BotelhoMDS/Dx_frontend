import logo from './figure/dxbranco.svg';
import './Footer.css';
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import home from './figure/Imagem_home.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { scrollToTop } from './scrollToTop';
import Login from './Login';


export default function Footer() {
  return (
    <header className='foot'>
 <nav >
 <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>Soluções mais</p>
            <p><strong>RÁPIDAS</strong></p>
            <p><strong>PRÁTICAS</strong></p>
            <p><strong>EFICIENTES</strong></p>
            <p>para você</p>
          </div>
          <div className="footer-logo" onClick={scrollToTop}>
            <img src={logo} alt="DX logo" />
          </div>
          <div className="footer-icons">
            <a href="mailto:example@example.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </footer>
 </nav>
 </header>
 )
}