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
                <figure id="figureManga" class="figureDashboard">
                    <img 
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682787158/Hub%20Games/kbdy4jd6a5yqbasnhlmk.jpg" 
                        alt="navigate to page manga"
                        id="imgManga"
                    />
                    <h2>Memory Game</h2>
            </li>
            <li>
                </figure>
                <figure id="figureAnime" class="figureDashboard">
                    <img 
                        src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682787158/Hub%20Games/rhvudsrv5ptagprpxzhk.webp" 
                        alt="navigate to page anime"
                        id="imgAnime"
                    />
                    <h2>Anime</h2>
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
        .getElementById('imgManga')
        .addEventListener('click', () => {
            goToPage(Routes.MemoryGame)
        })

    document
        .getElementById('imgAnime')
        .addEventListener('click', () => {
            goToPage(Routes.Anime)
        })
}

export const printTemplate = () => {
    document.querySelector('main').innerHTML = template()
    addListeners()
}
