import axios from "axios";
// Base da URL: https://api.themoviedb.org/3
// URL da API: /movie/now_playing?api_key=da359e5e2f2da6874a02ea83beb3b3cf&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;