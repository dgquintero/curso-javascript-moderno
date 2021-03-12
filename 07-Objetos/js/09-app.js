"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
} 
// Diferencia con el freeze es que con seal te permite modificar los valores de las variables ya creadas pero no agregar nuevas ni eliminarlas
Object.seal( producto );
producto.disponible = false;

console.log(producto);

console.log(Object.isSealed(producto));
