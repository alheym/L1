// создаем узел односвязного списка
class ListNode {
  constructor(value) {
    this.value = value; // переменная для хранения значения
    this.next = null; // ссылка указывающая на следующий узел или null если узел последний
  }
}

// функция преобразования json-массива в односвязный список
const jsonToLinkedList = (json) => {
  //если массив пуст или не существует, возвращаем null
  if (!json || json.length === 0) {
    return null;
  }
  // создаем головной элемент(head), который инициализируется первым значением
  const head = new ListNode(json[0].value);
  // переменная для перемещения по списку, изначально указываем на головной элемент
  let current = head;
  // начинаем с 1 т.к. первый элемент уже определен и проходим по всем элементам массива
  for (let i = 1; i < json.length; i++) {
    // создаем новый элемент списка
    const newNode = new ListNode(json[i].value);
    // текущий элемент указывает на новый элемент через свойство next, это устанавливает связь между элементами
    current.next = newNode;
    // обновляем значение и указываем на новый элемент
    current = newNode;
  }
  // возвращаем головной элемент который содержитвсе элементы
  return head;
};

const json = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

console.log(jsonToLinkedList(json));

// результат:
//   {
//     "value": 1,
//     "next": {
//         "value": 2,
//         "next": {
//             "value": 3,
//             "next": {
//                 "value": 4,
//                 "next": null
//             }
//         }
//     }
// }
