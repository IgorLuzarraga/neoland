import './RestartCounter.css'

export const RestartCounter = () => {
    const counterPlayer = document.querySelector('#memory-game-player-moves-counter')
    counterPlayer.innerHTML = 'Player moves: 0'
}