import './MemoryGame.css'
import { RestartGame } from '../../components/MemoryGame/RestartGame/RestartGame'
import { GameLogic } from '../../components/MemoryGame/GameLogic/GameLogic'
import { changePageColor } from '../../utils/MemoryGame/changePageColor'

const template = () => `
    <div id='memory-game-container-main'>
        <div id='memory-game-gameboard-container'></div>
        <div id='memory-game-display'>
            <div id="memory-game-jumbotron"></div>
            <div id="memory-game-player-moves-counter">Player Moves: 0</div>
            <button id="memory-game-restartBtn">Restart</button>
        </div>
    </div>
`
const printTemplate = (template) =>
    document.querySelector("main").innerHTML = template()

const addListener = () => {
    const restartBtn = document.getElementById('memory-game-restartBtn')

    restartBtn.addEventListener('click', function(event) {
        RestartGame(GameLogic)
    });
}

export const MemoryGame = () => {
    printTemplate(template)
    changePageColor()
    GameLogic()
    addListener()
}