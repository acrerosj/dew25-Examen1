const divCatalogo = document.getElementById('catalogo');
const selectFiltro = document.querySelector('#filtro select');

function renderizarCatalogo(contenedor, productos) {
    contenedor.innerHTML = '';
    // productos.forEach(producto => contenedor.append(reaArticuloProducto(producto));   
    productos.forEach(producto => contenedor.insertAdjacentHTML('beforeend', creaArticuloProducto(producto)));   
}

function creaArticuloProducto(producto) {
    // const article = document.createElement('article');
    // article.classList.add('producto');
    
    // const h3 = document.createElement('h3');
    // h3.classList.add('producto-nombre');
    // h3.textContent = producto.nombre;

    // const pPrecio = document.createElement('p');
    // pPrecio.classList.add('producto-precio');
    // pPrecio.textContent = `Precio: ${producto.precio}€`;

    // const pStock = document.createElement('p');
    // pStock.classList.add('producto-stock');
    // pStock.textContent = `Stock: ${producto.stock} unidades`;

    // article.append(h3, pPrecio, pStock);
    let article = `
        <article class="producto"> 
            <h3 class="producto-nombre">${producto.nombre}</h3> 
            <p class="producto-precio">Precio:${producto.precio}€</p> 
            <p class="producto-stock">Stock: ${producto.stock} unidades</p> 
        </article>     
    `;
    return article;
}

function mostrarTodos() {
    renderizarCatalogo(
        divCatalogo, 
        INVENTARIO
    );
}

function categoriasDesplegable(selector, categorias) {
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        selector.append(option);
    })
}

function iniciarCategoriasSelector() {
    let categorias = [];
    let categoriasRepetidas = INVENTARIO.map(producto => producto.categoria);
    categoriasRepetidas.forEach(categoria => {
        if (!categorias.includes(categoria)) {
            categorias.push(categoria);
        }
    });
    categorias.sort();  // Ordena alfabeticamente sobre el array original.
    console.log(categorias);
    
    categoriasDesplegable(selectFiltro, categorias);
}

iniciarCategoriasSelector();

function filtrarPorCategoria(productos, categoria) {
    return productos.filter(producto => producto.categoria == categoria);
}

function filtrar() {
    //console.log("filtrar por: ", selectFiltro.value);
    renderizarCatalogo(
        divCatalogo,
        filtrarPorCategoria(INVENTARIO, selectFiltro.value)
    );
}

//  renderizarCatalogo(
//         divCatalogo,
//         filtrarPorCategoria(INVENTARIO, "Electrónica")
//     );
