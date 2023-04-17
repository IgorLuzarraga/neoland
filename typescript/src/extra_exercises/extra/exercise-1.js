// Crea una función llamada splitName que divida un nombre completo en 
// nombre y apellido. Tengamos en cuenta que este string siempre va a tener 
// solo un nombre y un apellido.
// De tal modo que si tenemos el texto "Peter Parker" obtendremos dos 
// variables...una con el valor "Peter" y otra con el valor "Parker".
// En este ejercicio seria recomendable que investigueis las funciones 
// .substring() y .findIndexOf()
var splitName = function (name) {
    var separationIdx = name.indexOf(' ');
    return {
        name: name.substring(0, separationIdx),
        lastName: name.substring(separationIdx).trim()
    };
};
console.log(splitName('Peter Parker'));
