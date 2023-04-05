const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 41, name: 'El gato felix'}
    ]


// Note: I don't mutate the original array toys
const eraseCat = (toys) => {
    const toysWithoutCats = []

    for(const toy of toys) {
        if(!toy.name.includes("gato")){
            toysWithoutCats.push(toy)
        }
    }

    return toysWithoutCats
}

console.log(eraseCat(toys))

// -- Second method --

// Note: I don't mutate the original array toys
const eraseCat2 = (toys) => toys.filter(toy => !toy.name.includes("gato"))


console.log(eraseCat2(toys))
console.log("original toys: \n", toys)