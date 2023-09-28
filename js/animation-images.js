const img = document.querySelector("img");
let imgs = ["public/img1.png", "public/img2.png", "public/img3.png"];
let index = 0;
setInterval(() => {
  img.src = imgs[index % imgs.length];
  index++;
}, 1000);
