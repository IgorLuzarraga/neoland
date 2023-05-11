import { Routes, goToPage } from "../../utils/router"
import './Dashboard.css'
import { changePageColor } from "../../utils/Dashboard/changePageColor"

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
            <li>
                <figure id="figureWacka" class="figureDashboard">
                <img
                    src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683639582/xij9pflnsmx85flststm.jpg"
                    alt="navigate to page Wacka"
                    id="imgWacka"
                />
                <h2>Wacka</h2>
                </figure>
            </li>
            <li>
                <figure id="figureWacka" class="figureDashboard">
                <img
                    src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683642574/zpieiovilsffledtmv92.png"
                    alt="navigate to page HangMan"
                    id="imgHangMan"
                />
                <h2>HangMan</h2>
                </figure>
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

    document
        .getElementById('imgWacka')
        .addEventListener('click', () => {
            goToPage(Routes.Wacka)
        })

    document
        .getElementById('imgHangMan')
        .addEventListener('click', () => {
            goToPage(Routes.HangMan)
        })
}

export const printTemplate = () => {
    document.querySelector('main').innerHTML = template()
    changePageColor()
    addListeners()
}
