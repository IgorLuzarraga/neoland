import './TicTacToe.css'
import { Gameboard } from '../../components/Tic-Tac-Toe/Gameboard/Gameboard'
import { changePageColor } from '../../utils/Tic-Tac-Toe/changePageColor'

const template = () => `
    <div id='tic-tac-toe-container-main'>
        <div id="tic-tac-toe-jumbotron">Tic Tac Toe</div>
        <div id="tic-tac-toe-gameboard-display-container">
            <div id="tic-tac-toe-gameboard-container"></div>
            <div id='tic-tac-toe-display'>
                <div id="tic-tac-toe-counter-playerX">Player X moves: 0</div>
                <div id="tic-tac-toe-counter-playerO">Player O moves: 0</div>
                <button id="tic-tac-toe-restartBtn">Restart</button>
            </div>
        </div>
    </div>
`

const printTemplate = (template) =>
    document.querySelector("main").innerHTML = template()

const createBoard = () => Gameboard()

export const TicTacToe = () => {
    printTemplate(template)
    changePageColor()
    createBoard()
}