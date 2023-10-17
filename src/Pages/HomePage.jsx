import React, {useEffect, useState} from 'react';
import Movies from "../Services/movies";
import Movie from "../Components/Movie";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await Movies.getMovies();
            setMovies(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, []);

    return <div className={"d-flex justify-content-center gap-2"}>
        {movies.map(m =>{
            return <Movie film={m}/>
        })}
    </div>;
};

export default HomePage;