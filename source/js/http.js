const REQUEST_ADDRESS = 'https://my-json-server.typicode.com/Ierixorn/demoJson/news';
const SENDING_ADDRESS = '"https://echo.htmlacademy.ru"';

//Запросить данные с сервера
const getData = (onSuccess, onFail) => {
  fetch(REQUEST_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return  response.json();
      } else {
        throw new Error('Не удалось загрузить данные.');
      }
    })
    .then((news) => {
      onSuccess(news);
    })
    .catch(() => {
      onFail();
    });
};

// Сбор и отправка данных на сервер
const sendSavedData = (onSuccess, onFail, body) =>{
  fetch(
    SENDING_ADDRESS,
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendSavedData};
