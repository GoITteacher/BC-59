const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', onFormSubmit);
/* 
function onFormSubmit(event) {
  event.preventDefault();
  const login = formEl.elements.username.value;
  const password = formEl.elements.password.value;

  const data = { login, password };
  console.log(data);
}
 */

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((el, key) => {
    data[key] = el;
  });

  console.log(data);
}

const inputEl = document.querySelector('#js-input-color');

inputEl.addEventListener('change', onInputElChange);
function onInputElChange(event) {
  const color = inputEl.value;
  formEl.style.backgroundColor = color;
}

const scaleEl = document.querySelector('#js-input-size');
scaleEl.addEventListener('input', onScaleElChange);

function onScaleElChange(event) {
  const scaleValue = scaleEl.value;
  inputEl.style.transform = `scale(${scaleValue})`;
}

const inputElTwo = document.querySelector('.js-input-username');

inputElTwo.addEventListener('blur', onInputElTwoBlur);

function onInputElTwoBlur(event) {
  const inputValue = inputElTwo.value.length;
  const maxLength = +inputElTwo.dataset.maxLength;
  console.log(+inputElTwo.dataset.maxLength);

  if (maxLength > inputValue) {
    inputElTwo.classList.add('invalid');
  } else {
    inputElTwo.classList.add('valid');
  }

  console.log(inputValue);
}

inputElTwo.addEventListener('focus', onInputElTwoFocus);

function onInputElTwoFocus(event) {
  inputElTwo.classList.remove('valid', 'invalid');
}
