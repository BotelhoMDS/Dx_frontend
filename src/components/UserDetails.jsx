import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
    const location = useLocation();
    const { user } = location.state;

    return (
        <div className="user-details-container">
            <h1>Detalhes do Usuário</h1>
            <p><strong>Nome:</strong> {user.nome}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <p><strong>Dashboard:</strong> {user.dashboard ? 'Sim' : 'Não'}</p>
            <p><strong>Serviços:</strong> {user.servicos ? 'Sim' : 'Não'}</p>
        </div>
    );
};

export default UserDetails;
