// изменение окончания слов
const changeEndingModule = (function () {
  // функция для изменения окончания в зависимости от числа
  const changeEnding = (number, endings) => {
    // проверяем правильный ли передан массив окончаний (единственное число, множественное для двух и множественное для более чем двух)
    if (!Array.isArray(endings) || endings.length !== 3) {
      throw new Error("Массив окончаний должен состоять из 3 элементов");
    }

    // определение падежа в зависимости от числа
    let index;
    if (number % 10 === 1 && number % 100 !== 11) {
      index = 0; // падеж единственного числа
    } else if (
      [2, 3, 4].includes(number % 10) &&
      ![12, 13, 14].includes(number % 100)
    ) {
      index = 1; // падеж для чисел оканчивающихся на 2, 3, 4 (кроме 12, 13, 14)
    } else {
      index = 2; // падеж для остальных случаев
    }

    // итоговая строка
    return `${number} ${endings[index]}`;
  };

  return {
    changeEnding,
  };
})();

// вызов функции
const number1 = 112;
const number2 = 12;
const number3 = 1;
const endings1 = ["сообщение", "сообщения", "сообщений"];
console.log(changeEndingModule.changeEnding(number1, endings1)); // результат: 112 сообщений
console.log(changeEndingModule.changeEnding(number2, endings1)); // результат: 12 сообщений
console.log(changeEndingModule.changeEnding(number3, endings1)); // результат: 1 сообщение

const number4 = 1024;
const number5 = 1026;
const number6 = 121;
const endings2 = ["пользователь", "пользователя", "пользователей"];
console.log(changeEndingModule.changeEnding(number4, endings2)); // результат: 1024 пользователя
console.log(changeEndingModule.changeEnding(number5, endings2)); // результат: 1026 пользователей
console.log(changeEndingModule.changeEnding(number6, endings2)); // результат: 121 пользователь
