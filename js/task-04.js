const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

function incrementCounterValue(event) {
  const counterValue = document.querySelector('#value');
  const numberValue = parseInt(counterValue.textContent);
  let result = numberValue;
  result += 1;
  // console.dir(result);
  counterValue.textContent = result;
}

function decrementCounterValue(event) {
  const counterValue = document.querySelector('#value');
  const numberValue = parseInt(counterValue.textContent);
  let result = numberValue;
  result -= 1;
  // console.dir(result);
  counterValue.textContent = result;
}

incrementButton.addEventListener('click', incrementCounterValue);
decrementButton.addEventListener('click', decrementCounterValue);
// console.log(counterValue);
