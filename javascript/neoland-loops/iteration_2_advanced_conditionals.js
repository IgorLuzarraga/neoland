const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

const testPassed = (studentArr) => {
    studentArr.forEach(student => {
        ((student.T1 && student.T2) || (student.T1 && student.T3) || (student.T2 && student.T3)) 
            ? student.isApproved = true
            : student.isApproved = false
    })

    return studentArr
}

//console.log(testPassed(alumns))

// ----------------------------------------------//
// without mutate the array alumns

const alumns2 = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

const testPassed2 = (studentArr) => {
    // deep copy of the studentArr array
    const studentArrCopy = structuredClone(studentArr)

    studentArrCopy.forEach(student => {
        ((student.T1 && student.T2) || (student.T1 && student.T3) || (student.T2 && student.T3)) 
            ? student.isApproved = true
            : student.isApproved = false
    })

    return studentArrCopy
}

console.log("before: \n\n", alumns2)
console.log(testPassed2(alumns2))
console.log("after: \n\n", alumns2) // The alumn2 array didn't change
