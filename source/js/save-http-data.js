const SLICE_COUNT = 6;

//хранилище данных с сервера
let savedData = [];

//Сохранить данные пришедшие с сервера
const saveData = (data) => {
  savedData = data;
};

//Получить массив определённой длины
const getMaxData = () => savedData.slice(0, SLICE_COUNT);

//Получить сохраннённые данные с сервера
const getSavedData = () => savedData;

export {saveData, getSavedData, getMaxData};
