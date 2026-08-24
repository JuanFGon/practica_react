import ProductCard from "./ProductCard";

function ProductGrid({ productos }) {
    return (
        <div className="grid-productos">
            {productos.map((p) => (
                <ProductCard key={p.nombre} {...p} />
            ))}
        </div>
    );
}

export default ProductGrid;