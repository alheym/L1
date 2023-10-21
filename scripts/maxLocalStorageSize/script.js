function getMaxLocalStorageSize() {
  // назначаем данные которыми будем заполнять localStorage и счетчик размера
  let data = "1";
  let size = 0;
  // помещаем в try-catch чтобы отловить ошибку, когда localStorage переполнится
  try {
    // запускаем бесконечный цикл
    while (true) {
      localStorage.setItem(data, data);
      data += data;
      size += data.length;
    }
  } catch (e) {
    localStorage.removeItem(data);
  }
  return size;
}
const localStorageSize = getMaxLocalStorageSize();
console.log("Максимальный размер localStorage: " + localStorageSize); // 4194302

// функция для очистки localStorage
function clearLocalStorage() {
  localStorage.clear();
}

clearLocalStorage();
