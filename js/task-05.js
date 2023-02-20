const spanElement = document.querySelector('#name-output');
const inputElement = document.querySelector('#name-input');

const handleInput = event => {
  let resultEvent = event.currentTarget.value;

  if (resultEvent === '') {
    spanElement.textContent = 'Anonymous';
  } else {
    spanElement.textContent = resultEvent;
  }
};

const handleBlur = event => {
  if (event.currentTarget.value === '') {
    spanElement.textContent = 'Anonymous';
  }
};

inputElement.addEventListener('input', handleInput);
inputElement.addEventListener('blur', handleBlur);
