const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  const finderName = (namesArr, name) => {
    let pos = -1;

    for(let i=0; i<namesArr.length; i++) {
       
        if(namesArr[i] === name) {
            console.log("kaixo")
            pos=i
            break
        }
    }

    if(pos === -1) {
        return false
    } 
    else {
        return {nameExist: true, pos: pos}
    }
  }

  console.log(finderName(nameFinder, 'Peter'))

  //----------------------------------------------------//
  function finderName2(namesArr, name) { 
    const pos = namesArr.indexOf(name)

    if(pos === -1) {
        return false
    } 
    else {
        return {nameExist: true, pos: pos}
    }
  }

  console.log(finderName2(nameFinder, 'MarcP'))