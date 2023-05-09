// Function executed when the mole is wacked.
// Adds one to the score and removes the event's father.
export const Wack = (e) => {
    let score = 0
    e.target.parentNode.classList.remove("up");

    const scoreElement = document.querySelector(".score")
    score = scoreElement.innerHTML
    document.querySelector(".score").innerHTML = ++score;
  };