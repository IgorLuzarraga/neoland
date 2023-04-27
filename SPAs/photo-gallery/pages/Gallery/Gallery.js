import "./Gallery.css"
import {Loading} from "../../components/Loading/Loading"

const template = () => {
  return `
    <section class="container">
        <div class='gallery'>
            <h2>Gallery</h2>
            <div class="buttons">
            
            </div>
            <div class="spinner"></div>
            <div class="photo-gallery"></div>
        </div>
    </section>
    `
}

const addToGallery = (photoGallery, photos) => {
    for (const photo of photos) {
        const figure = document.createElement("figure")

        figure.innerHTML = `
        <img src=${photo.download_url} alt=${photo.author}/>
        <figcaption>${photo.author}</figcaption>
        `
        photoGallery.appendChild(figure)
      }
}

const getPhotos = (pageNum) => {
  const photoGallery = document.querySelector(".photo-gallery")
  
  // Remove the previous pics, before add the new ones.
  photoGallery.innerHTML = ""

    // Render a spinner before fetch
    const spinnerContainer = document.querySelector(".spinner")
    spinnerContainer.innerHTML = Loading()

  fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=30`)
    .then((res) => res.json())
    .then((photos) => {
      // get rid of the spinner after get the data
      spinnerContainer.innerHTML = ""

        addToGallery(photoGallery, photos)
    })
   
    .catch((err) => {
        console.log(err)
        photoGallery.innerHTML = `<h3>No se han podido recuperar las imágenes de la base de datos</h3>`
    })
}

const listeners = () => {
  // We create 15 btns, one for each page.
  const buttonscontainer = document.querySelector(".buttons")
  for (let i = 1; i <= 15; i++) {
    buttonscontainer.innerHTML += `<button class="pageBtn">${i}</button>`
  }

  //Add addEventListener to each btn to get the associate page's pics
  const buttons = document.querySelectorAll(".pageBtn")
  for (const button of buttons) {
    button.addEventListener("click", () => {
        const btns = document.querySelectorAll(".pageBtn")
        btns.forEach(btn => {
            btn.style.border = "2px solid var(--secondary)"
            btn.style.height = "1.8rem"
            btn.style.widtg = "1.8rem"
        })

        button.style.border = "4px solid red"
        button.style.height = "2.0rem"
        button.style.width = "2.0rem"

        getPhotos(button.innerText)
    })
  }
}

//Add an event listener to the window object for the scroll event
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Add the new fetch data from API to the page
      getPhotos(2)
    }
});

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
  getPhotos(1)
  listeners()
}
