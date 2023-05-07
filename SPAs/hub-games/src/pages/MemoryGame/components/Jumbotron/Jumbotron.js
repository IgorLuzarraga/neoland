import './jumbotron.css'

export const Jumbotron = (textToShow) => 
    document
        .getElementById('jumbotron')
        .innerHTML = textToShow
