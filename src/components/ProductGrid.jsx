import "../styles/ProductGrid.css";
import ProductCard from "./ProductCard";

function ProductGrid({ productos, carrito, onAgregar, onQuitar }) {
    if (productos.length === 0) {
        return <p className="sin-resultados">No se encontraron productos.</p>;
    }

    return (
        <div className="grid-productos">
            {productos.map((p) => (
                <ProductCard
                    key={p.id}
                    {...p}
                    cantidadEnCarrito={carrito[p.id] || 0}
                    onAgregar={() => onAgregar(p)}
                    onQuitar={() => onQuitar(p)}
                />
            ))}
        </div>
    );
}

export default ProductGrid;