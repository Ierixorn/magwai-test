import {pristine} from './form-validation.js';
// import {sendSavedData} from './http.js';
// import {createSuccessMessage} from './messages.js';

const mainForm = document.querySelector('.request-form');

//Отключение и включение кнопки гланой формы
const submitButton = mainForm.querySelector('.request-form__submit-button');
const submitInside = submitButton.querySelector('.primary-style-button__inside');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitInside.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitInside.textContent = 'Опубликовать';
};


mainForm.addEventListener('submit', () => {
  evt.preventDefault();
  console.log('sss');
  // const isValid = pristine.validate();

  // if (isValid) {
  //   blockSubmitButton();
  //   sendSavedData(
  //     () => {
  //       createSuccessMessage();
  //       unblockSubmitButton();
  //     },
  //     () => {
  //       renderErrorMessage();
  //       unblockSubmitButton();
  //     },
  //     new FormData(mainForm),
  //   );
  // }
});
