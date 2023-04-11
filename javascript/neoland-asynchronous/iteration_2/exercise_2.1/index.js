// 2.1 Gestiona la siguiente promesa para esperar a ejecutar 
// el console usando async-await.

// Original code

// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
  
    // Return the promise
    return promise;
  }

  
const showTimeout = async () => {
    try {
      const answer = await runTimeOut()
  
      console.log('Time out!')

    } catch (error) {
      console.error(error);
    }
}

showTimeout();


