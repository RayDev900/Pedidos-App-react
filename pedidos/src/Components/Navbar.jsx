import { NavLink ,Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import './navbar.css'

function Navbar(){
  const { toggleTheme, theme } = useContext(ThemeContext);
    return(
      <nav className="navbar">
          <ul className="list-links">
            <li><NavLink to="/" end className="nav-link">Inicio</NavLink></li>
            <li><NavLink to="/pedidos" className="nav-link">Pedidos</NavLink></li>
            <li><NavLink to="/crear-pedido" className="nav-link">Crear pedido</NavLink></li>
          </ul>
        <div className="nav-controls">
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <Link to="/crear-pedido" className="btn-agregar">+</Link>
        </div>
      </nav>
    )
}

export default Navbar