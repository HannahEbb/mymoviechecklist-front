import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import sair from "../../assets/Vector.png"; 
import Film from "./Film";
import { Films } from "../../models/models"
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const Home: React.FC = () => {

    const { nome, token } = useContext(UserContext);
    const [films, setFilms] = useState<Films[]>([]);

    useEffect(() => {
    
        const URL = `${process.env.LINK}/films`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(URL, config);
        promise.then((response) => {
            const dados = response.data.films;
            console.log(response);
            if(dados.length !==0) {
                setFilms([...dados]);
            }
        })

    }, []);


    return (
        <Container>
        <Header>
           <div><h1>Olá, { nome }</h1></div>
           <Link to='/'><div><img src={ sair } width="23px" height="24px"/></div></Link>
        </Header>
        <Films>
            {films.length ? films.map( film => { return <Film key={film.id}
                                                                name={film.name} 
                                                                status={film.status} 
                                                                stars={film.stars}
                                                                genre={film.genre}
                                                                date={film.createdAt}/>})
            : <p>Não há registros de entrada ou saída</p>}
        </Films>
        <Rotas>
            <Link style={{textDecoration: 'none'}} to='/new'>
                <div>
                    <p>Nova entrada</p>
                </div>
            </Link>
        </Rotas>
        </Container>
    )
};

export default Home;


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

const Films = styled.div`
    width: 326px;
    height: 446px;
    background: var(--cor-branco);
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 23px;
    overflow: scroll;
    div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: var(--cor-preto);
    }
   
    h4 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #C6C6C6;
    
       }
    h3 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
       }
       h2 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
       }
       p {
        color: #868686;
        text-size: 20px;
        font-weight: 400;
        text-align: center;
        padding-left: 73px;
        padding-right: 73px;
        padding-top: 180px;
       }
`

const Rotas = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    div {
        width: 155px;
        height: 114px;
        background: var(--cor-roxo-claro);
        color: var(--cor-branco);
        padding-left: 10px;
        padding-top:10px;
        diplay: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 10px;
    }
    p {
        margin-top: 30px;
    }
`