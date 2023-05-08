import './RestartCounters.css'

export const RestartCounters = () => {
    const counterPlayerX = document.querySelector('#tic-tac-toe-counter-playerX')
    counterPlayerX.innerHTML = 'Playex X moves: 0'

    const counterPlayerO = document.querySelector('#tic-tac-toe-counter-playerO')
    counterPlayerO.innerHTML = 'Playex O moves: 0'
}