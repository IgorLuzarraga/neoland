const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(wordsArr) {
    let repeatCounterMap = {}

    for(let i=0; i<wordsArr.length; i++) {
        if(wordsArr[i] in repeatCounterMap) {
            repeatCounterMap[wordsArr[i]] = repeatCounterMap[wordsArr[i]]+1
        } else {
            repeatCounterMap[wordsArr[i]] = 0
        }
    }

    return repeatCounterMap
  }

  console.log(repeatCounter(counterWords))

  // --------------------------------------------- //


  const repeatCounter2 = (wordsArr) => 
    wordsArr.reduce((acc, current) => {
        if(current in acc) {
            acc[current] = acc[current] + 1
        } else {
            acc[current] = 0
        }

        return acc
    }, {})
  

  console.log(repeatCounter2(counterWords))

