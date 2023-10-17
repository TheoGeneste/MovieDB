import axios from "axios";

function getGenres(){
    return axios.get("https://api.themoviedb.org/3/genre/movie/list")
}

export default {
    getGenres
}