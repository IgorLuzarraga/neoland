// En base al siguiente array cuenta cuantas letras "a" tenemos. 
// El resultado debería ser 9.


const animals = [
  "Rintintín",
  "Cosmo",
  "Gato con botas",
  "Asno",
];

const numberOfLetter = (letter: string, arr: string[]) => {
    let counter = 0
    for(let i=0; i<arr.length; i++) {
        counter += arr[i]
            .split("")
            .reduce((acc, current) => 
                letter.toLowerCase() === current.toLocaleLowerCase() 
                    ? acc = acc + 1
                    : acc
            , 0)
    }

    return counter
}



console.log(numberOfLetter('a', animals))