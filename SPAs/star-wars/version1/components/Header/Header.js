import "./Header.css"

const template = () => {
  return (`
    <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Star Wars Logo"/>
     `)
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}
