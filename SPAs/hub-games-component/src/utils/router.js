import { FAKE_USER } from '../utils/constants'
import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard'
import { Pokemon } from '../pages/Pokemon/Pokemon' 
import { printTemplate as Login } from '../pages/Login/Login'
import { MemoryGame } from '../pages/MemoryGame/MemoryGame'
import { MemoryGame2 } from '../pages/MemoryGame2/MemoryGame2'
import { TicTacToe } from '../pages/Tic-Tac-Toe/TicTacToe'
import { WhacAMole } from '../pages/Whac-A-Mole/WhacAMole'
import { HangMan } from '../pages/HangMan/HangMan'

export const Routes = {
    NotLogged: 'NotLogged',
    Pokemon: 'Pokemon',
    MemoryGame: 'MemoryGame',
    MemoryGame2: 'MemoryGame2',
    TicTacToe: 'TicTacToe',
    WhacAMole: 'WhacAMole',
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
        case Routes.MemoryGame2:
            MemoryGame2()
            break
        case Routes.TicTacToe:
            TicTacToe()
            break
        case Routes.WhacAMole:
            WhacAMole()
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