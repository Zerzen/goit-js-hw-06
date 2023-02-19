const spanElement = document.querySelector('#name-output');
const inputElement = document.querySelector('#name-input');

const handelInput = event => {
  let resultEvent = event.currentTarget.value;

  if (resultEvent === false) {
    spanElement.textContent = 'Anonymous';
  } else {
    spanElement.textContent = resultEvent;
  }
};

inputElement.addEventListener('input', handelInput);
