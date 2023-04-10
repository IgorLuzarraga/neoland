const assert = require('assert')

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, current) => acc + current.score, 0)
const totalScoreExpected =  52

assert.equal(totalScore, totalScoreExpected) // Both are equal

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

// ------------------------- Method 1 ------------------------------
const totalScoreAproved = 
    exams
        .filter(student => student.score >= 5)
        .reduce((acc, current) => acc + current.score, 0)

const totalScoreAprovedExpected =  42

assert.equal(totalScoreAproved, totalScoreAprovedExpected) // Both are equal

// ------------------------- Method 2 ------------------------------
const totalScoreAproved2 = 
    exams.reduce((acc, current) => 
        current.score >= 5 ? acc + current.score : acc
    , 0)

const totalScoreAprovedExpected2 =  42

assert.equal(totalScoreAproved2, totalScoreAprovedExpected2) // Both are equal

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
    
const averageScore = (exams) => {
    const scoreReduced =
    exams.reduce((acc, current) => 
       ({...acc, totalScore: acc.totalScore + current.score, studentCounter: acc.studentCounter + 1})
    , {totalScore: 0, studentCounter: 0})

    return scoreReduced.studentCounter === 0 
        ? -1
        : scoreReduced.totalScore / scoreReduced.studentCounter
}

const averageScoreExpected = 5.2

assert.strictEqual(averageScore(exams), averageScoreExpected) // Both are equal
