import './header.css'
import { changeColor } from "../../utils/changeColor"
import { FAKE_USER } from "../../utils/constants"
import { Routes, goToPage } from "../../utils/router"

const template = () => `
    <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683640225/eag0cyi74oh9snedaic6.png"
         alt="Hub Games App Logo"
         class='logo'
    >
    <nav id='navMain'>
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683587474/Hub%20Games/mode_ixlnep.png"
            alt="Dark ligth mode"
            id='btnChangeColor'
        >
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683564783/Hub%20Games/board-game_jtrd9l.png"
            alt="navigate to Dashboard"
            id='btnDashboard'
        >
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683565105/Hub%20Games/switch_bjsjzz.png"
            alt="log out"
            id='btnLogout'
        >
        
    </nav>
`

const removeNavMainWhenLogout = () => {
    localStorage.removeItem(FAKE_USER)
    localStorage.getItem(FAKE_USER)
        ? null
        : document.querySelector('#navMain').style.display = 'none'
}

// Html elements events
const addListeners = () => {
    // Change page's background color
    document
        .querySelector('#btnChangeColor')
        .addEventListener('click', () => document.body.style.background = changeColor())

    // Go to Dashboard page event
    document
        .querySelector('#btnDashboard')
        .addEventListener('click', () => goToPage(Routes.Dashboard))

    // logout event
    document
        .querySelector('#btnLogout')
        .addEventListener('click', () => {
            removeNavMainWhenLogout()
            goToPage(Routes.Login)
        })
}

// Render
export const printTemplate = () => {
    document.querySelector('header').innerHTML = template()
    addListeners()
}