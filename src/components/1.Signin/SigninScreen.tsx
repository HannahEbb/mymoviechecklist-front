import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';


export default function SigninScreen () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setToken, setNome  } = useContext(UserContext);

     const navigate = useNavigate();

     function fazerLogin (event) {
         event.preventDefault(); 

         const login = {
             email: email,
             password: senha
         }
        
         const promise = axios.post('https://proejto13-my-wallet-back.herokuapp.com/login', login);
         promise.then(res => {
             setToken(res.data.token);
             setNome(res.data.nome);
             console.log(res.data);
             navigate('/home')});
             promise.catch(err => {
                console.log(err);
                alert("Dados incorretos! Preencha os campos novamente ou cadastre-se primeiro.")});
        }


    return (
        <Container>
            <h1>MyMovieCheckList</h1>
            <form onSubmit={fazerLogin}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"></input>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"></input>
                <button type="submit">Entrar</button>
            </form>
            <div>
                <Link style={{textDecoration: 'none'}} to="/sign-up">
                    <h2>Não possui uma conta? Cadastre-se</h2>
                </Link>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 159px;
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
        font-size: 15px;
        font-weight: 700;
    }
    
`