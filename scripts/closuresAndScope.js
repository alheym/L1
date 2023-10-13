// задача 11

const outerFunction = () => {
  let externalVariable = 11;

  const innerFunction = () => {
    // dнутренняя функция имеет доступ к externalVariable
    console.log(externalVariable);
  };

  return innerFunction;
};

// cоздаем замыкание, сохраняя внутреннюю функцию
const closure = outerFunction();
closure(); // результат: 11
