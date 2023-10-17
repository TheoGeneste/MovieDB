import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Movies from "../Services/movies";

const FilmDetailsWithParams = () => {
    const {id} = useParams();
    const [film, setFilm] = useState({});

    const fetchMovieById = async () => {
        try {
            const response = await Movies.getMovieById(id);
            setFilm(response.data)
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMovieById();
    }, [])

    return <>
        <h1 className={"text-center"}>{film.title}</h1>
        <h3 className={"text-center"}>{film.original_title}</h3>
    </>;
};

export default FilmDetailsWithParams;