import { router } from "/src/js/main";
import "./basketEmpty.css"

// Корзина пуста
export function getBasketEmpty() {
    
    const basketEmptySection = document.createElement("section");
    basketEmptySection.classList.add("basket-empty");

    const page = document.createElement("div");
    page.classList.add("page__basket-empty", "basket-empty");

    const pageContainer = document.createElement("div");
    pageContainer.classList.add("basket-empty__container", "container");

    const basketPageText = document.createElement("div");
    basketPageText.classList.add("basket-empty__text");

    const basketPageImage = document.createElement("div");
    basketPageImage.classList.add("basket-empty__img");

    const basketPageTitle = document.createElement("h2");
    basketPageTitle.classList.add("basket-empty__title");
    basketPageTitle.innerText = "Корзина пуста";

    const basketPageSubTitle = document.createElement("div");
    basketPageSubTitle.classList.add("basket-empty__sub-title");
    basketPageSubTitle.innerText = 'Но это никогда не поздно исправить ';

    const basketPageSpan = document.createElement("span");
    basketPageSpan.innerText = ':)'

    const basketPageBtn = document.createElement("button");
    basketPageBtn.classList.add("basket-empty__btn");
    basketPageBtn.innerText = 'В каталог товаров';

    basketPageBtn.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate("/");

    })


    basketPageSubTitle.append(basketPageSpan);
    basketPageText.append(basketPageTitle, basketPageSubTitle);
    basketEmptySection.append(basketPageImage, basketPageText, basketPageBtn)
    pageContainer.append(basketEmptySection);
    page.append(pageContainer);

    return page


}


