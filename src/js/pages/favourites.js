import { getCategory } from '/src/js/components/category/category';
import { getTitle } from '/src/js/components/title/title';
import '/src/css/favouritesPage.css'


// Страница избранное
export function getFavouritesPage() {

    const page = document.createElement("div");
    page.classList.add("page__favourites", "favourites")
    
    const pageContainer = document.createElement("div")
    pageContainer.classList.add("favourites__container", "container")

    const title = getTitle("Избранное", "favourites__title");
    const category = getCategory();

    pageContainer.append(title)
    page.append(pageContainer, category);

    return page
}