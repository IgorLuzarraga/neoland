// En base al siguiente array cuenta cuantas letras "a" tenemos. 
// El resultado debería ser 9.
var animals = [
    "Rintintín",
    "Cosmo",
    "Gato con botas",
    "Asno",
];
var numberOfLetter = function (letter, arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        counter += arr[i]
            .split("")
            .reduce(function (acc, current) {
            return letter.toLowerCase() === current.toLocaleLowerCase()
                ? acc = acc + 1
                : acc;
        }, 0);
    }
    return counter;
};
console.log(numberOfLetter('a', animals));
