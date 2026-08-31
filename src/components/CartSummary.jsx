import "../styles/CartSummary.css";

function CartSummary({ totalUnidades, totalPrecio, onAbrir }) {
    if (totalUnidades === 0) {
        return null;
    }

    return (
        <button type="button" className="resumen-compra" onClick={onAbrir}>
            <span>
                {totalUnidades} {totalUnidades === 1 ? "unidad seleccionada" : "unidades seleccionadas"}
            </span>
            <span className="resumen-total">Total: ${totalPrecio.toFixed(2)}</span>
            <span className="resumen-ver">Ver carrito ›</span>
        </button>
    );
}

export default CartSummary;
