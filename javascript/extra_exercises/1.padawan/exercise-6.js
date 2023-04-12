const assert = require('assert')

// Usa un bucle para recorrer el array de peliculas 
// (`products`) y añade al array `goodProducts` los que 
// tengan más de 20 ventas (`sellCount`) y al array 
// `badProducts` los que tengan menos.


const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

// ------------ Method 1 ------------
for(const product of products) {
    product.sellCount > 20 
        ? goodProducts.push(product)
        : badProducts.push(product)
}

// ------------ Method 2 ------------
const goodProducts2 = products.filter(product => product.sellCount > 20);
const badProducts2 = products.filter(product => product.sellCount <= 20)

assert.deepStrictEqual(goodProducts, goodProducts2) // Both are equal
assert.deepStrictEqual(badProducts, badProducts2)   // Both are equal
