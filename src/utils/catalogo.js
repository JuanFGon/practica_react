export function obtenerDisponibles(lista) {
    return lista.filter((p) => p.stock > 0);
}