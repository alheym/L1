// задача 7
const functions = [
  () => {
    console.log(" Функция 1");
  },
  () => {
    console.log(" Функция 2");
  },
  () => {
    console.log(" Функция 3");
  },
];

const callFunctionsInOrder = (index) => {
  if (index < functions.length) {
    console.log("Вызов функции с номером:", index + 1); // выводим порядковый номер функцмм
    functions[index](); // вызываем функцию по текущему индексу
    console.log("---"); // разделитель для визуала
    callFunctionsInOrder(index + 1); // рекурсивно вызываем следующую функцию
  }
};

callFunctionsInOrder(0);
