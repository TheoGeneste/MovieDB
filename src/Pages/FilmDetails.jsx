import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import Movies from "../Services/movies";

const FilmDetails = () => {
    const location = useLocation()
    const [film, setFilm] = useState({});

    const fetchMovieById = async () => {
        try {
            const response = await Movies.getMovieById(location.state.id)
            setFilm(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        fetchMovieById()
    }, [])

    return <>
        {/*  typeof film === 'object' => Vérifier que ma constante film est un object */}
        {/*  Object.entries(film).map(([key, value]) => Je vais chercher tout les valeur une par une de mon object film et je boucle dessus  */}
        { typeof film === 'object' && Object.entries(film).map(([key, value]) => {
            //Je vérifie que ma value n'est pas un tableau et n'est de type object
            if (!Array.isArray(value) && typeof value !== 'object'){
                return <pre>{key} : {value}</pre>
            }else if (Array.isArray(value) && typeof value !== 'object'){
                return value.map(v => {
                    return <pre>{key} : {v}</pre>
                })
            }
        })}
    </>;
};

export default FilmDetails;