import React from 'react'
import './Produto.css'
import figure3 from './figure/3.png';
import figure2 from './figure/2.png';
import figure1 from './figure/1.png';

export default function Produto() 
{
 return (
    <div className="App">
      <div className="top-section">
        <h1>Dashboard de dados Eleitorais</h1>
        <div className='descriptiontop'>
        </div>
        <div className="details">
          <div className="info">
              <p>2023</p>
              <p>Dados à parte</p>
              <p>Acesso imediato</p>
              <div className="price">
                <p>R$ 2.500 /Mês</p>
              </div>
          </div>
          <p className="description">
            Um Dashboard para tornar mais fácil a visualização e compreensão de dados coletados para pesquisas eleitorais. Os dados levam em consideração pesquisa sobre o candidato, dados demográficos sobre a cidade. Além do uso de I.A. para oferecer insights sobre possíveis tomadas de decisões com base nas análises.
          </p>
        </div>
      </div>
      <div class="carousel-container">
        <div class="carousel slide" id="carouselExample">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" aria-label="Slide 1" aria-current="false"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true" class="active"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3" aria-current="false"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={figure3} alt="Imagem 1" />
            </div>
            <div class="carousel-item">
              <img src={figure2} alt="Imagem 2" />
            </div>
            <div class="carousel-item">
              <img src={figure1} alt="Imagem 3" />
            </div>
          </div>
          <a class="carousel-control-prev" role="button" tabindex="0" href="#carouselExample" data-bs-slide="prev">
            <span aria-hidden="true" class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" role="button" tabindex="0" href="#carouselExample" data-bs-slide="next">
            <span aria-hidden="true" class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

