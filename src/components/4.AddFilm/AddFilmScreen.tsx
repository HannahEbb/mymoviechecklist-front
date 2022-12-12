import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const AddFilmScreen: React.FC = () => {

    const { token } = useContext(UserContext);
    const [name, setName] = useState<string>("");
    const [streaming, setStreaming] = useState<string>("");
    const [genre, setGenre] = useState<string>("");

    const navigate = useNavigate();

    function novaEntrada (event: React.FormEvent) {
        event.preventDefault(); 

        const entrada = {
            name: name,
            streaming:streaming,
            genre: genre
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
       
        const promise = axios.post(`${process.env.LINK}/films`, entrada, config);
        promise.then(res => {
            console.log(res);
            navigate('/home')});
            promise.catch(err => {
               console.log(err);
               alert("Preencha os campos corretamente.")});
       }


    return (
        <Container>
        <Header>
           <h1>Adicionar novo filme</h1>
        </Header>
        <form onSubmit={novaEntrada}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome"></input>
                <input type="text" value={streaming} onChange={e => setStreaming(e.target.value)} placeholder="Streaming"></input>
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Gênero"></input>
                <button type="submit">Salvar novo filme</button>
            </form>
        </Container>
    )
};

export default AddFilmScreen;


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 25px;
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

const Header = styled.div`
    width: 326px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    }
`