const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
}
// Object keys
console.log(Object.keys( producto ))

// Object values
console.log(Object.values ( producto ))

// Object entries returna un objeto con a [key, value]
console.log(Object.entries ( producto ))
