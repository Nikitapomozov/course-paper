import { getBasketEmpty } from "/src/js/components/basketEmpty/basketEmpty";
import { getBasketFull } from "/src/js/components/basketFull/basketFull";

// Страница корзины
export function getBasketPage() {

    const basketEmpty = getBasketEmpty()
    const basketFull = getBasketFull()


    if (data.length !== 0) {
        return basketFull
    } else {
        return basketEmpty
    }


}


