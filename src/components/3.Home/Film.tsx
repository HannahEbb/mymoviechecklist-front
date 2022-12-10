import React from 'react';
import { Films } from "../../models/models"

interface Props {
    name: string,
    status: boolean,
    stars: number,
    genre: string,
    date: string
}


export default function Film ({ name, status, stars, genre, date} : Props) {

    return(
        <div>
            <h4>{date}</h4> <h3>{name}</h3><h2 style={{ color: status===true ?  '#03AC00' : '#C70000'}}>Stars: { stars }</h2>
        </div>
    );
}