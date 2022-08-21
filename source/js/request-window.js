const requestWindow = document.querySelector('.site-body__modal-wrapper');
const closeButton = document.querySelector('.request-form__close-button');

const removeClass = () => {
  requestWindow.classList.remove('site-body__modal-wrapper--opened');
}

const closeWindow = () => {
  requestWindow.classList.remove('site-body__modal-wrapper--fade-in')
  requestWindow.classList.add('site-body__modal-wrapper--fade-out');
  setTimeout(removeClass, 390)
  requestWindow.classList.add('site-body__modal-wrapper--closed');
  closeButton.removeEventListener('click', closeWindow);
}

document.body.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.dataset.request === "open") {
    requestWindow.classList.remove('site-body__modal-wrapper--fade-out')

    requestWindow.classList.add('site-body__modal-wrapper--opened');
    requestWindow.classList.add('site-body__modal-wrapper--fade-in')

    closeButton.addEventListener('click', closeWindow);
  }
})
