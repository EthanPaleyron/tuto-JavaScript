const inputs = document.querySelectorAll("INPUT");
for (const input of inputs) {
  input.addEventListener("keyup", (e) => {
    if (e.match(/^[0-9],"g"$/)) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
}

// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("change", () => {

//     });
// }
