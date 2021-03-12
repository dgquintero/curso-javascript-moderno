// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta informaciÃ³n en una sola variable 

const producto = { // Esto se le conoce como object litera...

}

// Estas llaves despues del signo = representan un objeto

const producto = {
    nombre: // Esto se le llama una propiedad o llave del objeto
}

const producto = {
    nombre: 'Monitor 20 pulgadas' // Nota como en lugar del signo igual se utilizan : , esta sintaxis es propia de los objetos y representa el valor que tendrÃ¡ la propiedad o la llave del objeto, muchas veces se les dice llave valor
}

// si deseas agregar mÃ¡s propiedades puedes hacerlo de la siguiente forma

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el Ãºltimo elemento puede o no tener la ,
}

console.log(producto)
