// задача 12

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearOfPublication: 1925,

  // метод для получения названия книги
  getTitle: function () {
    return this.title;
  },

  // метод для установки нового названия книги
  setTitle: function (newTitle) {
    this.title = newTitle;
  },

  // метод для получения автора книги
  getAuthor: function () {
    return this.author;
  },

  // метод для установки нового автора книги
  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  // метод для получения года издания книги
  getYearOfPublication: function () {
    return this.yearOfPublication;
  },

  // метод для установки нового года издания книги
  setYearOfPublication: function (newYear) {
    this.yearOfPublication = newYear;
  },
};
console.log(book.getTitle()); // результат: "The Great Gatsby"
console.log(book.getAuthor()); // результат: "F. Scott Fitzgerald"
console.log(book.getYearOfPublication()); // результат: 1925

book.setTitle("Harry Potter");
book.setAuthor("J. K. Rowling");
book.setYearOfPublication(1997);

console.log(book.getTitle()); // результат: "Harry Potte"
console.log(book.getAuthor()); // результат: "J. K. Rowling"
console.log(book.getYearOfPublication()); // результат: 1997
