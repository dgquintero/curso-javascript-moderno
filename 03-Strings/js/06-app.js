const producto = 'Monitor de 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto...
// Si a .repeat le pasas un numero que no es entero lo redondea
const texto = ' en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`)

// Split, dividir un string
const actividad = "Estoy aprendiendo JS Moderno"
console.log(actividad.split(" "));
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(", "))

const tweet = "Aprendiendo JS #JSModernoConJuan";
console.log(tweet.split('#'))
