export const Routes = {
    NotLogged: 'NotLogged',
    Pokemon: 'Pokemon',
    Manga: 'Manga',
    Anime: 'Anime',
    Login: 'Login',
    Dashboard: 'Dashboard'
}

export const goToPage = (route) => {
    console.log(route)
    switch (route) {
        case Routes.NotLogged:
            localStorage.getItem('user') ? Dashboard() : Login()
            break
        case Routes.Pokemon:
            PoKemon()
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