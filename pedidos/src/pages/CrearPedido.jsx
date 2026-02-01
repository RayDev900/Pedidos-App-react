import { useState } from "react";
import "./crearPedido.css"

function CrearPedido({crearPedido}){
    const [cliente, setCliente] = useState("")
    const [orden, setOrden] = useState("")
    const [mensaje, setMensaje] = useState("")

    const enviarF = (e) => {
        e.preventDefault();
        console.log(cliente,orden)
        

        const nuevoPedido = {
            id: Date.now(),
            cliente: cliente,
            orden:orden,
            estado:"proceso"
        }

        crearPedido(nuevoPedido)
        setMensaje("Pedido creado correctamente")
        setCliente("")
        setOrden("")

        setTimeout(()=>{
            setMensaje("")
        }, 3000)
    }

    return<>
    <div className="form-container">
      <h1>Crear pedido</h1>
      <p>Completa los datos del nuevo pedido</p>
      {mensaje && <p className="toast-success">{mensaje}</p>}
      <form className="pedido-form" onSubmit={enviarF}>
        
        <div className="form-group">
          <label>Cliente</label>
          <input
            type="text"
            placeholder="Nombre del cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Orden</label>
          <input
            type="text"
            placeholder="Ej: iPhone 13 Pro"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Crear pedido
        </button>

      </form>
    </div>
    </>

}

export default CrearPedido