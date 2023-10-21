const searchInput = document.querySelector('.search-input');
const list = document.querySelector('.location');
const selectedAddress = document.querySelector('.selected-address');


//функция для выполнения запроса к API
const fetchData = async (query) => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const api_key = '0f6deb262d2fd720e02d2008a29c3d2609b1081b';
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${api_key}`,
          },
        body: JSON.stringify({query: query})
      }
      const response = await fetch(url, options);
      const data = await response.json();
      return data.suggestions;
}

// функция обработчик для выполнения запроса и получения его результата
const getAddresses = async () => {
    const query = searchInput.value;
    const adresses = await fetchData(query);
    return adresses;
}

// функция которая принимает массив адресов и отображает их на странице
const displayAddresses = (addresses) => {
    list.innerHTML = '';
    // если массив пустой, то возвращаем сообщение
    if (addresses.length === 0) {
        list.innerHTML = '<p>Ничего не найдено</p>';
    } else {
        addresses.forEach((address) => {
            const li = document.createElement('li');
            li.innerHTML = `<div class="adress">${address.value}</div>`;
            list.appendChild(li);
        });
    }
}

// выводим адрес который был выбран пользователем
list.addEventListener('click', (e) => {
    if (e.target.className === 'adress') {
        selectedAddress.textContent = e.target.textContent;
    }
});

const debounce = (func, delay) => {
    let timeout;

    return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
    }
}

const throttle = (func, delay) => {
    let isThrottled = false;
    let savedArgs; 

    return function wrapper(...args) {
        if(isThrottled) {
            savedArgs = args;
            return;
        }

        func(...args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if(savedArgs) {
                wrapper(savedArgs);
                savedArgs = null;
            }
        }, delay);
    }
}

searchInput.addEventListener('keyup', debounce(async () => {
    displayAddresses(await getAddresses());
}, 300));
// searchInput.addEventListener('keyup', throttle(async() => {
//     displayAddresses(await getAddresses())
// }, 300));