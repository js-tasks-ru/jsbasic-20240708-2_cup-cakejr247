import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.render();
    this.addEventListener();
  }

  render() {
    this._container = createElement(`
    <div class='carousel'>
       <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map((slides) => `
          <div class="carousel__slide" data-id="${slides.id}">
           <img src="/assets/images/carousel/${slides.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
        <span class="carousel__price">€${slides.price.toFixed(2)}</span>
        <div class="carousel__title">${slides.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `)
        .join("")}
    </div>
    </div>
    `);
    
    this.updateArrows();
    this.updateSlidePosition();
  }

  addEventListener() {
    const rightArrow = this._container.querySelector(".carousel__arrow_right");
    const leftArrow = this._container.querySelector(".carousel__arrow_left");

    rightArrow.addEventListener("click", () => {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
        this.updateSlidePosition();
        this.updateArrows();
      }
    });

    leftArrow.addEventListener("click", () => {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.updateSlidePosition();
        this.updateArrows();
      }
    });

    const button = this._container.querySelectorAll(".carousel__button");

    button.forEach((button, index) => {
      button.addEventListener("click", () => {
        this._container.dispatchEvent(
          new CustomEvent("product-add", {
            detail: this.slides[index].id,
            bubbles: true,
          })
        );
      });
    });
  }

  updateSlidePosition() {
    const inner = this._container.querySelector(".carousel__inner");
    const slideWidth = inner.querySelector(".carousel__slide").offsetWidth;
    
    inner.style.transform = `translateX(-${this.currentSlideIndex * slideWidth}px)`;
  }

  updateArrows() {
    const leftArrow = this._container.querySelector(".carousel__arrow_left");
    const rightArrow = this._container.querySelector(".carousel__arrow_right");

    if (leftArrow && rightArrow) {
      leftArrow.style.display = this.currentSlideIndex === 0 ? "none" : "";
      rightArrow.style.display =
        this.currentSlideIndex === this.slides.length - 1 ? "none" : "";
    }
  }

  get elem() {
    return this._container;
  }
}
