import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Movie = ({film}) => {
    return <>
        <Card className={"col-3"}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+film.poster_path} />
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>
                    {/*{ Object.entries(film).map(([key, value]) => {*/}
                    {/*    return <pre>{key} : {value}</pre>*/}
                    {/*})}*/}
                    {film.overview}
                </Card.Text>
                <Link to={"/film/details"} state={film}><Button variant="info">Voir plus sur {film.title}</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default Movie;