import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { obtenerDisponibles } from "./utils/catalogo";

function App() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const [orden, setOrden] = useState("ninguno");

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

    return (
        <>
            <Header />
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
                    {!cargando && !error && <ProductGrid productos={ordenados} />}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;