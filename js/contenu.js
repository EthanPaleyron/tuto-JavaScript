const contenu = document.querySelector("#contenu");
const lists = document.querySelectorAll("li");
for (const li of lists) {
  li.addEventListener("click", () => {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("selected");
    }
    li.classList.add("selected");
    contenu.innerText = li.value;
  });
}
