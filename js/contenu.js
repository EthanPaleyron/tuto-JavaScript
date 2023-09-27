const contenu = document.querySelector("#contenu");
const lists = document.querySelectorAll("li");
for (const li of lists) {
  li.addEventListener("click", () => {
    // lists.classList.remove("selected");
    li.classList.add("selected");
    contenu.innerText = li.value;
  });
}
