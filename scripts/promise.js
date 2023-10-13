// задача 14

const loadImage = (url) => {
// создаем новый промис, который разрешается, когда изображение успешно загружено и отклоняется в случае ошибки
  return new Promise((resolve, reject) => {
    // создаем новый объект Image
    const image = new Image();

    // обработчик успешной загрузки изображения
    image.onload = () => {
        // разрешаем промис и передаем информацию о загруженном изображении
      resolve({
        width: image.width,
        height: image.height,
        src: url,
      });
    };

    // устанавливаем обработчик ошибки
    image.onerror = () => {
        // отклоняем промис с информацией об ошибке
      reject(new Error("Ошибка загрузки изображения."));
    };

    // передаем адрес изображения 
    image.src = url;
  });
};

const imageUrl =
  "https://animals.pibig.info/uploads/posts/2023-04/1681762827_animals-pibig-info-p-milie-kotiki-na-rabochii-stol-zhivotnie-kr-1.jpg";
loadImage(imageUrl)
  .then((data) => {
    console.log("Изображение загружено:", data);
  })
  .catch((error) => {
    console.error("Ошибка загрузки изображения:", error);
  });

// результат
// Изображение загружено:
// {
//     "width": 1920,
//     "height": 1080,
//     "src": "https://animals.pibig.info/uploads/posts/2023-04/1681762827_animals-pibig-info-p-milie-kotiki-na-rabochii-stol-zhivotnie-kr-1.jpg"
// }
