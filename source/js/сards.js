import {getData} from './http.js';
import {saveData, getSavedData, getMaxData} from './save-http-data.js';

const showMoreButton = document.querySelector('.cards-section__show-more-button');
const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.cards-list__item');


// создать карточку
const createNewsCard = (data) => {
  data.forEach((element) => {
    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector('img').src = element.image;
    newCard.querySelector('.card__description').textContent = element.text;
    newCard.querySelector('b').textContent = element.author;
    newCard.querySelector('#post-date').textContent = element.date;

    newCard.classList.add('cards-list__item--fade-in')

    document.querySelector('.cards-section__list').appendChild(newCard);
  })
}

//Отключение и включение кнопки загрузить
const blockShowMoreButton = () => {
  showMoreButton.disabled = true;
  showMoreButton.textContent = 'Загружаю...';
};

const unblockShowMoreButton = () => {
  showMoreButton.disabled = false;
  showMoreButton.textContent = 'Загрузить еще';
};

//Загрузить данные и поместить карточки на страницу
showMoreButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  getData(
    (data) => {
      saveData(data);
      blockShowMoreButton();
      createNewsCard(getMaxData());
      unblockShowMoreButton();
  },
    () => {
      console.log('пиздец');
  },)
})
