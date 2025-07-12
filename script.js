const arrow = document.getElementById("arrow");
const enterBtn = document.getElementById("enter-btn");

const originalTransform = arrow.style.transform;

enterBtn.addEventListener("click", () => {
  arrow.style.transition = "transform 1.2s ease-in-out";
  arrow.style.transform = "translate(-50%, calc(-50% + 100vh))";

  setTimeout(() => {
    document.getElementById("mmenu").scrollIntoView({ behavior: "smooth" });
  }, 1200);

  setTimeout(() => {
    arrow.style.transform = originalTransform;
  }, 1800); // 👈 return faster
});

let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const products = document.querySelectorAll('.product');

document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
  if (currentSlide < products.length - 1) {
    currentSlide++;
    updateCarousel();
  }
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}vw)`;
}