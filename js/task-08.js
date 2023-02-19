const formElement = document.querySelector('.login-form');
const inputEmailElement = document.querySelector('[type="email"]');
const inputPasswordElement = document.querySelector('[type="password"]');

let isFullInputs = true;

function onFormSubmit(event) {
  event.preventDefault();
  const inputsArray = event.currentTarget.elements;

  for (let i = 0; i < inputsArray.length; i += 1) {
    const element = inputsArray[i];
    console.log(element);
    if (element.value === '') {
      alert('выводи alert с предупреждением о том, что все поля должны быть заполнены.');
      isFullInputs = false;
      break;
    }
  }

  if (isFullInputs) {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }
}

formElement.addEventListener('submit', onFormSubmit);
