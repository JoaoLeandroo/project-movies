import { useEffect, useState } from "react"
import api from "../../services/api"

// // URL da API: /movie/now_playing?api_key=da359e5e2f2da6874a02ea83beb3b3cf&language=pt-BR

export default function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'da359e5e2f2da6874a02ea83beb3b3cf',
                    language: 'pt-BR',
                    pages: 1,
                }
            })

            console.log(response.data.results[4].title)
        }

        loadFilmes()

    }, [])
    return(
        <h1>my home</h1>
    )
}