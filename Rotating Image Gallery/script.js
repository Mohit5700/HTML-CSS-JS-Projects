const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".btn--prev");
const nextEl = document.querySelector(".btn--next");

let x = 0;

let timer;

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

prevEl.addEventListener("click", () => {
  x += 45;
  clearInterval(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x -= 45;
  clearInterval(timer);
  updateGallery();
});

timer = setInterval(() => {
  x -= 45;
  updateGallery();
}, 3000);
