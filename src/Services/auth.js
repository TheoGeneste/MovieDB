import axios from "axios";

function setup(){
    axios.defaults.headers['Authorization'] = "Bearer ";
}

export default {
    setup
}
