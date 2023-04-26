import "./Main.css"
import {Card} from "../Card/Card"

// Page number
let pageNum = 1

// HTML template
const template = () => {
  return `
    <h2>Gallery</h2>
    <ul id="gallery-container"></ul>
    <div id="prev-next-btns">
      <button id="prevBtn">Previous</button>
      <button id="nextBtn">Next</button>
    </div>
    `
}

// Get data from server
const getData = async (num) => {
  // Html list to set the data
  const ul = document.querySelector("#gallery-container")
 
  // Remove the list elements, so we start fresh
  ul.innerHTML = "";

  // Get the data from the API
  const data = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/characters?page=${num}&limit=10`
  )

  const dataJSON = await data.json()

    //Add data from the server to the ul
    dataJSON.data.forEach((character) =>  {
      const li = document.createElement("li")
      li.innerHTML = Card(character)
      ul.appendChild(li)
    })
}

// Listener to get the next page of data from the server
const listeners = () => {
  const nextBtn = document.querySelector("#nextBtn")
  nextBtn.addEventListener("click", () => {
    pageNum++
    getData(pageNum)
  })

  const prevBtn = document.querySelector("#prevBtn")
  prevBtn.addEventListener("click", () => {
    pageNum = pageNum > 0 ? (pageNum - 1) : 1

    getData(pageNum)
  })
}

export const printTemplate = () => {
  // 1. Add The HTML
  document.querySelector("main").innerHTML = template()

  // 2. Get The data
  getData(pageNum)

  // 3. Add the event listeners, in this point there is not any problem
  // because we added first the elements in the page (point 1)
  listeners()
}
