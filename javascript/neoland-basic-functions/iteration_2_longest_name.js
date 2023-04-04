const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord = (param) =>
  param.map(word => ({ name: word, len: word.length}) )
       .sort((a, b) => b.len - a.len)
       .shift()

console.log(findLongestWord(avengers).name)

const findLongestWord2 = (param) => {
  let longestWord = ""

  for(let i=0; i<param.length; i++) {
    longestWord = param[i].length > longestWord.length ? param[i] : longestWord
  }

  return longestWord
}

console.log(findLongestWord2(avengers))