import { getProductsListHeadphones } from "/src/js/components/productsListHeadphones/productsListHeadphones";

// Главная страница
export function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("main-page__container", "container");

    const productList = getProductsListHeadphones();

    page.append(productList);

    return page;
};