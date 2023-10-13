// задача 10
const stringToJSON = (str) => {
  let currentIndex = 0; // переменная для отслеживания текущей позиции при парсинге строки

  // функция которая используется для пропуска пробелов в строке
  const skipSpaces = () => {
    while (currentIndex < str.length && /\s/.test(str[currentIndex])) {
      currentIndex++; // перемещаем текущую позицию до слудующего непробельного символа
    }
  };

  // фунция для парсинга строкового значения внутри кавычек
  const parseString = () => {
    let result = "";
    currentIndex++; // пропускаем открывающую кавычку и считываем все символы до закрывающейся кавычки
    while (currentIndex < str.length && str[currentIndex] !== '"') {
      result += str[currentIndex++];
    }
    currentIndex++; // пропускаем закрывающую кавычку
    return result;
  };

  // парсим числовое значение, считываем значения и преобразуем в тип float
  const parseNumber = () => {
    let result = "";
    while (currentIndex < str.length && /\d|\./.test(str[currentIndex])) {
      result += str[currentIndex++];
    }
    return parseFloat(result);
  };

  // парсим массив значений, так же пропускаем скобки, фозвращаем массив с полученными значениями
  const parseArray = () => {
    currentIndex++;
    const result = [];
    while (currentIndex < str.length && str[currentIndex] !== "]") {
      skipSpaces();
      result.push(parseValue());
      skipSpaces();
      if (str[currentIndex] === ",") {
        currentIndex++;
      }
    }
    currentIndex++;
    return result;
  };

  // парсим объеки значений, ыозвращаем  объект с парами ключ-значение
  const parseObject = () => {
    currentIndex++;
    const result = {};
    while (currentIndex < str.length && str[currentIndex] !== "}") {
      skipSpaces();
      const key = parseString();
      skipSpaces();
      currentIndex++;
      skipSpaces();
      const value = parseValue();
      result[key] = value;
      skipSpaces();
      if (str[currentIndex] === ",") {
        currentIndex++;
      }
    }
    currentIndex++;
    return result;
  };

  // функция для определения типа значения и вызова соответствующей функции
  const parseValue = () => {
    skipSpaces();
    if (str[currentIndex] === '"') {
      return parseString();
    } else if (/\d|\./.test(str[currentIndex])) {
      return parseNumber();
    } else if (str[currentIndex] === "[") {
      return parseArray();
    } else if (str[currentIndex] === "{") {
      return parseObject();
    } else if (str.substring(currentIndex, currentIndex + 4) === "true") {
      currentIndex += 4;
      return true;
    } else if (str.substring(currentIndex, currentIndex + 5) === "false") {
      currentIndex += 5;
      return false;
    } else if (str.substring(currentIndex, currentIndex + 4) === "null") {
      currentIndex += 4;
      return null;
    }
  };

  return parseValue();
};

const jsonString =
  '{"name":"John","age":30,"friends":["Alice","Bob"],"address":{"city":"New York","zip":10001}}';
const jsonObject = stringToJSON(jsonString);
console.log(jsonObject);

// результат:
// {
//     name: 'John',
//     age: 30,
//     friends: [ 'Alice', 'Bob' ],
//     address: { city: 'New York', zip: 10001 }
//   }
