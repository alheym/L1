const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delayed to ${milliseconds / 1000} seconds`);
    }, milliseconds);
  });
};

const asyncFunction = async () => {
  try {
    console.log("Асинхронная функция запущена");
    const result1 = await delay(2000); // ждем 2 секунды
    console.log(result1);

    const result2 = await delay(3000); // ждем еще 3 секунды
    console.log(result2);

    return "Асинхронная функция завершена";
  } catch (error) {
    console.error("Ошибка в асинхронной функции:", error);
  }
};

// вызов асинхронной функции
asyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Ошибка в цепочке promise:", error);
  });

// результат
// Асинхронная функция запущена
// Delayed to 2 seconds
// Delayed to 3 seconds
// Асинхронная функция завершена
