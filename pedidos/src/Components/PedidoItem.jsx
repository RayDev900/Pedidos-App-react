import { Link } from "react-router-dom";
import "./pedidoItem.css";

const PedidoItem = ({ pedido, cambiarEstado }) => {
return (
<div className="pedido-item">
  <div className="pedido-info">
    <h3>{pedido.cliente}</h3>
    <p>{pedido.orden}</p>
  </div>

  <div className="pedido-actions">
    <span className={`estado ${pedido.estado}`}>
      {pedido.estado}
    </span>
    <button className="btn-estado"
    onClick={() => cambiarEstado(pedido.id)}>
      Cambiar estado
    </button>
  </div>
</div>

);
};

export default PedidoItem;
