
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Quemsomos.css'; // Certifique-se de que os estilos personalizados estão sendo importados

import logo from './figure/dxbranco.svg'; // Caminho relativo correto
import imgQuemSomos from './figure/dx_nos.png'; // Caminho relativo correto


const QuemSomos = () => {
  const [activeSection, setActiveSection] = useState('Dados');
  
  // Dados dos cards
  const teams = {
    Dados: [
      { name: 'Ana Silva', description: 'Especialista em banco de dados e análise de dados.', image: './figure/LogoDX.png' },
      { name: 'Carlos Oliveira', description: 'Engenheiro de dados, responsável pela integração e processamento de grandes volumes de dados.', image: './figure/LogoDX.png' },
      { name: 'Beatriz Santos', description: 'Analista de dados, encarregada da visualização e interpretação de dados para relatórios e insights.', image: './figure/LogoDX.png' }
    ],
    'Engenheiros de Software': [
      { name: 'Pedro Almeida', description: 'Engenheiro de software sênior, focado no desenvolvimento de aplicações e sistemas complexos.', image: './figure/LogoDX.png' },
      { name: 'Laura Costa', description: 'Desenvolvedora de front-end, responsável pela criação de interfaces de usuário e experiência do usuário.', image: './figure/LogoDX.png' },
      { name: 'Ricardo Lima', description: 'Desenvolvedor de back-end, especializado em criação de APIs e lógica de negócios.', image: './figure/LogoDX.png' }
    ],
    Vendas: [
      { name: 'Mariana Gomes', description: 'Coordenadora de vendas, responsável pela estratégia de vendas e gestão da equipe de vendas.', image: './figure/LogoDX.png' },
      { name: 'Roberto Pereira', description: 'Especialista em CRM, encarregado de otimizar o relacionamento com clientes e processos de vendas.', image: './figure/LogoDX.png' },
      { name: 'Juliana Martins', description: 'Analista de vendas, responsável por dados de vendas, relatórios e análise de mercado.', image: './figure/LogoDX.png' }
    ]
  };
  
  return (
    <div>
      <div className="image-container">
        <img
          src={imgQuemSomos}
          alt="Quem Somos"
          className="img-fullscreen-width"
        />
        <div className="text-overlay">
          SOLUÇÕES PARA OS MAIS DIFERENTES PROBLEMAS
        </div>
      </div>
      <div className="content-section">
        <h2>Deus Ex Machina.</h2>
        <div className="text-container">
          <div className='Text1'>
            <p>Deus ex machina, expressão em latim que significa literalmente "deus surgiu da máquina", utilizada para indicar uma solução inesperada/mirabolante (magicamente providenciada por uma divindade) para terminar uma obra ficcional. Um termo que surgiu no teatro greco. Quando um grupo de amigos formados em engenharia se juntam para resolver os mais diversos problemas com o foco de tornar mágico o processo de lidar com os mais diversos problemas. Assim nasce a DX. com a missão de descomplicar e tornar por meio dos dados a vida dos nossos clientes.</p>
          </div>
          <div className='Text2'>
            <p>A arte e os dados, a abstração e a materialidade, conceitos que parecem distantes se unem para permitir simplificar o mundo e buscar os melhores resultados. Em um mundo de bilhões de dados e informações, muitas vezes ser data driven se torna muito complicado na rotina, para isto estamos aqui, com o compromisso de tornar toda a experiência intuitiva.</p>
          </div>
        </div>
        <div className='team-section'>
          <h2>Nosso Time</h2>
          <div className="section-nav">
            {Object.keys(teams).map((section) => (
              <h1
                key={section}
                className={`nav-button ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </h1>
            ))}
          </div>
          <div className="carousel-container">
            <Carousel>
              {teams[activeSection].map((member, index) => (
                <Carousel.Item key={index}>
                  <img
                    className='logo'
                    src={logo}
                    alt={member.name}
                  />
                  <Carousel.Caption>
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
