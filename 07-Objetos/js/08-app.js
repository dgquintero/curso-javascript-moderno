"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
} 

Object.freeze( producto );
// producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));
