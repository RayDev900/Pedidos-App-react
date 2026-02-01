import PedidoItem from "../Components/PedidoItem.jsx"
import "./pedidos.css"


const Pedidos = ({pedidos,  cambiarEstado}) => {
    if(pedidos.length === 0){
        return <p>No hay pedidos</p>
    }

return<>
<div className="pedidos-header">
    <h1>Pedidos</h1>
    <p>Listado y gestión de pedidos</p>
  </div>

  <div className="container-pedidos">
    {pedidos.map((pedido) => (
      <PedidoItem
        key={pedido.id}
        pedido={pedido}
        cambiarEstado={cambiarEstado}
      />
    ))}
</div>
    </>
}

export default Pedidos