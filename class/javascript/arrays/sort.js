const unorderArr = [23, 4, 55, 7]

// ------------------------ Ver 1 ----------------

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

// ------------------------ Ver 2 ----------------

// Note: ver2 dosen't work -> TODO
const sort_ver2 = (arr) => {
    const arrCopy = [...arr]

   arrCopy.forEach((numA, indexA) => {
        //console.log(arr2)
        arrCopy.forEach((numB, indexB) => {
            if(numB < numA) {
                // console.log(`arr[${indexA}]: ${arrCopy[indexA]}`)
                // console.log(`arr[${indexB}]: ${arrCopy[indexB]}`)
                //const temp = numA
                arrCopy[indexA] = numB //arrCopy[indexB] // numB
                arrCopy[indexB] = numA // temp
            }
        }, indexA++)
   })

   return arrCopy
}

console.log("Original array: ", unorderArr)
console.log(sort_ver2(unorderArr))
console.log("Original array: ", unorderArr)

// ------------------------ Ver 3 ----------------
const ascendOrder = (a, b) => 
    b < a ? {higher: a, smaller: b} : {higher: b, smaller: a}

const descendOrder = (a, b) => 
    a > b ? {higher: b, smaller: a} : {higher: a, smaller: b}

const sort_ver3 = (arr, sortFunc) => {
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

// console.log("Original array: ", unorderArr)
// console.log("Acended ordered array: ", sort_ver3(unorderArr, ascendOrder))
// console.log("Descended ordered array: ", sort_ver3(unorderArr, descendOrder))
// console.log("Original array: ", unorderArr)