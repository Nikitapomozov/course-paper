import { getTitle } from '/src/js/components/title/title';
import { getBasketProduct } from '/src/js/components/basketProduct/basketProduct';
import './basketFull.css'


export function getBasketFull() {

    //Добавить массив в локал сторедж и можно будет брать оттуда данные во всех функциях



    const page = document.createElement("div");
    page.classList.add("page__basket", "basket");


    const pageContainer = document.createElement("div");
    pageContainer.classList.add("basket__container", "container");

    const basketTitle = getTitle("Корзина", "basket-page__title");

    const basketInner = document.createElement("div");
    basketInner.classList.add("basket__inner");

    const basketBox = document.createElement("div");
    basketBox.classList.add("basket__box");

    const basketList = document.createElement("ul");
    basketList.classList.add("basket__list");

    const basketTotal = document.createElement("div");
    basketTotal.classList.add("basket__total");

    const basketTotalText = document.createElement("p");
    basketTotalText.classList.add("basket__total-text");

    const basketTotalSpan = document.createElement("span");
    basketTotalSpan.innerText = "ИТОГО";

    const basketTotalSpanPrice = document.createElement("p");
    basketTotalSpanPrice.classList.add("basket__total-price");

    const basketTotalBtn = document.createElement("a");
    basketTotalBtn.href = "#!";
    basketTotalBtn.classList.add("basket__total-btn");
    basketTotalBtn.innerText = "Перейти к оформлению";

    basketInner.append(basketBox);
    basketBox.append(basketList);

    basketTotalText.append(basketTotalSpan, basketTotalSpanPrice);
    basketTotal.append(basketTotalText, basketTotalBtn);

    basketInner.append(basketBox, basketTotal);
    pageContainer.append(basketTitle, basketInner);

    page.append(pageContainer);

    for (const product of data) {
        const basketItem = getBasketProduct(product)
        basketList.append(basketItem)
    }

    if (data.length !== 0) {
        let amount = data
            .map((x) => {
                let { item, id } = x;
                let search = data.find((y) => y.id === id) || [];

                return item * search.price.replace(/\s/g, "");
            })
            .reduce((x, y) => x + y, 0);

        amount = new Intl.NumberFormat('ru-RU').format(amount);
        basketTotalSpanPrice.innerText = amount;

        const basketTotalSpanPriceRuble = document.createElement("span");
        basketTotalSpanPriceRuble.innerText = "₽";
        basketTotalSpanPrice.append(basketTotalSpanPriceRuble);

    }



    return page

}

