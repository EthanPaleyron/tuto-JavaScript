let content = document.querySelector(".content_green");
let souris = document.getElementById("souris");

content.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  souris.style.transform = `translate(${x - 25}px,${y - 150}px)`;
  e.preventDefault();
});
