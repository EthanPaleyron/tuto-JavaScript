const s = document.querySelector("#s");
const ms = document.querySelector("#ms");
s.innerText = "00";
ms.innerText = "00";
let msSec = 0;
let sec = 0;
let timer;
let memoS = 0;
let memoMs = 0;

const start = document.querySelector("#start").addEventListener("click", () => {
  timer = setInterval(() => {
    msSec++;
    ms.innerText = msSec;
    if (msSec === 99) {
      msSec = 0;
      sec++;
      s.innerText = sec;
    }
  }, 10);
  document.querySelector("#start").disabled = true;
  document.querySelector("#clear").disabled = true;
  document.querySelector("#memorize").disabled = true;
  document.querySelector("#reminder").disabled = true;
});

const stop = document.querySelector("#stop").addEventListener("click", () => {
  document.querySelector("#start").disabled = false;
  document.querySelector("#clear").disabled = false;
  document.querySelector("#memorize").disabled = false;
  clearInterval(timer);
});

const clear = document.querySelector("#clear").addEventListener("click", () => {
  s.innerText = "00";
  ms.innerText = "00";
  sec = 0;
  msSec = 1;
});

const memorize = document
  .querySelector("#memorize")
  .addEventListener("click", () => {
    document.querySelector("#reminder").disabled = false;
    memoS = sec;
    memoMs = msSec;
    console.log(memoS, memoMs);
  });

const reminder = document
  .querySelector("#reminder")
  .addEventListener("click", () => {
    sec = memoS;
    msSec = memoMs;
    s.innerText = memoS;
    ms.innerText = memoMs;
  });
