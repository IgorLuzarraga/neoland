import { FAKE_USER } from '../utils/constants'
import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard'
import { Pokemon } from '../pages/Pokemon/Pokemon' 
import { printTemplate as Login } from '../pages/Login/Login'
import { MemoryGame } from '../pages/MemoryGame/MemoryGame'
import { TicTacToe } from '../pages/Tic-Tac-Toe/TicTacToe'
import { Wacka } from '../pages/Wacka/Wacka'
import { HangMan } from '../pages/HangMan/HangMan'

export const Routes = {
    NotLogged: 'NotLogged',
    Pokemon: 'Pokemon',
    MemoryGame: 'MemoryGame',
    TicTacToe: 'TicTacToe',
    Wacka: 'Wacka',
    HangMan: 'HangMan',
    Login: 'Login',
    Dashboard: 'Dashboard'
}

export const goToPage = (route) => {
    switch (route) {
        case Routes.NotLogged:
            localStorage.getItem(FAKE_USER) ? Dashboard() : Login()
            break
        case Routes.Pokemon:
            Pokemon()
            break
        case Routes.MemoryGame:
            MemoryGame()
            break
        case Routes.TicTacToe:
            TicTacToe()
            break
        case Routes.Wacka:
            Wacka()
            break
        case Routes.HangMan:
            HangMan()
            break
        // case Routes.Manga:
        //     Manga()
        //     break;
        // case Routes.Anime:
        //     Anime()
        //     break;
        case Routes.Login:
            Login()
            break
        case Routes.Dashboard:
            Dashboard()
            break
    }
}