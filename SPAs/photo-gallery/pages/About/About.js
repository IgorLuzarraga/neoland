import "./About.css"

const template = () => {
  return `
    <section class="about">
        <h2>About</h2>
        <p>
        This App gets images from Picsum API and shows 30 pics 
        </p>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
