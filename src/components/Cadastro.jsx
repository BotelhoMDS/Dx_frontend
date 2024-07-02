import React from 'react';
import './Cadastro.css';
import logo from './figure/dxbranco.svg'; // Caminho correto para o logo

export default function Cadastro() {
    return (
        <div className="cadastro-container">
            <h1>Seja bem-vinda(o) a Dx.!</h1>
            <div className="form-container">
                <img src={logo} alt="DX logo" className="form-logo" />
                <form>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="text" placeholder="CPF" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <div className="buttons">
                        <button type="submit" className="btn btn-light">Enviar</button>
                        <button type="button" className="btn btn-light" onClick={() => window.location.href = "/login"}>Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
