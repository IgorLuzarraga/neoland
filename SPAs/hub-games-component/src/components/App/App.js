import { HtmlElements } from "../../utils/constants"
import { printTemplate as printHeader } from "../Header/Header"

export const App = () => {
    const app = document.querySelector(HtmlElements.APP_ID)
    const header = document.createElement(HtmlElements.HEADER)
    const main = document.createElement(HtmlElements.MAIN)
    const footer = document.createElement(HtmlElements.FOOTER)

    app.append(header, main, footer)
    
    printHeader()
}