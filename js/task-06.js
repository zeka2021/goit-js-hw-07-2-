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

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('focus', focusInputRef)
function focusInputRef(event) {
    const inputLength = Number(event.target.dataset.length);
    const inputValue = event.target.value.length;
    if (inputLength === inputValue) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
    console.log(inputLength)
    console.log(inputValue)
    console.log(inputLength === inputValue)
}