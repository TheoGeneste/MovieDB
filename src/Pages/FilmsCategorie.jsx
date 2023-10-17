import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Movies from "../Services/movies";
import Movie from "../Components/Movie";

const FilmsCategorie = () => {
    const {genre} = useParams();
    const [films, setFilms] = useState([]);

    const fetchFilmsByGenre = async () => {
        try {
            const response = await Movies.getMovieByGenre(genre);
            setFilms(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFilmsByGenre()
    }, [])

    return <div className={"d-flex justify-content-center gap-3"}>
        {films.map(f => {
            return <Movie film={f} />
        })}
    </div>;
};

export default FilmsCategorie;