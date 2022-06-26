const rainbow = {
  chengeColorEl: document.querySelector('.change-color'),
  selectedColor: document.querySelector('.color'),
};

rainbow.chengeColorEl.addEventListener('click', onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChange(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  rainbow.selectedColor.textContent = color;
}
