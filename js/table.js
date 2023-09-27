const inputs = document.querySelectorAll("INPUT");
console.log(inputs);
for (const input of inputs) {
  input.addEventListener("keyup", (e) => {
    input.match(/^[0-9],"g"$/);
  });
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", () => {
    inputs[2].value = parseInt(inputs[0].value) * parseInt(inputs[1].value);
    inputs[5].value = parseInt(inputs[3].value) * parseInt(inputs[4].value);
    inputs[8].value = parseInt(inputs[6].value) * parseInt(inputs[7].value);
    inputs[9].value =
      parseInt(inputs[2].value) +
      parseInt(inputs[5].value) +
      parseInt(inputs[9].value);
  });
}
