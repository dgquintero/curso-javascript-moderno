const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
}


// const nombre = producto.nombre;
// console.log(producto.nombre)


// Destructuring
const {nombre, precio, disponible} = producto;

console.log(nombre, precio, disponible);

hey = Object.values(producto)
console.log(hey)

// Destructuring con Arreglos
const numeros = [10, 20 ,30, 50 ]

const[primero, b, c] = numeros;

console.log(c);
