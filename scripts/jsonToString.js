// задача 9

const json = {
  name: "John",
  age: 30,
  friends: ["Alice", "Bob"],
  address: {
    city: "New York",
    zip: 10001,
  },
};

const convertJSONToString = (json) => {
  if (typeof json === "string") {
    // если элемент является строкой, то заключаем его в кавычки и возвращаем
    return `"${json}"`;
  } else if (Array.isArray(json)) {
    // если элемент является массивом, рекурсивно вызываем функцию для каждого элемента
    const arrayString = json.map((item) => convertJSONToString(item)).join(",");
    return `[${arrayString}]`;
  } else if (typeof json === "object" && json !== null) {
    // если элемент является объектом, рекурсивно вызываем функцию для каждого свойства
    const objectString = Object.entries(json)
      .map(([key, value]) => `"${key}":${convertJSONToString(value)}`)
      .join(",");
    return `{${objectString}}`;
  } else {
    // все остальные случаи просто преобразуем в строку
    return String(json);
  }
};

const jsonToString = convertJSONToString(json);
console.log(jsonToString);
