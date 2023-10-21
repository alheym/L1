export const data = {
  // функция для форматирования даты
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  // функция для добвления дней
  addDays: function (date, days) {
    return moment(date).add(days, "days").toDate();
  },
};
