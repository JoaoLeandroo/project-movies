import { Link } from "react-router-dom";
import "../Header/header.css";

export default function Header() {
    return(
        <header>
            <Link className="logo" to="/">JL Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}