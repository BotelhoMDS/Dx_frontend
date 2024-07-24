import React, { useState } from 'react';
import './Cadastro.css';
import logo from './figure/dxbranco.svg'; 

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (senha !== confirmSenha) {
            alert("As senhas não coincidem");
            return;
        }
        const newUser = { nome, cpf, email, senha };
        try {
            console.log(`cadastro em http://${process.env.REACT_APP_API_URL}/usuarios `)
            const response = await fetch(`http://${process.env.REACT_APP_API_URL}/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = "/login";
            } else {
                alert("Erro ao cadastrar usuário");
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
        }
    };

    return (
        <div className="cadastro-container">
            <h1>Seja bem-vinda(o) a Dx.!</h1>
            <div className="form-container">
                <img src={logo} alt="DX logo" className="form-logo" />
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <input type="password" placeholder="Confirmar Senha" value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} required />
                  
                    <div className="buttons">
                        <button type="submit" className="btn btn-light">Enviar</button>
                        <button type="button" className="btn btn-light" onClick={() => window.location.href = "/login"}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
