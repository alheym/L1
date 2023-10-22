// функция, которая обрабатывает отправку формы
function handleSubmit(e) {
    e.preventDefault(); // отключаем перезагрузку страницы

    // получаем значения из формы
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // вызов всплывающего окна
    alert(`Name: ${name}\nEmail: ${email}`);
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
