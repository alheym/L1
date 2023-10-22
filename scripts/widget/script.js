import { calculateLocalStorageSize } from "./localStorage.js";

const ACCESS_TOKEN = "accessToken";
const GROUP_ID = "64900887";
const MAX_CACHED_POSTS = 100;
const POSTS_COUNT = 5;

const widget = document.getElementById("widget");
const postList = document.getElementById("postList");

// переменные состояния
let offset = 0;
let cache = [];
let isFetching = false;

// обработчик ответа
function handleResponse(result) {
  isFetching = false;

  if (result.error) {
    // обработка ошибки, например, отображение сообщения на странице
    console.error(result.error.error_msg);
    return;
  }

  // получаем новые посты и сохраняем их в кеш
  const newPosts = result.response.items;
  cache = cache.concat(newPosts);
  offset += POSTS_COUNT;

  // удаление старых постов, если превышен лимит кэша
  if (cache.length > MAX_CACHED_POSTS) {
    const postsToRemove = cache.length - MAX_CACHED_POSTS;
    cache.splice(0, postsToRemove);
  }

  displayPosts(newPosts);

  // обновление кэшированных данных
  localStorage.setItem("cachedPosts", JSON.stringify(cache));
  localStorage.setItem("cachedOffset", offset);

  // функция для подсчета размера localStorage
  const localStorageSize = calculateLocalStorageSize();
  console.log(`Размер данных в localStorage: ${localStorageSize}`);
}

window.handleResponse = handleResponse;

// получение постов
function fetchPosts() {
  // проверка наличия кэшированных данных
  const cachedPosts = localStorage.getItem("cachedPosts");
  const cachedOffset = +localStorage.getItem("cachedOffset");
  if (cachedPosts && cachedOffset !== offset) {
    offset = cachedOffset;
    cache = JSON.parse(cachedPosts);
    displayPosts(cache);
    return;
  }

  // запрос на получение новых постов
  makeJSONPRequest(handleResponse);
}

// отображение постов
function displayPosts(posts) {
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    const imageURL =
      post.attachments[0]?.photo?.sizes[0].url ||
      "https://www.aleanamebel.ru/upload/iblock/c20/c2043ce328239194370b8e390f2891b2.png";
    const postItem = document.createElement("li");
    const imageWrapper = document.createElement("div");
    const image = document.createElement("img");
    image.src = imageURL;
    image.alt = "Изображение";
    imageWrapper.appendChild(image);
    postItem.appendChild(imageWrapper);

    const text = document.createElement("p");
    text.textContent = post.text;
    postItem.appendChild(text);

    fragment.appendChild(postItem);
  });
  postList.appendChild(fragment);
}

const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// обработчик события прокрутки
widget.addEventListener(
  "scroll",
  debounce(() => {
    const isScrolledToBottom =
      widget.scrollTop + widget.clientHeight + 10 >= widget.scrollHeight;
    if (!isFetching && isScrolledToBottom) {
      fetchPosts();
    }
  }, 200)
);

fetchPosts();

// отправка запроса
function makeJSONPRequest(callback) {
  isFetching = true;
  const script = document.createElement("SCRIPT");
  script.src = `https://api.vk.com/method/wall.get?owner_id=-${GROUP_ID}&count=${POSTS_COUNT}&offset=${offset}&access_token=${ACCESS_TOKEN}&v=5.131&callback=${callback.name}`;
  document.head.append(script);
}
