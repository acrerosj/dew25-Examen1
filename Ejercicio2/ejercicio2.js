function filtrarPorCategoria(productos, categoria) {
    return productos.filter(producto => producto.categoria == categoria);
}

console.log("Electrónica: ", filtrarPorCategoria(INVENTARIO, "Electrónica"));
console.log("Hogar", filtrarPorCategoria(INVENTARIO, "Hogar"));

function obtenerNombresDeProductos(productos) {
    return productos.map(producto => producto.nombre);
}

console.log("Nombres de productos: ", obtenerNombresDeProductos(INVENTARIO));

function calcularValorTotalInventario(productos) {
    return productos.reduce( (total, producto) => total + (producto.stock * producto.precio), 0);
}

console.log("Valor total inventario: ", calcularValorTotalInventario(INVENTARIO));

function filtrarPorEtiquetas(productos, ...etiquetas) {
    return productos.filter( producto =>
        etiquetas.every(tag => producto.tags.includes(tag))
    );
}

console.log("oficina: ", filtrarPorEtiquetas(INVENTARIO, "oficina"));
console.log("oficina, ergonómico: ", filtrarPorEtiquetas(INVENTARIO, "oficina", "ergonómico"));
console.log("oficina, ergonómico, monitor: ", filtrarPorEtiquetas(INVENTARIO, "oficina", "ergonómico", "monitor"));
console.log("sin etiquetas: ", filtrarPorEtiquetas(INVENTARIO));