import './RestartCounters.css'

export const RestartCounters = () => {
    const counterPlayerX = document.querySelector('#tic-tac-toe-counter-playerX')
    counterPlayerX.innerHTML = 'Player X moves: 0'

    const counterPlayerO = document.querySelector('#tic-tac-toe-counter-playerO')
    counterPlayerO.innerHTML = 'Player O moves: 0'
}