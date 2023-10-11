// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.
const isStrangeNumber = (num) => {
  if (num <= 1) return false;

  // переменная для хранения суммы всех делителей числа num
  let sumOfDivisors = 0;

  for (let i = 1; i < num; i++) {
    // проверка на то, является ли число делителем числа num
    if (num % i === 0) sumOfDivisors += i; // если число является делителем числа num, то добавляем его в сумму
  }
  // проверка на то равна ли сумма делителей num
  return sumOfDivisors === num;
};

console.log(isStrangeNumber(6)); // Вывод: true, так как 6 = 1 + 2 + 3
console.log(isStrangeNumber(12)); // Вывод: false, так как 12 ≠ 1 + 2 + 3 + 4 + 6
