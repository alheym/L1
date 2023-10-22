// подсчет объема данных в localStorage
export function calculateLocalStorageSize() {
  let totalSize = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += (key.length + localStorage[key].length) * 2; // нмножаем на 2 из-за хранения данных в формате UTF-16
    }
  }
  return (totalSize / 1024).toFixed(2) + " KB"; // преобразуем в KB
}
