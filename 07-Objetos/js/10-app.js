const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true // el Ãºltimo elemento puede o no tener la ,
} 

const medidas = {
    peso: '1kg',
    medidas: '1m'
}


console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto, medidas);


// Spred operator o Rest operator

const resultado2 = {...producto, ...medidas}
console.log(resultado)
console.log(resultado2)
