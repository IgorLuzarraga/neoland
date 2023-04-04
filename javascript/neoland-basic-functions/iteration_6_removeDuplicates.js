const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
    let noDuplicates = []

    for(let i=0; i<param.length; i++){
        if(!noDuplicates.includes(param[i])) noDuplicates.push(param[i])
    }

    return noDuplicates
  }

  console.log(removeDuplicates(duplicates))

  const removeDuplicates2 = (param) => 
    param.reduce(removeDuplicatesHelper, [])
  
const removeDuplicatesHelper = (acc, current) => {
    if(acc.includes(current)) return acc
   
    acc.push(current) 
    return acc
}

  console.log(removeDuplicates2(duplicates))