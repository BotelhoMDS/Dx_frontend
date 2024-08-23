import React, { useState } from 'react';
import './Profile.css';

function ProfilePage() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Conta':
        return <h1>Conteúdo da Conta</h1>;
      case 'Serviços':
        return <h1>Conteúdo dos Serviços</h1>;
      case 'Produtos':
        return <h1>Conteúdo dos Produtos</h1>;
      default:
        return <h1>Conteudo Inicial</h1>;
    }
  };

  return (
    <div className="black-background-page">
      <div className="left-side">
        <div className="profile-circle">
          <img src="/path/to/profile-image.jpg" alt="Profile" className="profile-image" />
        </div>
        <div className="options">
          <div
            className={`option ${selectedOption === 'Conta' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Conta')}
          >
            Conta
          </div>
          <div
            className={`option ${selectedOption === 'Serviços' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Serviços')}
          >
            Serviços
          </div>
          <div
            className={`option ${selectedOption === 'Produtos' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Produtos')}
          >
            Produtos
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default ProfilePage;
