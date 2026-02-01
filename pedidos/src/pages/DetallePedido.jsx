import { useNavigate, useParams} from 'react-router-dom'



function DetallePedido({pedidos, eliminarPedido}){
    const {id} = useParams()
    const navegacion = useNavigate()

    const pedido = pedidos.find((p) =>  p.id === Number(id))


    if(!pedido){
        return(
            <h2>Pedido no encontrado</h2>
        )
    }

    const handleEliminar = () => {
    eliminarPedido(Number(pedido.id))
    navegacion("/pedidos")
}

return (
    <>
    <div>
        <h1>Detalle del pedido</h1>
        <p><strong>Cliente:</strong> {pedido.cliente}</p>
        <p><strong>Orden:</strong> {pedido.orden}</p>
        <p><strong>Estado:</strong> {pedido.estado}</p>
        <button onClick={() => navegacion(-1)}>Volver</button>
        <button onClick={handleEliminar}>Eliminar</button>
    </div>
    </>
)
}

export default DetallePedido