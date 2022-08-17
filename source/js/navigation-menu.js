const navToggle = document.querySelector('.main-header__toggle');
const navigation = document.querySelector('.main-header__navigation')

navToggle.addEventListener('click', () => {
  navigation.classList.toggle('main-header__navigation--open');
})
