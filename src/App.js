import logo from './components/figure/dxbranco.svg';
import figure3 from './components/figure/3.png';
import figure2 from './components/figure/2.png';
import figure1 from './components/figure/1.png';
import figure6 from './components/figure/6.png';
import figure5 from './components/figure/5.png';
import figure4 from './components/figure/4.png';
import './App.css';
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import home from './components/figure/Imagem_home.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { scrollToTop } from './components/scrollToTop';
import Login from './components/Login';


function App() {
  return (
    
    <div className="App">
      <div className='home'>
      
  <div class="imagem-com-texto">
    <img src={home} alt="home" className='home' />
    <div class="texto-sobre-imagem">
      <p>As soluções dos seus problemas a um toque</p>
      <a href="/" class="btn btn-light" >Descubra</a>
    </div>
  </div>

        
      </div>
      <div className="section-dx">
        <div className="grid-container">
          <div className="grid-item">
            <img src={figure1} alt="Produto: Dashboard de dados eleitorais" />
            <p>Produto: Dashboard de dados eleitorais</p>
          </div>
          <div className="grid-item">
            <a href="https://sigaa.unifei.edu.br/sigaa/expirada.jsp"><img src={figure2} alt="Produto: Bots para pesquisa eleitoral" /></a>
            <p>Produto: Bots para pesquisa eleitoral</p>
          </div>
          <div className="grid-item">
            <img src={figure3} alt="Produto: Apoio na tomada de decisões em campanhas" />
            <p>Produto: Apoio na tomada de decisões em campanhas</p>
          </div>
          <div className="grid-item">
            <img src={figure6} alt="Serviço: Transição de plataforma de BI" />
            <p>Serviço: Transição de plataforma de BI</p>
          </div>
          <div className="grid-item">
            <img src={figure5} alt="Serviço: Consultoria em dados" />
            <p>Serviço: Consultoria em dados</p>
          </div>
          <div className="grid-item">
            <img src={figure4} alt="Serviço: Outros" />
            <p>Serviço: Outros</p>
          </div>
        </div>
        <div className="why-dx">
          <h2>POR QUE DX.?</h2>
          <p>Com a DX. te ajudamos a fazer as melhores perguntas para que você possa tomar as melhores decisões no seu negócio!</p>
          <blockquote>“Não são as respostas que movem o mundo, são as perguntas!”</blockquote>
        </div>
      
      </div>
     
    </div>
    
  );
}

export default App;
