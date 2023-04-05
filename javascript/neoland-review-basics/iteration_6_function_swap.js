const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

// Note: I don't change the original array names
const swap = (names, index1, index2) => {
    const namesCopy = [...names]
    const valueIndex1 = namesCopy[index1]
    namesCopy[index1] = namesCopy[index2]
    namesCopy[index2] = valueIndex1

    return namesCopy
}

// console.log("names before: ", names)
// console.log("array changed: ", swap(names, 1, 2))
// console.log("names after: ", names)

// Note: the function swap2 changes the original array names
const swap2 = (names, index1, index2) => {
    const valueIndex1 = names[index1]
    names[index1] = names[index2]
    names[index2] = valueIndex1

    return names
}

console.log("names before: ", names)
console.log("array changed: ", swap2(names, 1, 2))
console.log("names after: ", names)
