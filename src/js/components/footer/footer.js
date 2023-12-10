import { getLogo } from "/src/js/components/logo/logo";
import "./footer.css";
import { router } from "/src/js/main"
import telegramSVG from "bundle-text:/src/assets/img/telegram-fill-svgrepo-com.svg"
import vkSVG from "bundle-text:/src/assets/img/vk-fill-svgrepo-com.svg"

// Получить подвал 
export function getFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const container = document.createElement("div");
    container.classList.add("footer__container", "container");

    const footerWrapper = document.createElement("div");
    footerWrapper.classList.add("footer__wrapper");

    const footerBox = document.createElement("div");
    footerBox.classList.add("footer__box");

    const footerSocial = document.createElement("div");
    footerSocial.classList.add("footer__socials");

    const footerList = document.createElement("ul");
    footerList.classList.add("footer__list");

    const footerItem = document.createElement("li");
    footerItem.classList.add("footer__item");

    const footerSocialList = document.createElement("ul");
    footerSocialList.classList.add("footer__social-list");

    const logo = getLogo();
    logo.classList.add("footer__logo");

    function navigationLink() {

        function getNavigationLink(path, title = "") {
            const footerItem = document.createElement("li")
            footerItem.classList.add("footer__item")
            let footerLink = document.createElement("a")
            footerLink.href = path
            footerLink.classList.add("footer__link")
            footerLink.textContent = title
            footerLink.addEventListener("click", function (event) {
                event.preventDefault()
                router.navigate(path);
            })

            footerItem.append(footerLink)
            return footerItem
        }

        const links = {
            "home": getNavigationLink("/favourites", "Избранное"),
            "catalog": getNavigationLink("/basket", "Корзина"),
            "contacts": getNavigationLink("/contacts", "Контакты")
        }

        for (const oneLink in links) {
            footerList.append(links[oneLink])
        }
    }

    function socialLink() {

        function getSocialLink(path, icon) {
            const footerSocialItem = document.createElement("li")
            footerSocialItem.classList.add("footer__social-item")
            let footerSocialLink = document.createElement("a")
            footerSocialLink.href = path
            footerSocialLink.classList.add("footer__social-link")
            footerSocialLink.innerHTML = icon;
   
            footerSocialItem.append(footerSocialLink)
            return footerSocialItem
        }

        const links = {
            "telegram": getSocialLink("https://t.me/kyotokyoqe", telegramSVG),
            "vk": getSocialLink("https://vk.com/kyotokyoqe", vkSVG),
        }

        for (const oneLink in links) {
            footerSocialList.append(links[oneLink])
        }
    }

    navigationLink();
    socialLink();


    footerSocial.append(footerSocialList);
    footerBox.append(footerList)
    footerWrapper.append(logo, footerBox, footerSocial);
    container.append(footerWrapper);
    footer.append(container);

    return footer
}