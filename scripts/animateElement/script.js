// функция для добавления анимации изменения размера элемента
function animateElement() {
    const animatedElement = document.getElementById("animatedElement");
    
    // изменяем размер элемента
    if (animatedElement.style.width === "100px") {
        animatedElement.style.width = "200px";
        animatedElement.style.height = "200px";
    } else {
        animatedElement.style.width = "100px";
        animatedElement.style.height = "100px";
    }
}

const animateButton = document.getElementById("animateButton");
animateButton.addEventListener("click", animateElement);