import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import '../../index.css'
import '../Home/home.css'
// // URL da API: /movie/now_playing?api_key=da359e5e2f2da6874a02ea83beb3b3cf&language=pt-BR

export default function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'da359e5e2f2da6874a02ea83beb3b3cf',
                    language: 'pt-BR',
                    pages: 1,
                }
            })

            // se quiser trazer apenas uma certa quantidade de filmes é so utilizar o slice
            // ex: setFilmes(response.data.results.slice(0, 10))
            
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes()

    }, [])


    if(loading) {
        return(
            <span className="loader"></span>
        )
    }else{
        return(
            <div className="container">
                <div className="list-movies">
                    {filmes.map((filme) => {
                        return(
                            <article key={filme.id}>
                                <strong>{filme.title.toUpperCase()}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )

    }
}