import { Routes, goToPage } from "../../utils/router"
import './Dashboard.css'
import { changePageColor } from "../../utils/Dashboard/changePageColor"

const template = () => `
    <div id='dashboard-container'>
        <ul>
            <li>
                <figure id="figurePokemon" class="figureDashboard">
                    <img 
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682787158/Hub%20Games/mshsbnqw016mykpjie5w.jpg" 
                        alt="navigate to page pokemon"
                        id="imgPokemon"
                    />
                    <h2>Pokemon</h2>
                </figure>
            </li>
            <li>
                <figure id="figureMemoryGame2" class="figureDashboard">
                    <img 
                        src = 'https://res.cloudinary.com/dtkuzehsp/image/upload/v1683562501/Hub%20Games/memory-game-fruits/fruits-memory-game_hmjioe.jpg',
                        alt="navigate to page memory game 2"
                        id="imgMemoryGame2"
                    />
                    <h2>Memory Game</h2>
                </figure
            </li>
            <li>
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
                <figure id="figureWhacAMole" class="figureDashboard">
                    <img
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683639582/xij9pflnsmx85flststm.jpg"
                        alt="navigate to page Whac A Mole"
                        id="imgWhacAMole"
                    />
                    <h2>Whac A Mole</h2>
                </figure>
            </li>
            <li>
                <figure id="figureWhacAMole" class="figureDashboard">
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

    // document
    //     .getElementById('imgMemoryGame')
    //     .addEventListener('click', () => {
    //         goToPage(Routes.MemoryGame)
    //     })

    document
        .getElementById('imgMemoryGame2')
        .addEventListener('click', () => {
            goToPage(Routes.MemoryGame2)
        })

    document
        .getElementById('imgTicTacToe')
        .addEventListener('click', () => {
            goToPage(Routes.TicTacToe)
        })

    document
        .getElementById('imgWhacAMole')
        .addEventListener('click', () => {
            goToPage(Routes.WhacAMole)
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
