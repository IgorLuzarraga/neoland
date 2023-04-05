const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


// Note: in this case, I don't mutate the original array placesToTravel
const erasePlaceById = (placesToTravel, id) => {
    // copy of placesToTravel
    placesToTravelCopy = structuredClone(placesToTravel)

    for(let i=0; i<placesToTravelCopy.length; i++){
        if(placesToTravelCopy[i].id === id) {
            placesToTravelCopy.splice(i, 1)
            break
        }
    }

    return placesToTravelCopy
}

const placesToTravel2 = erasePlaceById(placesToTravel, 11)
console.log(erasePlaceById(placesToTravel2, 40))

// Second method, using slice

const placesToTravelForSecondMethod = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

// Note: in this case, I don't mutate the original array placesToTravelForSecondMethod
const erasePlaceById2 = (placesToTravel, id) => {

    let placesToTravelReturn = []
    
    for(let i=0; i<placesToTravel.length; i++){
        if(placesToTravel[i].id === id) {
            placesToTravelReturn = placesToTravel.slice(0, i).concat(placesToTravel.slice(i+1))
            break
        }
    }

    return placesToTravelReturn
}

const placesToTravelForSecondMethod2 = erasePlaceById2(placesToTravelForSecondMethod, 11)
console.log(erasePlaceById2(placesToTravelForSecondMethod2, 40))
console.log(placesToTravelForSecondMethod) // The original array didn't change

