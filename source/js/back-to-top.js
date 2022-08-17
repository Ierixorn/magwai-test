const toTopButton = document.querySelector('.back-on-top');

window.addEventListener('scroll', () => {
  toTopButton.classList.toggle('back-on-top--active', window.scrollY > 100);
})

toTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
