import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Favoritos/favoritos.css'
import { toast } from 'react-toastify'

export default function Favoritos() {

    const [filme, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")

        setFilmes(JSON.parse(minhaLista) || [])


    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filme.filter( (item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme Removido com Sucesso!")
    }

    return(
        <div className='meus-filmes'>
                <h2>MEUS FILMES</h2>

                {filme.length === 0 && <span className='span-no-movies'>Você não tem nenhum Filmes Salvo!</span>}
                <ul>
                    {filme.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <div className='area-details'>
                                    <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                    <button onClick={ () => excluirFilme(item.id) }>Excluir</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

