import { Routes, goToPage } from "../../utils/router"
import './Dashboard.css'

const template = () => `
    <div id='containerDashboard'>
        <ul>
            <li>
                <figure id="figurePokemon" class="figureDashboard">
                    <img 
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682787158/Hub%20Games/mshsbnqw016mykpjie5w.jpg" 
                        alt="navigate to page pokemon"
                        id="imgPokemon"
                    />
                    <h2>Pokemon</h2>
            </li>
            <li>
                </figure>
                <figure id="figureMemoryGame" class="figureDashboard">
                    <img 
                        src = 'https://res.cloudinary.com/dtkuzehsp/image/upload/v1683562501/Hub%20Games/memory-game-fruits/fruits-memory-game_hmjioe.jpg',
                        alt="navigate to page memory game"
                        id="imgMemoryGame"
                    />
                    <h2>Memory Game</h2>
            </li>
            <li>
                </figure>
                <figure id="figureTicTacToe" class="figureDashboard">
                    <img 
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683562742/Hub%20Games/memory-game-fruits/tic-tac-toe_uchhvs.png" 
                        alt="navigate to page tic tac toe"
                        id="imgTicTacToe"
                    />
                    <h2>Tic Tac Toe</h2>
                </figure>
            </li>
            </li>
        </ul>
    </div>
    `

const addListeners = () => {
    document
        .getElementById('imgPokemon')
        .addEventListener('click', () => {
            goToPage(Routes.Pokemon)
        })

    document
        .getElementById('imgMemoryGame')
        .addEventListener('click', () => {
            goToPage(Routes.MemoryGame)
        })

    document
        .getElementById('imgTicTacToe')
        .addEventListener('click', () => {
            goToPage(Routes.TicTacToe)
        })
}

export const printTemplate = () => {
    document.querySelector('main').innerHTML = template()
    addListeners()
}
