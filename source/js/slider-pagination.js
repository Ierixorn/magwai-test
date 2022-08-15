const paginationList = document.querySelector('.pagination-list');
const paginationSpan = paginationList.querySelectorAll('.pagination-list__span');

const isSpanCurrent = (evt) => evt.target.classList.contains('pagination-list__span--current');

const lookPaginationSpan = (evt) => {
  switch (evt.target.textContent) {
    case 'Dogie Coin':
      return 0;
    case 'Падение':
      return 1;
    case 'Возвращение':
      return 2;
  }
}

paginationList.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (!isSpanCurrent(evt)) {

    paginationSpan.forEach(span => {
      span.classList.remove('pagination-list__span--current');
    })

    evt.target.classList.add('pagination-list__span--current');

    const selectedItem = lookPaginationSpan(evt);
    const slides = document.querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]')
    slides.children[selectedItem].dataset.active = true;
    delete activeSlide.dataset.active;
  }
})
