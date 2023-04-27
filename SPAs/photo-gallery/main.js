import "./style.css"

import { printTemplate as Header } from "./components/Header/Header"
import { printTemplate as Footer } from "./components/Footer/Footer"
import { printTemplate as Home } from "./pages/Home/Home"
import { printTemplate as About } from "./pages/About/About"
import { printTemplate as Gallery } from "./pages/Gallery/Gallery"
import { madeLinkToPage } from "./utils/linkpage"

const pagesInfo = [
  {id: '#homelink', page: Home},
  {id: '#aboutlink', page: About},
  {id: '#gallerylink', page: Gallery}
]

Header()
Footer()

pagesInfo.forEach(pageInfo => madeLinkToPage(pageInfo.id, pageInfo.page))



