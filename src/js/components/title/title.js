import "./title.css";

export function getTitle(text, className) {
    const title = document.createElement("h1");
    title.classList.add(className,"title");
    title.innerText = text;

    return title
}