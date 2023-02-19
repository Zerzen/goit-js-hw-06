function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(randomColor);
  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
  return;
}
const spanElement = document.querySelector('.color');
const bodyElement = document.body;
const buttonElement = document.querySelector('.change-color');

buttonElement.addEventListener('click', getRandomHexColor);
