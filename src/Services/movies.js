import axios from "axios";

function getMovies(){
    return axios.get("https://api.themoviedb.org/3/discover/movie?language=fr")
}

function getMovieById(id){
    return axios.get("https://api.themoviedb.org/3/movie/"+id+"?language=fr")
}

function getMovieByGenre(genre){
    return axios.get("https://api.themoviedb.org/3/discover/movie?with_genres="+genre+"&language=fr")
}

export default {
    getMovies,
    getMovieById,
    getMovieByGenre
}