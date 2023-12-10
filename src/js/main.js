import Navigo from "navigo";
import { getHeader } from "/src/js/components/header/header.js";
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer";
import { getFooter } from "/src/js/components/footer/footer";

const app = document.querySelector('.app');

//Создание роутера
export const router = new Navigo('/');

const header = getHeader();
const pageContainer = getPageContainer();
const footer = getFooter();

// Главная страница
router.on('/', async () => {
    pageContainer.innerHTML = ""
    const moduleMain = await import("/src/js/pages/main.js");
    const mainPage = moduleMain.getMainPage();

    document.title = "Интернет магазин акссесуров для техники Apple";

    pageContainer.append(mainPage);
});

// Избранное
router.on('/favourites', async () => {
    pageContainer.innerHTML = ""
    const moduleBasket = await import("/src/js/pages/favourites.js")
    const favouritesPage = moduleBasket.getFavouritesPage()

    document.title = "Избранное";

    pageContainer.append(favouritesPage)
});

// Корзина
router.on('/basket', async () => {
    pageContainer.innerHTML = ""
    const moduleBasket = await import("/src/js/pages/basket.js");
    const basketPage = moduleBasket.getBasketPage();

    document.title = "Корзина";

    pageContainer.append(basketPage);
});

router.resolve();

app.append(header, pageContainer, footer);





