import "./category.css";

// Категория
export function getCategory() {
    const categorySection = document.createElement("section");
    categorySection.classList.add("category");

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category__container", "container");

    const categoryText = document.createElement("p");
    categoryText.innerText = "Нет избранных товаров";

    categoryContainer.append(categoryText)
    categorySection.append(categoryContainer);

    return categorySection
}