function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselRight = document.querySelector('.carousel__arrow_right');
  const carouselLeft = document.querySelector('.carousel__arrow_left');
  
  const slides = carouselInner.children;
  const slidesCount = slides.length;
  const slideWidth = slides[0].offsetWidth;
  
  let currentSlide = 0;

  carouselLeft.style.display = 'none';

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
