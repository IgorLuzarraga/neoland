const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  return sumAll(param)/param.length
}

const sumAll = (param) =>
  param.reduce((acc, current) => acc + current, 0)

console.log(average(numbers).toFixed(2))