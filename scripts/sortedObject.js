const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 20 },
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
];

const sortedObject = people.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age; // сортировка по возрастанию возраста
  } else {
    return a.name.localeCompare(b.name); // сортировка по алфавиту имени
  }
});

console.log(sortedObject);

//   результат:
//   [
//     { name: 'Anna', age: 20 },
//     { name: 'Alice', age: 25 },
//     { name: 'John', age: 25 },
//     { name: 'John', age: 30 }
//   ]
