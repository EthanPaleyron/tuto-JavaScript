const img = document.querySelector("img");
let index = 1;
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
  }
  img.src = `public/anim${index}.jpg`;
});
arrowRight.addEventListener("click", () => {
  if (index < 6) {
    index++;
  }
  img.src = `public/anim${index}.jpg`;
});
