function normalizarNombres(nombres) {
    return nombres.map(nombre => normalizarNombre(nombre) );
}

function normalizarNombre(nombre) {
    let palabras = nombre.split(' ');
    let palabrasNormalizadas = [];
    palabras.forEach(palabra => {
        if (palabra.length > 0) {
            palabrasNormalizadas.push(capitalizarPalabra(palabra));
        }
    });
    return palabrasNormalizadas.join(' ');
}

function capitalizarPalabra(palabra) {
    return palabra.substring(0, 1).toUpperCase() + palabra.substring(1).toLowerCase();
}

console.log(normalizarNombres(NOMBRES_USUARIO));