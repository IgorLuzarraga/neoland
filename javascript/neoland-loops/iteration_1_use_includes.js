const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const wordIncluded = (productsArr, word) => {
    for(let i=0; i<productsArr.length; i++) {
        if(productsArr[i].includes(word)) {
            console.log(productsArr[i])
        }
    }
}

wordIncluded(products, 'Camiseta')

// ----------------------------------------- //

const wordIncluded2 = (productsArr, word) => 
    productsArr.forEach(arrItem => {
        if(arrItem.includes(word)) {
            console.log(arrItem)
        }
    })


wordIncluded2(products, 'Camiseta')