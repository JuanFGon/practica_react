import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import ProductGrid from "./components/ProductGrid";
import CartSummary from "./components/CartSummary";
import CartPanel from "./components/CartPanel";
import Footer from "./components/Footer";
import { obtenerDisponibles } from "./utils/catalogo";

function App() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const [orden, setOrden] = useState("ninguno");
    const [carrito, setCarrito] = useState({});
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/productos")
            .then((res) => {
                if (!res.ok) throw new Error("Error al obtener productos");
                return res.json();
            })
            .then((data) => setProductos(data))
            .catch((err) => setError(err.message))
            .finally(() => setCargando(false));
    }, []);

    const disponibles = obtenerDisponibles(productos);

    const filtrados = disponibles.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const ordenados = [...filtrados].sort((a, b) => {
        if (orden === "menor-mayor") return a.precio - b.precio;
        if (orden === "mayor-menor") return b.precio - a.precio;
        return 0;
    });

    function agregarUnidad(producto) {
        setCarrito((prev) => {
            const cantidadActual = prev[producto.id] || 0;
            if (cantidadActual >= producto.stock) return prev;
            return { ...prev, [producto.id]: cantidadActual + 1 };
        });
    }

    function quitarUnidad(producto) {
        setCarrito((prev) => {
            const cantidadActual = prev[producto.id] || 0;
            if (cantidadActual <= 0) return prev;
            const copia = { ...prev };
            if (cantidadActual === 1) {
                delete copia[producto.id];
            } else {
                copia[producto.id] = cantidadActual - 1;
            }
            return copia;
        });
    }

    function quitarProductoCompleto(producto) {
        setCarrito((prev) => {
            const copia = { ...prev };
            delete copia[producto.id];
            return copia;
        });
    }

    const totalUnidades = Object.values(carrito).reduce((acc, c) => acc + c, 0);

    const totalPrecio = disponibles.reduce((acc, p) => {
        const cantidad = carrito[p.id] || 0;
        return acc + cantidad * p.precio;
    }, 0);

    const itemsCarrito = disponibles
        .filter((p) => (carrito[p.id] || 0) > 0)
        .map((p) => ({
            ...p,
            cantidad: carrito[p.id],
            subtotal: carrito[p.id] * p.precio,
        }));

    return (
        <>
            <Header
                totalUnidades={totalUnidades}
                onAbrirCarrito={() => setCarritoAbierto(true)}
            />
            <main>
                <Hero />
                <div className="controles">
                    <SearchBar value={busqueda} onChange={setBusqueda} />
                    <SortSelect value={orden} onChange={setOrden} />
                </div>
                <section id="productos" className="productos">
                    <h2>Nuestros Productos</h2>
                    {cargando && <p>Cargando productos...</p>}
                    {error && <p>Ocurrió un error: {error}</p>}
                    {!cargando && !error && (
                        <ProductGrid
                            productos={ordenados}
                            carrito={carrito}
                            onAgregar={agregarUnidad}
                            onQuitar={quitarUnidad}
                        />
                    )}
                </section>
            </main>
            <Footer />
            <CartSummary
                totalUnidades={totalUnidades}
                totalPrecio={totalPrecio}
                onAbrir={() => setCarritoAbierto(true)}
            />
            <CartPanel
                abierto={carritoAbierto}
                items={itemsCarrito}
                totalPrecio={totalPrecio}
                onCerrar={() => setCarritoAbierto(false)}
                onAgregar={agregarUnidad}
                onQuitar={quitarUnidad}
                onQuitarProducto={quitarProductoCompleto}
            />
        </>
    );
}

export default App;