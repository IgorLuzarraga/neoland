import './TicTacToe.css'
import { Gameboard } from '../../components/Tic-Tac-Toe/Gameboard/Gameboard'

const template = () => `
    <div id='tic-tac-toe-container-main'>
        <div id="tic-tac-toe-gameboard-container"></div>
        <div id='tic-tac-toe-display'>
            <div id="tic-tac-toe-jumbotron">Tic Tac Toe</div>
            <div id="tic-tac-toe-counter-playerX">Playex X moves: 0</div>
            <div id="tic-tac-toe-counter-playerO">Playex O moves: 0</div>
            <button id="restartBtn">Restart</button>
        </div>
    </div>
`

const printTemplate = (template) =>
    document.querySelector("main").innerHTML = template()

const createBoard = () => Gameboard()

export const TicTacToe = () => {
    printTemplate(template)
    createBoard()
}