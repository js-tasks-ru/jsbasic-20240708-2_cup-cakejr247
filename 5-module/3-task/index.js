function initCarousel() {
  const carousel = document.querySelector('.carousel');
  
  if (!carousel) {
    console.error('Элемент с классом .carousel не найден');
    return;
  }

  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselRight = carousel.querySelector('.carousel__arrow_right');
  const carouselLeft = carousel.querySelector('.carousel__arrow_left');
  const slides = carouselInner.children;
  const slidesCount = slides.length;
  
  if (slidesCount === 0) {
    console.error('В карусели нет слайдов');
    return;
  }

  const slideWidth = slides[0].offsetWidth;
  let currentSlide = 0;

  carouselLeft.style.display = 'none'; // Изначально скрываем кнопку "назад"

  carouselRight.addEventListener('click', () => {
    if (currentSlide < slidesCount - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  carouselLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const offset = -currentSlide * slideWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;

    carouselLeft.style.display = currentSlide === 0 ? 'none' : '';
    carouselRight.style.display = currentSlide === slidesCount - 1 ? 'none' : '';
  }
}

initCarousel();

