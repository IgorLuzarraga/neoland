import { FAKE_USER } from '../utils/constants'
import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard'
import { printTemplate as Pokemon } from '../pages/Pokemon/Pokemon' 
import { printTemplate as Anime } from '../pages/Anime/Anime'
import { printTemplate as Manga } from '../pages/Manga/Manga'
import { printTemplate as Login } from '../pages/Login/Login'

export const Routes = {
    NotLogged: 'NotLogged',
    Pokemon: 'Pokemon',
    Manga: 'Manga',
    Anime: 'Anime',
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
        case Routes.Manga:
            Manga()
            break;
        case Routes.Anime:
            Anime()
            break;
        case Routes.Login:
            Login()
            break
        case Routes.Dashboard:
            Dashboard()
            break
    }
}