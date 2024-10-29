// DOM Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");

const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const perEl = document.querySelector(".percent");

const addEl = document.querySelector(".addition");
const subEl = document.querySelector(".subtraction");
const mulEl = document.querySelector(".multiplication");
const divEl = document.querySelector(".division");

const equalEl = document.querySelector(".equal");

const decEl = document.querySelector(".decimal");
const num0El = document.querySelector(".number-0");
const num1El = document.querySelector(".number-1");
const num2El = document.querySelector(".number-2");
const num3El = document.querySelector(".number-3");
const num4El = document.querySelector(".number-4");
const num5El = document.querySelector(".number-5");
const num6El = document.querySelector(".number-6");
const num7El = document.querySelector(".number-7");
const num8El = document.querySelector(".number-8");
const num9El = document.querySelector(".number-9");
const numElArray = [
  addEl,
  decEl,
  num0El,
  num1El,
  num2El,
  num3El,
  num4El,
  num5El,
  num6El,
  num7El,
  num8El,
  num9El,
];
//const display = document.getElementById("display");
// function toDisplay(params) {
//   valueEl.textContent += params;
// }
valueEl.textContent = "";
for (let i = 0; i < numElArray.length; i++) {
  const numberEl = numElArray[i];
  numberEl.addEventListener("click", () => {
    valueEl.textContent += numberEl.textContent;
    //console.log(valueEl.textContent);
  });
}
pmEl.addEventListener("click", () => {
  valueEl.textContent += "-";
});
divEl.addEventListener("click", () => {
  valueEl.textContent += "/";
});
mulEl.addEventListener("click", () => {
  valueEl.textContent += "*";
});
subEl.addEventListener("click", () => {
  valueEl.textContent += "-";
});
function clearAllDisplay() {
  valueEl.textContent = "";
}
acEl.addEventListener("click", () => {
  clearAllDisplay();
});
perEl.addEventListener("click", () => {
  valueEl.textContent = valueEl.textContent / 100;
});

function calculate() {
  try {
    valueEl.textContent = eval(valueEl.textContent);
  } catch (error) {
    valueEl.textContent = "Error";
  }
}
equalEl.addEventListener("click", () => {
  calculate();
});
// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();
