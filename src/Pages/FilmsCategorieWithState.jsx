import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import Movies from "../Services/movies";
import Movie from "../Components/Movie";

const FilmsCategorieWithState = () => {
    const location = useLocation()
    const [films, setFilms] = useState([]);

    const fetchFilmsByGenre = async () => {
        try {
            const response = await Movies.getMovieByGenre(location.state.id);
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

export default FilmsCategorieWithState;