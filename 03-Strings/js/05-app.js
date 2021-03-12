const producto = 'Monitor de 20 pulgadas';

// .replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor curvo'))

// .slice para cortar 
console.log(producto.slice(1, -1))


// Alternativa a slice diferencia entre slice es que si le pasas un numero mayor en la primera casilla el la coloca en la segunda
console.log(producto.substring(2,1));

const usuario = "Juan";

console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
