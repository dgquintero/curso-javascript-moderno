const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
} 

producto.disponible = false;


delete producto.precio;


console.log(producto);
