const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el Ãºltimo elemento puede o no tener la ,
    informacion : {
        peso : '1Kg',
        medida: '1m',
        fabricacion: {
            pais: 'China'
        }
    }
}


const {nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto

console.log(pais)
console.log(informacion)
console.log(fabricacion)
