
const carrito = [
  {nombre: 'Monitor 27 Pulgadas', precio: 500},
  {nombre: 'Monitor 21 Pulgadas', precio: 400},
  {nombre: 'Monitor 2 Pulgadas', precio: 100},
  {nombre: 'Monitor 7 Pulgadas', precio: 35},
  {nombre: 'Mouse', precio: 24},
]



const nuevoArreglo = carrito.forEach( function(producto) {
  return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
})

// Crea un arreglo nuevo
const nuevoArreglo2 = carrito.map( function(producto) {
  return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo)
console.log(nuevoArreglo2)
