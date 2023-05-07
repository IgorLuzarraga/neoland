import './TicTacToe.css'
import { Gameboard } from '../../components/Gameboard/Gameboard'

const template = () => `
    <div id='container-main'>
        <div id="container">
            <h1 id="jumbotron">Tic Tac Toe</h1>
            <div id="gameboard">
            </div>
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