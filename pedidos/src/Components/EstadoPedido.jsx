const cambiarEstado = (id) => {
    setPedidos(pedidos.map(p =>
    p.id === id
        ? { ...p, estado: p.estado === "proceso" ? "hecho" : "proceso" }
        : p
    ));
};

export default cambiarEstado