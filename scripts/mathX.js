const MathX = (function () {
  // проверка на простое число
  const isPrime = (num) => {
    if (num <= 1) return false; // если число меньше или равно 1, оно не является простым
    if (num <= 3) return true; // числа 2 и 3 являются простыми

    if (num % 2 === 0 || num % 3 === 0) return false; // если число делится на 2 или 3, оно не является простым

    let i = 5; // используем оптимизацию, проверяя числа имеющие вид 6k +- 1, начинаем с 5 т.к. первое простое число после 3 это 5 (6 * 1 - 1)
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false; // если num делится на i или i + 2 нацело, то функция возвращает false
      i += 6; // увеличиваем i на 6 для перехода к следующему потенциально простому числу
    }
    return true;
  };

  // вычисление N-го числа в ряду Фибоначчи
  const fibonacciNth = (n) => {
    if (n <= 1) return n; // первые два числа в ряду Фибоначчи равны 0 и 1

    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };

  // Возвращаем объект с доступными функциями
  return {
    isPrime,
    fibonacciNth,
  };
})();

console.log(MathX.isPrime(6));
console.log(MathX.fibonacciNth(10)); // Выведет 55
