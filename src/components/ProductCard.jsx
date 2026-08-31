import "../styles/ProductCard.css";

function ProductCard({
                         nombre,
                         precio,
                         stock,
                         imagen,
                         cantidadEnCarrito = 0,
                         onAgregar,
                         onQuitar,
                     }) {
    const imagenFinal = imagen
        ? `/Imagenes/${imagen}`
        : `https://placehold.co/300x200?text=${encodeURIComponent(nombre)}`;

    const seleccionado = cantidadEnCarrito > 0;
    const stockAgotadoEnCarrito = cantidadEnCarrito >= stock;

    return (
        <article className={`card-producto${seleccionado ? " seleccionado" : ""}`}>
            <img src={imagenFinal} alt={nombre} className="imagen-producto" />
            <h3>{nombre}</h3>
            <p className="precio">${precio}</p>
            <p className="stock">Stock disponible: {stock} unidades</p>

            <div className="selector-cantidad">
                <button
                    type="button"
                    className="btn-cantidad"
                    onClick={onQuitar}
                    disabled={cantidadEnCarrito === 0}
                    aria-label={`Quitar una unidad de ${nombre}`}
                >
                    −
                </button>
                <span className="cantidad-valor" aria-live="polite">
                    {cantidadEnCarrito}
                </span>
                <button
                    type="button"
                    className="btn-cantidad"
                    onClick={onAgregar}
                    disabled={stockAgotadoEnCarrito}
                    aria-label={`Agregar una unidad de ${nombre}`}
                >
                    +
                </button>
            </div>

            {seleccionado && (
                <p className="etiqueta-seleccionado">
                    {cantidadEnCarrito} en tu compra · ${(precio * cantidadEnCarrito).toFixed(2)}
                </p>
            )}
        </article>
    );
}

export default ProductCard;