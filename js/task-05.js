let inputEl = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

inputEl.oninput = function () {
  if (inputEl.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = inputEl.value;
  }
};
