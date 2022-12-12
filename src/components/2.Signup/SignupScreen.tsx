import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const SignupScreen: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const navigate = useNavigate();


     function fazerCadastro (event: React.FormEvent) {
         event.preventDefault();
        
         const signup = {
             name: name,
             email: email,
             password: senha,
             confirm: confirmaSenha
         }
        
         const promise = axios.post(`${process.env.LINK}/signup`, signup);
            promise.then(res => {
                console.log(res.data);
                navigate('/')}); 
            promise.catch(err => {
                console.log(err);
                alert("Preencha os dados corretamente, por favor.");
            });
        }

    return (
        <Container>
        <h1>MyWallet</h1>
        <form onSubmit={fazerCadastro}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome"></input>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"></input>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"></input>
            <input type="password" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} placeholder="Confirme a senha"></input>
            <button type="submit">Cadastrar</button>
        </form>
        <div>
            <Link style={{textDecoration: 'none'}} to="/">
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </div>
    </Container>
    );
}

export default SignupScreen;


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 140px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        margin-bottom: 28px;
    
       }
    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 8px;
        background-color: var(--cor-branco);
        margin-bottom: 16px;
        font-size: 20px;
            font-weight: 400;
            color: var(--cor-preto);
        padding-left: 14px;
        ::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: var(--cor-preto);
        }
    }
    button {
        width: 100%;
        height: 52px;
        background-color: var(--cor-roxo-claro);
        font-size: 20px;
        font-weight: 700;
        color: var(--cor-branco);
        border: none;
        border-radius: 8px;
        margin-bottom: 24px;
    }
    h2 {
        color: var(--cor-branco);
    }
    
`