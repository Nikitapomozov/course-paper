import "./productsListHeadphones.css";
import { getProductListTitle } from "/src/js/components/productListTitle/productListTitle";
import { getProductCard } from "/src/js/components/productCard/productCard";

// Компонент списка товара 
export function getProductsListHeadphones() {

 

    const productsList = document.createElement("div");
    productsList.classList.add("product-list");

    const productListTitle = getProductListTitle("Наушники");

    const list = document.createElement("ul");
    list.classList.add("product-list__list");

    for (const product of data) {
        const productCard = getProductCard(product)
        list.append(productCard)
    }

    productsList.append(productListTitle, list);

    return productsList;
}
