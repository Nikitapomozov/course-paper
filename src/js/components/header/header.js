import { getLogo } from "/src/js/components/logo/logo";
import "./header.css";
import { router } from "/src/js/main"
import favouritesSVG from "bundle-text:/src/assets/img/favourites.svg"
import basketSVG from "bundle-text:/src/assets/img/basket.svg"

// Получить шапку
export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("header__container", "container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const basketBtn = document.createElement("a");
    basketBtn.href = "#!";
    basketBtn.classList.add("header__btn", "basket-btn");
    basketBtn.innerHTML = basketSVG;

    const basketBtnCount = document.createElement("span");
    basketBtnCount.classList.add("basket-btn__count");  

    if (data.length !== 0) {
        basketBtn.append(basketBtnCount)
        basketBtnCount.innerText = data.length
    }

    basketBtn.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate("/basket");
    })

    const favouritesBtn = document.createElement("a");
    favouritesBtn.href = "#!";
    favouritesBtn.classList.add("header__btn", "favourites-btn");
    favouritesBtn.innerHTML = favouritesSVG;

    favouritesBtn.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate("/favourites");
    })

    const headerBtns = document.createElement("div");
    headerBtns.classList.add("header__btns");
    headerBtns.append(favouritesBtn, basketBtn);

    container.append(logo, headerBtns);
    header.append(container);

    return header;
};