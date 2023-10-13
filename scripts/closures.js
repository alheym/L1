// задача 8

const functions = [() => 1, () => "Hello", () => 2, () => [3, 4, 5]];

// функция принимает на вход массив функций и возвращает анонимную функцию, которая вызывает функции из переданного массива и возвращает массив результатов используя map()
const closuresFunction = (functions) => () => functions.map((func) => func());

const combinedFunction = closuresFunction(functions); // переменная которая возвращенную из closuresFunction анонимную функцию
const result = combinedFunction();

console.log(result); // результат: [ 1, "Hello", 2, [ 3, 4, 5 ] ]
