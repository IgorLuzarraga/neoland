// Ahora vamos a trabajar con JSON SERVER para simular una 
// api. Es muy fácil de usar. Simplemente instálalo de 
// manera global usando el comando `npm i -g json-server`
// y una vez lo tengas instalado, ejecuta este comando 
// `json-server --watch exercise-2.json` en la posición 
// donde esté el archivo exercise-2.json. Los datos que 
// nos brindará serán los alojados en el archivo 
// exercise-2.json y estarán accesibles por defecto en la 
// url localhost:3000.

// Para este ejercicio vamos a obtener y pintar en el 
// html una serie de notas del diario de nuestro 
// queridísimo Bilbo. Para ello deberemos ejecutar 
//  el comando que comentabamos anteriormente y hacer un 
//  .fetch() a la url `http://localhost:3000/diary`.

// Una vez tengas los datos tenemos que ordenarlos por 
// fecha de menor a mayor con la propiedad .date. Nuestro 
// carismático personaje es un poco caótico y escribe las 
// notas en páginas salteadas...

// Cuando lo tengas crea un div para cada nota del diario 
//e introduce un `<h3>`, un `<h5>` y un `<p>` para su 
//.title, .date y .description respectivamente.

// Finalmente añade un botón para poder eliminar las 
// notas del diario. En concreto hay una que a Bilbo no le 
// apetece recordar mucho...

const checkDateFormat = (dateStr) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // regex for YYYY-MM-DD format
  return regex.test(dateStr);
}

// Note: simple fix, the exercise-2.json file has the 
// date in the format 'YYY-MM-DD', this is incorect,
// should be 'YYYY-MM-DD'
// This function just add the first 'Y' to the format
// as a 0.
const fixDateFormat = (dateStr) =>  '0'.concat(dateStr)


const sortDiaryByDate = (diary) => 
  diary.sort((a, b) => {
        const date1 = new Date(fixDateFormat(a.date))
        const date2 = new Date(fixDateFormat(b.date))
        return (date1 - date2)
      })

const showDiary = (diary) => {
  const diarySorted = sortDiaryByDate(diary)

  diarySorted.forEach((diaryNote, index) => {
    const div = document.createElement('div')

    const h3 = document.createElement('h3')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    const btn = document.createElement('button')

    // btn listener to remove the div when is clicked
    btn.innerHTML = 'X'
    div.id = `div_${index}`
    btn.addEventListener('click', () => {
        const divToRemove = document.querySelector(`#div_${index}`)
        divToRemove.remove()
    })

    h3.textContent = diaryNote.title
    h5.textContent = diaryNote.date
    p.textContent = diaryNote.description

    div.appendChild(h3)
    div.appendChild(h5)
    div.appendChild(p)
    div.appendChild(btn)

    document.body.appendChild(div)
  })
}

const fetchDiary = () => {
    const  url = `http://localhost:3000/diary`

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((diary) => {
        showDiary(diary)
      })
      .catch((error) => {
        console.error(error);
      });
    }