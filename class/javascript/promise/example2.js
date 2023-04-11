const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
      if (!list) {
        reject('No existe el array');
      }

      setTimeout(function () {
        list.push(item);
        resolve(list);
      }, 2000);
    });
  
    return promise;
  };
  
  const list = ['Raising Arizona','Fargo','Barton Fink'];

  addItem('The big Lewoski', list)
    .then(() => addItem('O Brother, Where Art Thou?', list))
    .then(() => addItem('The Man Who Wasnt There', list))
    .then(() => addItem('The Ladykillers', list))
    .then(() => {
      console.log(list);
    });
  
  // (4 seg. de delay) -> ['Raising Arizona','Fargo','Barton Fink', ...];


    