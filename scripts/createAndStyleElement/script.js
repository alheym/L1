// функция для создания элемента, добавления в DOM и установки стиля
function createAndStyleElement() {
    // создаем новый элемент - div
    const newElement = document.createElement("div");

    // устанавливаем стили для элемента с помощью CSS
    newElement.style.width = "100px";
    newElement.style.height = "100px";
    newElement.style.backgroundColor = "blue";
    newElement.style.color = "white";
    newElement.style.textAlign = "center";
    newElement.style.lineHeight = "100px";
    newElement.textContent = "Styled Element";

    // добавляем элемент в DOM, внутрь элемента с id "container"
    const container = document.getElementById("container");
    container.appendChild(newElement);
}

const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createAndStyleElement);