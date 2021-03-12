// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
}

// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 Pugadas', 500);
console.log(producto2);

const producto3 = new Producto('PC macbook Air m1', 1000);
console.log(producto3)
