function SortSelect({ value, onChange }) {
    return (
        <select
            className="select-orden"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="ninguno">Ordenar por...</option>
            <option value="menor-mayor">Precio: menor a mayor</option>
            <option value="mayor-menor">Precio: mayor a menor</option>
        </select>
    );
}

export default SortSelect;