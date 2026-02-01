import { useState } from 'react'
import Pedidos from "./pages/Pedidos.jsx"
import './App.css'
import Home from "../src/pages/Home.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import CrearPedido from './pages/CrearPedido.jsx'
import DetallePedido from './pages/DetallePedido.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [pedidos,  setPedidos] = useState([
    {id:1,cliente: "juanito08", estado: "proceso", orden: "Iphon 17 pro max"},
    {id:2,cliente: "juanito09", estado: "hecho", orden: "Iphon 11 pro max"}
  ])

const cambiarEstado = (id) => {
  setPedidos((prevPedidos) =>
    prevPedidos.map((p) =>
      p.id === id
        ? {
            ...p,
            estado: p.estado === "proceso" ? "hecho" : "proceso",
          }
        : p
    )
  );
};

const crearPedido = (pedido) => {
  setPedidos([...pedidos, pedido])
}

const eliminarPedido = (id) => {
  setPedidos(prev => prev.filter(p => p.id !== id))
}


  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home pedidos={pedidos}/>}/>
      <Route path="/pedidos" element={<Pedidos pedidos={pedidos} cambiarEstado={cambiarEstado}/>}/>
      <Route path="/pedidos/:id" element={<DetallePedido  pedidos={pedidos} eliminarPedido={eliminarPedido}/>}/>
      <Route path='/crear-pedido' element={<CrearPedido crearPedido={crearPedido}/>}/>
      <Route path='/crear-pedido' element={<CrearPedido crearPedido={crearPedido}/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
