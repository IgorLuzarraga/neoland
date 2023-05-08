import './style.css'
import { Routes, goToPage } from './src/utils/router'
import { App } from './src/components/App/App'

// Start the Hub Games App
App()

// No one is logged in yet, so render the login in page
goToPage(Routes.NotLogged)
