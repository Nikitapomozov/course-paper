import "./basketProduct.css";
import basketDelete from "bundle-text:/src/assets/img/delete.svg"

export function getBasketProduct(product) {

    const basketItem = document.createElement("li");
    basketItem.classList.add("basket__item");

    const basketProduct = document.createElement("div");
    basketProduct.classList.add("basket-product");

    const basketProductInfo = document.createElement("div");
    basketProductInfo.classList.add("basket-product__info");

    const basketProductBottom = document.createElement("div");
    basketProductBottom.classList.add("basket-product__bottom");

    const basketProductCounter = document.createElement("div");
    basketProductCounter.classList.add("basket-product__counter");

    const basketProductCounterMinus = document.createElement("button");
    basketProductCounterMinus.classList.add("basket-product__counter-minus", "basket-product__counter-btn");
    basketProductCounterMinus.innerText = "-"
    basketProductCounterMinus.dataset.action = "minus"

    const basketProductCounterInput = document.createElement("input");
    basketProductCounterInput.classList.add("basket-product__counter-input")
    basketProductCounterInput.name = "count";
    basketProductCounterInput.type = "text";
    basketProductCounterInput.value = "1";

    const basketProductCounterPlus = document.createElement("button");
    basketProductCounterPlus.classList.add("basket-product__counter-plus", "basket-product__counter-btn");
    basketProductCounterPlus.innerText = "+"
    basketProductCounterPlus.dataset.action = "plus"

    const basketProducTotal = document.createElement("p");
    basketProducTotal.classList.add("basket-product__total");

    const basketProducTotalPrice = document.createElement("span");
    basketProducTotalPrice.classList.add("basket-product__total-price");
    basketProducTotalPrice.innerText = product.price;
    basketProducTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const basketProducTotalRuble = document.createElement("span");
    basketProducTotalRuble.innerText = "₽"
    basketProducTotal.append(basketProducTotalPrice, basketProducTotalRuble);

    const basketProductImgBlock = document.createElement("div");
    basketProductImgBlock.classList.add("basket-product__img");

    const basketProductImg = document.createElement("img");
    basketProductImg.setAttribute('src', product.preview);

    basketProductImgBlock.append(basketProductImg)

    const basketProductGroup = document.createElement("div");
    basketProductGroup.classList.add("basket-product__group");

    const basketProductTitle = document.createElement("h3");
    basketProductTitle.classList.add("basket-product__title");
    basketProductTitle.textContent = product.title;

    const basketProductPrice = document.createElement("p");
    basketProductPrice.classList.add("basket-product__price");
    basketProductPrice.textContent = product.price;

    const basketProductPriceRuble = document.createElement("span");
    basketProductPriceRuble.innerText = "₽";
    basketProductPrice.append(basketProductPriceRuble);

    const basketProductDelete = document.createElement("a");
    basketProductDelete.classList.add("basket-product__delete");
    basketProductDelete.href = "#!";
    basketProductDelete.dataset.action = "delete";
    basketProductDelete.innerHTML = basketDelete;

    (function counter() {
        basketProductBottom.addEventListener('click', (e) => {
            e.preventDefault();
            const firstBasketProducTotalPrice = product.price;
            if (e.target.dataset.action == 'plus') {
                basketProductCounterInput.value = ++basketProductCounterInput.value;
                basketProducTotalPrice.innerText = firstBasketProducTotalPrice.replace(/\s/g, "") * basketProductCounterInput.value;
            } else if (e.target.dataset.action == 'minus') {
                basketProductCounterInput.value = --basketProductCounterInput.value;
                basketProducTotalPrice.innerText = basketProducTotalPrice.innerText.replace(/\s/g, "") - firstBasketProducTotalPrice.replace(/\s/g, "");
                if (basketProductCounterInput.value == 0) {
                    basketItem.remove()
                };
            }; 
            basketProducTotalPrice.innerText = new Intl.NumberFormat('ru-RU').format(basketProducTotalPrice.innerText);
        });
    }());

    (function deleteCard() {
        basketItem.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.dataset.action == 'delete') {
                basketItem.remove()
            }
        })
    }());



    basketProductGroup.append(basketProductTitle, basketProductPrice);
    basketProductInfo.append(basketProductImgBlock, basketProductGroup);
    basketProductCounter.append(basketProductCounterMinus, basketProductCounterInput, basketProductCounterPlus)
    basketProductBottom.append(basketProductCounter, basketProducTotal);
    basketProduct.append(basketProductInfo, basketProductBottom, basketProductDelete)
    basketItem.append(basketProduct)

    return basketItem

}