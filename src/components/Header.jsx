import "../styles/Header.css";

function Header({ totalUnidades = 0, onAbrirCarrito }) {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/Imagenes/Logo-mercadolibre.png" alt="Mercado Libre" />
                </div>
                <ul>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <button
                    type="button"
                    className="btn-carrito"
                    onClick={onAbrirCarrito}
                    aria-label="Abrir carrito de compra"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalUnidades > 0 && (
                        <span className="contador-carrito">{totalUnidades}</span>
                    )}
                </button>
            </nav>
        </header>
    );
}

export default Header;