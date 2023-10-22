const URL = 'http://www.filltext.com/?rows=1000&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true';

// Получаем элементы DOM
const tableWrapper = document.querySelector('.wrapper');
const pagination = document.querySelector('.pagination');
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.classList.add('table');
tableWrapper.appendChild(table);

// Режимы сортировки
const sortModes = {
    none: 'none',
    ascending: 'ascending',
    descending: 'descending'
};

// Переменные состояния
let sortMode = sortModes.none;
let activeSortingID = '';
let itemsAll = [];
let itemsPerPage = 50;
let currentPage = 1;

fetchItems().then(res => {
    itemsAll = res;
    renderTable(itemsAll, currentPage);
});

// Функция для загрузки данных с сервера
async function fetchItems() {
    try {
        const result = await fetch(URL);
        const json = await result.json();
        return json;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Функция для создания кнопок пагинации
function createPagination(items, currentPage, itemsPerPage) {
    const pages = Math.ceil(items.length / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= pages; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            currentPage = i;
            renderTable(items, currentPage);
            updatePaginationButtons(i); // Передаем i для обновления активной кнопки
        });

        pagination.appendChild(button);
    }
}

// Функция для обновления состояния кнопок пагинации
function updatePaginationButtons(currentPage) {
    const buttons = pagination.querySelectorAll('.pagination-button');
    buttons.forEach(button => {
        if (parseInt(button.textContent) === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Функция для создания таблицы
function renderTable(items, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = items.slice(startIndex, endIndex);

    table.innerHTML = '';
    renderTableHead(itemsToRender);
    renderTableBody(itemsToRender);
    createPagination(items, page, itemsPerPage);
}

// Функция для создания заголовка таблицы
function renderTableHead(items) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    for (const key in items[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        th.classList.add('sort-none');
        th.addEventListener('click', () => {
            onSortClick(key);
        });
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);
}

// Функция для создания тела таблицы
function renderTableBody(items) {
    const tbody = document.createElement('tbody');
    items.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}

// Функция для обработки события сортировки
function onSortClick(property) {
    if (activeSortingID === property) {
        sortMode = sortMode === sortModes.ascending ? sortModes.descending : sortModes.ascending;
    } else {
        sortMode = sortModes.ascending;
        activeSortingID = property;
    }

    itemsAll.sort((a, b) => {
        if (sortMode === sortModes.ascending) {
            return a[property] < b[property] ? -1 : 1;
        } else if (sortMode === sortModes.descending) {
            return a[property] > b[property] ? -1 : 1;
        }
        return 0;
    });

    renderTable(itemsAll, currentPage);
    updateSortIcons(property);
}

// Функция для обновления иконок сортировки
function updateSortIcons(activeProperty) {
    const thList = table.querySelectorAll('th');
    thList.forEach(th => {
        if (th.textContent === activeProperty) {
            th.classList.remove('sort-none');
            th.classList.add(`sort-${sortMode}`);
        } else {
            th.classList.remove('sort-ascending', 'sort-descending');
            th.classList.add('sort-none');
        }
    });
}
