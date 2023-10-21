// функция для определения глубины стека вызовов
function measureCallStackDepth() {
  try {
    // рекурсивно вызываем функцию, пока не произойдет переполнение стека
    return 1 + measureCallStackDepth();
  } catch (e) {
    // исключение произойдет при переполнении стека
    return 0;
  }
}

const stackDepth = measureCallStackDepth();
console.log("Глубина стека вызовов:", stackDepth); // Глубина стека вызовов: 11414
