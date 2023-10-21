import { data } from "./moments.js";

const { formatDate, addDays } = data;

// Форматирование даты
const formatDateButton = document.getElementById("formatDateButton");
const inputDate = document.getElementById("inputDate");
const formattedDateResult = document.getElementById("formattedDateResult");

formatDateButton.addEventListener("click", () => {
    const inputDateValue = inputDate.value;
    if (inputDateValue) {
        const date = new Date(inputDateValue);
        const formatted = formatDate(date, "DD/MM/YYYY");
        formattedDateResult.textContent = formatted;
    }
});

// Добавление дней
const addDaysButton = document.getElementById("addDaysButton");
const inputDateForAdd = document.getElementById("inputDateForAdd");
const daysToAdd = document.getElementById("daysToAdd");
const addedDateResult = document.getElementById("addedDateResult");

addDaysButton.addEventListener("click", () => {
    const inputDateValue = inputDateForAdd.value;
    const daysToAddValue = parseInt(daysToAdd.value, 10);

    if (inputDateValue && !isNaN(daysToAddValue)) {
        const date = new Date(inputDateValue);
        const newDate = addDays(date, daysToAddValue);
        const formatted = formatDate(newDate, "DD/MM/YYYY");
        addedDateResult.textContent = formatted;
    }
});