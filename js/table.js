const inputs = document.querySelectorAll("INPUT");
console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    if (!inputs[i].value.match(/^[0-9]+$/)) {
      inputs[i].value = inputs[i].value.replace(
        /[aA-zZ @&=é"()-è_çà]{1,}/g,
        ""
      );
      return;
    }
    inputs[2].value = inputs[0].value * inputs[1].value;
    inputs[5].value = inputs[3].value * inputs[4].value;
    inputs[8].value = inputs[6].value * inputs[7].value;
    inputs[9].value =
      parseInt(inputs[2].value) +
      parseInt(inputs[5].value) +
      parseInt(inputs[8].value);
  });
}

inputs[10].addEventListener("click", () => {
  document.querySelector("ul").style.display = "none";
  document.querySelector("form").style.display = "none";
  let result = document.createElement("p");
  result.innerText = "le total est de => ";
  document.querySelector("body").appendChild(result);
  let total = document.createElement("span");
  total.innerText = inputs[9].value;
  result.appendChild(total);
});
