import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            {/* Exemplo uso Link: */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
            {/* NavLink: */}
            <NavLink 
            to="/"
            // Exemplo de manipulação do isActive:
            // className={({isActive}) => (isActive ? 'Está ativo' : 'Não está ativo ')}
            >Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar