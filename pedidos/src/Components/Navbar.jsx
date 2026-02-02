import { NavLink ,Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import './navbar.css'
import { useState } from "react";

function Navbar(){
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false)
  
    return(
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setMenu(!menu)}>☰</button>
          <ul className={`list-links ${menu ? "open" : ""}`}>
            <li><NavLink to="/" end className="nav-link" onClick={() => setMenu(false)}>Inicio</NavLink></li>
            <li><NavLink to="/pedidos" className="nav-link" onClick={() => setMenu(false)}>Pedidos</NavLink></li>
            <li><NavLink to="/crear-pedido" className="nav-link" onClick={()=> setMenu(false)}>Crear pedido</NavLink></li>
            <li className="mobile-actions">
              <button className="btn-theme" onClick={toggleTheme}>
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <Link to="/crear-pedido" className="btn-agregar">+</Link>
            </li>
          </ul>
        <div className="desktop-actions">
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <Link to="/crear-pedido" className="btn-agregar">+</Link>
        </div>
      </nav>
    )
}

export default Navbar