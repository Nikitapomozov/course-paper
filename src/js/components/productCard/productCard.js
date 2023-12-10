import "./productCard.css";
import starSVG from "/src/assets/img/star.svg"

// Карточка товара
export function getProductCard(product) {
    const productCard = document.createElement("li");
    productCard.classList.add("product-card");

    const productPreview = document.createElement("img");
    productPreview.classList.add("product__preview");
    productPreview.setAttribute('src', product.preview);

    const productText = document.createElement("div");
    productText.classList.add("product__text");

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product__title");
    productTitle.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product__price");
    productPrice.textContent = product.price;

    const productPriceRuble = document.createElement("span");
    productPriceRuble.innerText = "₽";
    productPrice.append(productPriceRuble)

    const estimationCard = document.createElement("div");
    estimationCard.classList.add("product__estimation");

    const estimationStar = document.createElement("img");
    estimationStar.classList.add("product__estimation-star");
    estimationStar.setAttribute('src', starSVG)

    const estimationNum = document.createElement("span");
    estimationNum.classList.add("product__estimation-num");
    estimationNum.textContent = product.estimation;

    productText.append(productTitle, productPrice);
    estimationCard.append(estimationStar, estimationNum);
    productCard.append(productPreview, productText, estimationCard);


    return productCard;
}