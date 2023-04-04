const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    return sumAll(param)/param.length
}

const sumAll = (param) =>
   param.reduce((acc, current) => {
    switch (typeof current) {
        case "number":
            return acc + current
        case "string":
            return acc + current.length
        default:
            return acc
    }
   }, 0)
  
console.log(averageWord(mixedElements).toFixed(2))