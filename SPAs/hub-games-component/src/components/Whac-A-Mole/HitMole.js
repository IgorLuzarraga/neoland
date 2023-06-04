// Function executed when the mole is hited.
// Adds one to the score and removes the event's father.
export const HitMole = (e) => {
  console.log("start HitMole")

  e.target.parentNode.classList.remove("up");

  updateMoleHitScore()
};

const getScoreFromHtmlEl = (scoreHtml) =>
  scoreHtml
    .innerHTML
    .replace(/\D/g, "")

const updateMoleHitScore = () => {
  const scoreHtml = document.querySelector('#whac-a-mole-score')

  let scoreNum = getScoreFromHtmlEl(scoreHtml)

  scoreHtml.innerHTML = `Score: ${++scoreNum}`
}