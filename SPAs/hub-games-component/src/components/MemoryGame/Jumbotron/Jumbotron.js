import './jumbotron.css'

export const Jumbotron = (textToShow) => 
    document
        .getElementById('memory-game-jumbotron')
        .innerHTML = textToShow
