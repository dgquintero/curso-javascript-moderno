
const carrito = [
  {nombre: 'Monitor 27 Pulgadas', precio: 500},
  {nombre: 'Monitor 21 Pulgadas', precio: 400},
  {nombre: 'Monitor 2 Pulgadas', precio: 100},
  {nombre: 'Monitor 7 Pulgadas', precio: 35},
  {nombre: 'Mouse', precio: 24},
]






// for (let i = 0; i < carrito.length; i++) {
//   console.log(carrito[i].nombre);
// }

carrito.forEach( function(producto) {
  console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
})
