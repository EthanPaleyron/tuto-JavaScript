let echiquier = document.querySelector(".echiquier");

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement("div");
    echiquier.appendChild(cell);
    if ((i + j) % 2 === 0) {
      cell.classList.add("case_white");
    } else {
      cell.classList.add("case_black");
    }
  }
}
