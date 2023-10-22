// функция для рекурсивного обхода дерева DOM
function traverseDOMTree(node, action) {
    // выполняем действие с текущим узлом
    action(node);

    // рекурсивно обходим всех детей текущего узла
    for (let i = 0; i < node.childNodes.length; i++) {
        traverseDOMTree(node.childNodes[i], action);
    }
}

// функция для вывода информации о теге в консоль
function logNodeInfo(node) {
    if (node.nodeType === 1) {
        // узел - элемент (тег)
        console.log("Element: " + node.tagName);
    } else if (node.nodeType === 3 && node.nodeValue.trim() !== "") {
        // узел - текстовое содержимое
        console.log("Text: " + node.nodeValue.trim());
    }
}

// начинаем обход с указанного элемента (id "container")
const container = document.getElementById("container");
traverseDOMTree(container, logNodeInfo);