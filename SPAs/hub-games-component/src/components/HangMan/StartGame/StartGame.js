export const StartGame = (word) => {
    word.split("")
        .forEach((letter) => {
      let pElement = document.createElement("p")
      pElement.setAttribute("class", "hangman-word-letter")
      pElement.setAttribute("id", `${letter}`)

      const section = document.querySelector("#handman-word")
      section.appendChild(pElement);
    })
}
  
  