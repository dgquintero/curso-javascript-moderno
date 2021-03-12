const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el Ãºltimo elemento puede o no tener la ,
    mostrarInfo: function() {
        console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo()
