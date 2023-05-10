import { pipe } from "../fp";

//const words = ['penguin', 'umbrella', 'chocolate', 'dolphin', 'mountain', 'waterfall', 'rainbow', 'butterfly', 'sunflower', 'pineapple'];
const words = ['hi'];

const randomIndex = (words) =>
    Math.floor(Math.random() * words.length)

const toUpperCase = (word) =>
    word.toUpperCase()

const selectWordFrom = words => index =>
    words[index]

export const getRandomWord = () => 
    pipe(
        words,
        randomIndex,
        selectWordFrom(words)
    )


  


