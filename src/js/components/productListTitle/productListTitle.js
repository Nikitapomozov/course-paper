import "./productListTitle.css";

// Заголовок списка товара
export function getProductListTitle(text) {
    const productListTitle = document.createElement("h2");
    productListTitle.classList.add("product-list__title", "title");
    productListTitle.textContent = text;

    return productListTitle;
};