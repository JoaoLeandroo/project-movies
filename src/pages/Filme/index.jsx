import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api"
import '../../index.css'
import '../Filme/filme.css'

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigation = useNavigate()

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'da359e5e2f2da6874a02ea83beb3b3cf',
                    language: 'pt-BR',
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log('filme nao encontrado')
                navigation('/', { replace: true })
                return
            })
        }

        loadFilme()

        return () => {
            
        }

    }, [navigation, id])

    function saveFilme() {
        const minhaLista = localStorage.getItem("@primeflix")
        
        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilme) {
            alert("ESSE FILME JA ESTA NA LISTA")
            return
        }
        
        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        alert("Filme salvo com sucesso!")
    }


    if(loading) {
        return(
            <span className="loader"></span>
        )
    }
    
    return(
        <div className="selected-movie" key={filme.id}>
        <h2>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        <p>
            {filme.overview}
        </p>
        <div className="area-buttons">
            <button onClick={saveFilme}>Salvar</button>
            <button><a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="blank" rel="external">Trailer</a></button>
        </div>
    </div>
    )
}