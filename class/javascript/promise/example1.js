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
  
  const list = ['Rojo', 'Azul', 'Verde'];
  
  addItem('Amarillo', list)
    .then((list) => {
      console.log(`El listado final es: ${list.join(', ')}`);
    })
    .catch((err) => {
      throw new Error(err);
    });


    