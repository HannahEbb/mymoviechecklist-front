interface Props {
    name: string,
    status: boolean,
    stars: number,
    genre: string,
    date: string
}

const Film: React.FC<Props> = ({ name, status, stars, genre, date} : Props) => {

    return(
        <div>
            <h4>{date}</h4> <h3>{name}</h3><h2 style={{ color: status===true ?  '#03AC00' : '#C70000'}}>Stars: { stars }</h2>
        </div>
    );
};

export default Film;