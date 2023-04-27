import "./Home.css"

const template = () => {
  return `
    <section class="home">
        <h2>Welcome to Photo Gallery</h2>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
