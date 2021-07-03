// const form = document.querySelector('#validation-input');
// form.addEventListener('blur', onCheckForm);
// function onCheckForm(event) {
//     if (event.target.value.length === +event.target.dataset.length) {
//         form.className = 'valid';
//     }
//     else {
//         form.className = 'invalid';
//     }
// };

//  const inputRef = document.querySelector('#validation-input');
// inputRef.addEventListener('focus', focusInputRef)
// function focusInputRef(event) {
//     const inputLength = Number(event.target.dataset.length);
//     const inputValue = event.target.value.length;
//     if (inputLength === inputValue) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.remove('valid');
//         inputRef.classList.add('invalid');
//     }
//     console.log(inputLength)
//     console.log(inputValue)
//     console.log(inputLength === inputValue)
// }
// const getInput = document.querySelector('validation-input');
// const getDataLength = Number(getInput.getAttribute('data-length'));
// const inputIsValid = getInput.addEventListener('focus', onFormInput);
// function onFormInput(event) {
//     const getInputValue = event.currentTarget.value;

//     if (getInputValue.length === getDataLength) {
//         getInput.classList.add('valid');
//         getInput.classList.remove('invalid');
//     }
//     else {
//         getInput.classList.remove('valid');
//         getInput.classList.add('invalid');
//     }
// };



const inputRef = document.querySelector('#validation-input');
function focusInputRef(event) {
  const isValidLength =
    event.target.value.length === Number(event.target.dataset.length);
  if (isValidLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
inputRef.addEventListener('blur', focusInputRef);
console.log(inputRef);