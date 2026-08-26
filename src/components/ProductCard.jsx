import "../styles/ProductCard.css";

function ProductCard({ nombre, precio, stock, imagen }) {
    const imagenFinal = imagen
        ? `/Imagenes/${imagen}`
        : `https://placehold.co/300x200?text=${encodeURIComponent(nombre)}`;

    return (
        <article className="card-producto">
            <img src={imagenFinal} alt={nombre} className="imagen-producto" />
            <h3>{nombre}</h3>
            <p className="precio">${precio}</p>
            <p className="stock">Stock disponible: {stock} unidades</p>
        </article>
    );
}

export default ProductCard;