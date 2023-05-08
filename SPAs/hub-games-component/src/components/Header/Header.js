import './header.css'
import { changeColor } from "../../utils/changeColor"
import { FAKE_USER } from "../../utils/constants"
import { Routes, goToPage } from "../../utils/router"

const template = () => `
    <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682755295/Hub%20Games/km2dwnap4pragrco6aqg.jpg"
         alt="Hub Games App Logo"
         class='logo'
    >
    <nav id='navMain'>
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682758998/Hub%20Games/mlpnvc6otxwingvhqc8x.png"
            alt="change randomly the page's background color"
            id='btnChangeColor'
        >
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682757402/Hub%20Games/sqgyj9gbxvlxdvnaqxsd.png"
            alt="navigate to Dashboard"
            id='btnDashboard'
        >
        <img src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1682757402/Hub%20Games/wjkkzvbuqydfmrbiurz4.png"
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