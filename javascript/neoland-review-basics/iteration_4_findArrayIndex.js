const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const findArrayIndex = (array, text) =>
    array.indexOf(text)

console.log(findArrayIndex(animals, "Ajolote"))

const findArrayIndex2 = (array, text) => {
    let counter = 0
    for(const el of array) {
        if(el.includes(text)) {
            return counter
        }
        counter++
    }
}

console.log(findArrayIndex2(animals, "Ajolote"))