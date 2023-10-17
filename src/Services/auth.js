import axios from "axios";

function setup(){
    axios.defaults.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bbRqDZ4-QbkRCEZD7I5x83E7Gm_zoRFdhvW0xUbN8k";
}

export default {
    setup
}