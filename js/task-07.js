let controlFontEl = document.querySelector('#font-size-control');

let textEl = document.querySelector('#text');

controlFontEl.oninput = function () {
  textEl.style.fontSize = controlFontEl.value + 'px';
};
