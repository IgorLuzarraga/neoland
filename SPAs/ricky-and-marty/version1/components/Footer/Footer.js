import "./Footer.css"

const template = () => {
  return `
    <p> 
      &copy; - 2023 - Igor Luzarraga
    </p>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}
