import "./pageContainer.css";

// Контейнер для страниц
export function getPageContainer() {
    const main = document.createElement("main");
    main.classList.add("page");
    
    return main
}