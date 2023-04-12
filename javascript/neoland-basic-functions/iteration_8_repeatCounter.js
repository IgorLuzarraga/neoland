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

  // --------------------- Version 1------------------------ //

  function repeatCounter(wordsArr) {
    let repeatCounterMap = {}

    for(let i=0; i<wordsArr.length; i++) {
        if(wordsArr[i] in repeatCounterMap) {
            repeatCounterMap[wordsArr[i]] = repeatCounterMap[wordsArr[i]]+1
        } else {
            repeatCounterMap[wordsArr[i]] = 1
        }
    }

    return repeatCounterMap
  }

  console.log(repeatCounter(counterWords))

  // --------------------- Version 2------------------------ //


  function repeatCounter2(wordsArr) {
    let repeatCounterMap = {}

    wordsArr.forEach(word => {
        word in repeatCounterMap 
            ? repeatCounterMap[word] += 1
            : repeatCounterMap[word] = 1
    })

    return repeatCounterMap
  }

  console.log(repeatCounter2(counterWords))

  // --------------------- Version 3------------------------ //

  const repeatCounter3 = (wordsArr) => 
    wordsArr.reduce((acc, current) => {
        if(current in acc) {
            acc[current] = acc[current] + 1
        } else {
            acc[current] = 1
        }

        return acc
    }, {})
  

  console.log(repeatCounter3(counterWords))


