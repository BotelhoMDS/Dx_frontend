import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './figure/dxbranco.svg';

const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, senha })
            });

            if (response.ok) {
                const userData = await response.json();
                navigate('/user-details', { state: { user: userData } });
            } else {
                alert('Login ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="logo" className="login-logo" />
                <p>Data Ex Machina simplificando a solução.</p>
                <input type="text" placeholder="Login" className="login-input" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="password" placeholder="Senha" className="login-input" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <div className="login-buttons">
                    <button className="btn btn-light" onClick={handleLogin}>Entrar</button>
                    <button type="button" className="btn btn-light" onClick={() => navigate('/cadastro')}>Cadastrar</button>
                </div>
                <a href="/" className="forgot-password">Esqueci minha senha</a>
            </div>
        </div>
    );
};

export default Login;
