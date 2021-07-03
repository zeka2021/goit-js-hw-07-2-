// const controlFont = document.getElementById("font-size-control");

// const text = document.getElementById("text");

// controlFont.oninput = function() {
//   text.style.fontSize = controlFont.value + "px";
// };
const controlFont = document.getElementById('font-size-control');
const text = document.getElementById('text');
const inputValue = controlFont.value;
function changeFontSize(inputValue) {
  text.style.fontSize = `${inputValue}px`;
}
function oninput(event) {
  changeFontSize(event.target.value);
}
controlFont.addEventListener('input', oninput);
changeFontSize(inputValue);