// const numero1 = 1;
// const numero2 = 2;

// const average = (numero1 + numero2) / 2

// console.log(average)


// const array = [[-1, 2, 4], [-2, 7, -5]]

// let sumTotal = 0
//   sumEnteroPosi = 0
//   odds = 0
//   pairs = 0
//   resul = new Object();

// // validar si el array es 0
// if (!array)
//   resul = {}
// console.log(resul)
// for (let i=0; i < array.length; i++){
//   for (let j = 0; j < array[i].length; j++ ){
//     // sumTotal
//     sumTotal += array[i][j]
//     // const sumEnteroPosi
//     if( array[i][j] > 0 && Number.isInteger(array[i][j])){
//       sumEnteroPosi += array[i][j]
//       // console.log(array[i][j])
//     }
//     // const pairs
//     if(array[i][j] % 2 == 0){
//       pairs += array[i][j]
//     }

//     // const odds
//     if(array[i][j] % 2 != 0){
//       odds += array[i][j]
//     }    
//   }
// }

// resul = {
//   sumTotal,
//   sumEnteroPosi,
//   pairs,
//   odds

// }
// console.log(resul)


// let newArr = [];


// for(let m = 0; m < array.length; m++)
// {
//     newArr = newArr.concat(array[m]);
// }
// arrDesc = newArr.sort(function(a, b){return b - a});
// console.log(arrDesc)
// arrAsc = newArr.sort(function(a, b){return a - b});
// console.log(arrAsc)

// MyCows
let cows = [[3,4,2,3,4], [2,3,4,5,5], [3,2,2,1,2], [1,1,1,1,1], [2,3,5,2,2], [4,3,4,5,1], [2,2,2,2,2]]
let arr = new Array
// producción por días
var maxLeche = [];
for(let i= 0; i <cows.length; i++){
  let sumDias = 0
  var indexes = [], x;
  for(let j= 0; j <cows[i].length; j++){
    sumDias += cows[i][j]
    if (cows[i][j] === Math.max(...cows[i]))
    indexes.push(j + 1);
  }
  console.log(`Día ${i + 1}: ${sumDias}`)
  arr.push(sumDias)
  maxLeche.push(indexes)

}
// día de la semana mayor y menor produccion
// console.log(arr)
var min = arr.indexOf(Math.min(...arr))
var max = arr.indexOf(Math.max(...arr))
console.log('Mayor producción: Dia ', max + 1)
console.log('Menor producción: Dia ', min + 1)

// vaca que dio mas leche por dia
console.log(maxLeche)




