import "../styles/CartPanel.css";

function CartPanel({
    abierto,
    items,
    totalPrecio,
    onCerrar,
    onAgregar,
    onQuitar,
    onQuitarProducto,
}) {
    if (!abierto) {
        return null;
    }

    return (
        <div className="carrito-overlay" onClick={onCerrar}>
            <aside
                className="carrito-panel"
                onClick={(e) => e.stopPropagation()}
                aria-label="Carrito de compra"
            >
                <div className="carrito-header">
                    <h2>Carrito de compra</h2>
                    <button
                        type="button"
                        className="btn-cerrar-carrito"
                        onClick={onCerrar}
                        aria-label="Cerrar carrito"
                    >
                        ✕
                    </button>
                </div>

                {items.length === 0 ? (
                    <p className="carrito-vacio">Todavía no agregaste productos.</p>
                ) : (
                    <>
                        <ul className="carrito-lista">
                            {items.map((item) => (
                                <li key={item.id} className="carrito-item">
                                    <img
                                        src={
                                            item.imagen
                                                ? `/Imagenes/${item.imagen}`
                                                : `https://placehold.co/80x80?text=${encodeURIComponent(item.nombre)}`
                                        }
                                        alt={item.nombre}
                                        className="carrito-item-imagen"
                                    />
                                    <div className="carrito-item-info">
                                        <p className="carrito-item-nombre">{item.nombre}</p>
                                        <p className="carrito-item-precio">${item.precio} c/u</p>

                                        <div className="carrito-item-controles">
                                            <button
                                                type="button"
                                                className="btn-cantidad"
                                                onClick={() => onQuitar(item)}
                                                aria-label={`Quitar una unidad de ${item.nombre}`}
                                            >
                                                −
                                            </button>
                                            <span className="cantidad-valor">{item.cantidad}</span>
                                            <button
                                                type="button"
                                                className="btn-cantidad"
                                                onClick={() => onAgregar(item)}
                                                disabled={item.cantidad >= item.stock}
                                                aria-label={`Agregar una unidad de ${item.nombre}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="carrito-item-derecha">
                                        <p className="carrito-item-subtotal">
                                            ${item.subtotal.toFixed(2)}
                                        </p>
                                        <button
                                            type="button"
                                            className="btn-quitar-producto"
                                            onClick={() => onQuitarProducto(item)}
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="carrito-total">
                            <span>Total</span>
                            <span className="carrito-total-valor">${totalPrecio.toFixed(2)}</span>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}

export default CartPanel;
