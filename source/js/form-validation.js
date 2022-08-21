//Базовая валидация на всю форму
const mainForm = document.querySelector('.request-form');
const pristine = new Pristine(mainForm, {
  classTo: 'input-wrapper',
  errorClass: 'input-wrapper--invalid',
  successClass: 'input-wrapper--valid',
  errorTextParent: 'input-wrapper',
  errorTextClass: 'input-wrapper-text-error'
});

//Дополнительная анимация псевдо-placeholder в input при валидации
mainForm.addEventListener('change', (evt) => {
  const inputWrapper = evt.target.closest('.input-wrapper');
  const inputSpan = inputWrapper.querySelector('.input-wrapper__span')

  inputSpan.style.fontSize = '12px';
  inputSpan.style.color = '#ffffff';
  inputSpan.style.transform = 'translateY(-7px)';

  if (evt.target.value === '') {
    inputSpan.removeAttribute('style');
  }
})

export {pristine};
