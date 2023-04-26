import "./Header.css"

const template = () => {
  return (`
    <img src='../../assets/Rick_and_Morty.svg' alt="Ricky & Morty"/>
     `)
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
