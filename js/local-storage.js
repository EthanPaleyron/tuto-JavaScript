const span = document.querySelector("span");
let i = parseInt(localStorage.getItem("counteur"));
span.innerText = `${i}`;
if (!i) {
  localStorage.setItem("counteur", 1);
} else {
  localStorage.setItem("counteur", i + 1);
}
span.innerText = localStorage.getItem("counteur");
