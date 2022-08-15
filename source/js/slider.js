const buttons = document.querySelectorAll("[data-slider-button]");

const addPaginationSpanClass = (index) => {
  const paginationSpans = document.querySelectorAll('.pagination-list__span');

  paginationSpans.forEach(span => {
    span.classList.remove('pagination-list__span--current');
  })

  paginationSpans[index].classList.add('pagination-list__span--current')
}


const changePagenationItem = (slide) => {
  if(slide.classList.contains('primary-list__item--space')){
    addPaginationSpanClass(0)
  }

  if(slide.classList.contains('primary-list__item--night-car')){
    addPaginationSpanClass(1)
  }

  if(slide.classList.contains('primary-list__item--dollars')){
    addPaginationSpanClass(2)
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest('[data-slider]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    const slide = slides.children[newIndex];
    changePagenationItem(slide);
  })
})
