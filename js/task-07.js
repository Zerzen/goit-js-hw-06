const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

const handelFontSizeSpan = event => {
  console.log(spanElement.style);
  console.log(Number(event.currentTarget.value));
  spanElement.style.fontSize = `${event.currentTarget.value}px`;
};

inputElement.addEventListener('input', handelFontSizeSpan);
