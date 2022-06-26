const button = {
  subEl: document.querySelector("[data-action='increment']"),
  addEl: document.querySelector("[data-action='decrement']"),
  scoreEl: document.querySelector('#value'),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  button.scoreEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.scoreEl.textContent = counterValue;
};

button.subEl.addEventListener('click', increment);
button.addEl.addEventListener('click', decrement);
