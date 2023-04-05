const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const addPopularToys = (toys, sellCountToBePopular) => {
    const popularToys = [];

    for(const toy of toys) {
        toy.sellCount > sellCountToBePopular ? popularToys.push(toy) : null
        //if (toy.sellCount > sellCountToBePopular) popularToys.push(toy)
    }

    return popularToys
}

console.log(addPopularToys(toys, 15))

// -- second method --
const addPopularToys2 = (toys, sellCountToBePopular) => 
    toys.filter(toy => toy.sellCount > sellCountToBePopular)

console.log(addPopularToys2(toys, 15))