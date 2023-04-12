//Usa un bucle para sumar el total de las ventas 
//(`sellCount`) de todos los productos.

const assert = require('assert')

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

// ------ Method 1 ---------------
let total = 0

for(const product of products) {
    total = total + product.sellCount
}

// ------ Method 2 ---------------
const total2 = 
    products
        .map(product => product.sellCount)
        .reduce((acc, current) => acc + current, 0)

assert.equal(total, total2) // Both are equal



