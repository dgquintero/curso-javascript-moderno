const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
}


//Agregar nuevas propiedades al objeto

producto.imagen = "imagen.jpg";

delete producto.disponible;

console.log(producto)
