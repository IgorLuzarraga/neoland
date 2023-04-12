// Basandote en el ejercicio anterior. Crea un botón que 
// elimine el último elemento de la lista.

// Last exercise:
// Dado el siguiente array de objetos. Crea dinamicamente 
// en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const places = [
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ]
  
  
  const createPlacesList = (places) => {
        const ul = document.createElement('ul')

        places.forEach(place => {
            const li = document.createElement('li')
            const div = document.createElement('div')
            const h4 = document.createElement('h4')
            const img = document.createElement('img')

            h4.textContent = place.title
            img.src = place.imgUrl

            div.appendChild(h4)
            div.appendChild(img)

            li.appendChild(div)

            ul.appendChild(li)
        })

        document.body.appendChild(ul)
  }

  const showPlaces = () => {
    createPlacesList(places)
    handleBtnToEraseLastElFromPlaces()
  }

// Current exercise
const handleBtnToEraseLastElFromPlaces = () => {
    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        const ul = document.querySelector('ul'); 

        // select the last element of the unordered list
        const lastLi = ul.lastElementChild; 

        // Remove the last element of the list
        lastLi.remove()
    })
}