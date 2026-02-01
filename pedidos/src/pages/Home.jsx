import tienda from '../assets/tienda.png'
import listo from '../assets/listo.png'
import proceso from '../assets/proceso.png'
import './home.css'
import { Link } from 'react-router-dom'

function Home({pedidos}){
    const totalPedidos = pedidos.length
    const pedidoHecho =  pedidos.filter((p) => p.estado === "hecho").length
    const pedidoProceso = pedidos.filter((p) => p.estado === "proceso").length
    const ultimosPedidos = pedidos.slice(-3)
    

return<>
<div className="home-header">
  <div className="home-text">
    <h1>¡Bienvenido a tu app de pedidos!</h1>
      <p>Gestiona tus pedidos en tiempo real de forma simple y rápida.</p>
      <Link to="/crear-pedido" className="btn-primary">Crear pedido</Link>
  </div>
</div>
<div className="container">
  <div className="pedido-card total">
    <img src={tienda} alt="Tienda" className="img-card" />
    <h4 className="title">{totalPedidos}</h4>
    <h3 className="title-pedidos">Pedidos Totales</h3>
  </div>

  <div className="pedido-card listo">
    <img src={listo} alt="" className="img-card" />
    <h4 className="title">{pedidoHecho}</h4>
    <h3 className="title-pedidos">Pedidos Listos</h3>
  </div>

  <div className="pedido-card proceso">
    <img src={proceso} alt="" className="img-card" />
    <h4 className="title">{pedidoProceso}</h4>
    <h3 className="title-pedidos">Pedidos En Proceso</h3>
  </div>
</div>

<div className="container-ultimos">
    <h2 className="title-home">Últimos pedidos</h2>
    <div className="lista-pedidos">
        {ultimosPedidos.map((pedido) => (
        <div className="pedido-card" key={pedido.id}>
            <div className="pedido-header">
                <h3>{pedido.cliente}</h3>
                <span className={`estado ${pedido.estado.toLowerCase()}`}>{pedido.estado}</span>
            </div>
        <p className="pedido-orden">{pedido.orden}</p>
        </div>
))}
    </div>
</div>
</>
}

export default Home