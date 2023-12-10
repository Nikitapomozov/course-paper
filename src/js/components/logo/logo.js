import { router } from "/src/js/main"
import "./logo.css"

// Создать логотип
export function getLogo() {
    const logo = document.createElement("a");
    logo.href = "#!"
    logo.classList.add("logo");
    logo.innerText = 'qpick'

    logo.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate("/");
    })

    return logo;
}