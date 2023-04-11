const unorderArr = [23, 4, 55, 7]

const sort_ver1 = (arr) => {
    const arrCopy = [...arr]

   for(let i=0; i<arrCopy.length; i++) {
        for(let j=i+1; j<arrCopy.length; j++) {
            if(arrCopy[j] < arrCopy[i]) {
                const temp = arrCopy[i]
                arrCopy[i] = arrCopy[j]
                arrCopy[j] = temp
            }
        }
   }

   return arrCopy
}

const ascendOrder = (a, b) => 
    b < a ? {higher: a, smaller: b} : {higher: b, smaller: a}

const descendOrder = (a, b) => 
    a > b ? {higher: b, smaller: a} : {higher: a, smaller: b}

const sort_ver2 = (arr, sortFunc) => {
    const arrCopy = [...arr]

   for(let i=0; i<arrCopy.length; i++) {
        for(let j=i+1; j<arrCopy.length; j++) {
           const result = sortFunc(arrCopy[i], arrCopy[j])
           arrCopy[i] = result.smaller
           arrCopy[j] = result.higher   
        }
   }

   return arrCopy
}

console.log("Original array: ", unorderArr)
console.log("Acended ordered array: ", sort_ver2(unorderArr, ascendOrder))
console.log("Descended ordered array: ", sort_ver2(unorderArr, descendOrder))
console.log("Original array: ", unorderArr)