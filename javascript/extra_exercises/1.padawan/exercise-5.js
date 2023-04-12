//Usa un bucle para sumar el total de las ventas 
//(`sellCount`) de todos los productos y mostrar por consola 
// la media de ventas.


const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let productCounter = 0
let totalSellCount = 0
let average = 0

for(const product of products) {
    totalSellCount += product.sellCount
    productCounter++
}

average = totalSellCount / productCounter

console.log(`Product average: ${average}`)
