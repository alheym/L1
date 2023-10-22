// функция для создания и добавления элемента из шаблона
function createElementFromTemplate() {
    // находим шаблон по его id
    const template = document.getElementById("myTemplate");

    // создаем копию содержимого шаблона
    const templateContent = document.importNode(template.content, true);

    // создаем новый элемент и добавляем копию содержимого шаблона в него
    const newElement = document.createElement("div");
    newElement.appendChild(templateContent);

    // добавляем новый элемент в DOM
    const container = document.getElementById("container");
    container.appendChild(newElement);
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", createElementFromTemplate);
