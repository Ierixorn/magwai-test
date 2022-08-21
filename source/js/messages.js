SUCCESS_MESSAGE = 'Форма успешно отправлена!'

const messageTemplate = document.querySelector('#message').content;
const message = messageTemplate.querySelector('.site-body__modal-wrapper');

const removeSuccessMessage = () => {
  document.removeEventListener('click', removeSuccessMessage)
  document.querySelector('#modal-message').remove()
}

const createSuccessMessage = () => {
  const newCard = message.cloneNode(true);

  message.querySelector('.form-message').textContent = SUCCESS_MESSAGE;
  document.addEventListener('click', removeSuccessMessage)

  document.querySelector('.cards-section__list').appendChild(newCard);
}

export{createSuccessMessage};
