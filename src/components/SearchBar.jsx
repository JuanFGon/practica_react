import "../styles/SearchBar.css";

function SearchBar({ value, onChange }) {
    return (
        <div className="buscador">
            <input
                type="text"
                placeholder="Buscar producto..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-buscador"
                aria-label="Buscar producto"
            />
        </div>
    );
}

export default SearchBar;