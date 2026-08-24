import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { productos } from "./data/productos";
import { obtenerDisponibles } from "./utils/catalogo";

function App() {
    const disponibles = obtenerDisponibles(productos);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <section id="productos" className="productos">
                    <h2>Nuestros Productos</h2>
                    <ProductGrid productos={disponibles} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;