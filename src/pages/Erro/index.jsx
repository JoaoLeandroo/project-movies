import { Link } from "react-router-dom"
import '../Erro/erro.css'

export default function Erro() {
    return(
        <div className="not-found">
            <h2>404</h2>
            <h3>Página não encontrada</h3>

            <Link to="/">Retorne a Home</Link>
        </div>
    )
}