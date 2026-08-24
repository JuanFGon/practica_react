import "../styles/Header.css";

function Header() {
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
            </nav>
        </header>
    );
}

export default Header;