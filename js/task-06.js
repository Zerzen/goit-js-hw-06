const inputElement = document.querySelector('#validation-input');
const inputDataLength = Number(inputElement.dataset.length);
console.log(inputDataLength);

const handelInputLength = event => {
  console.log(Number(event.currentTarget.value));

  if (inputDataLength === Number(event.currentTarget.value.length)) {
    inputElement.setAttribute('class', 'valid');
  } else {
    inputElement.setAttribute('class', 'invalid');
  }
};

inputElement.addEventListener('blur', handelInputLength);
