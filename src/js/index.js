import { saveToLS, loadFromLS } from './helpers';
const refs = {
  formElement: document.querySelector('.js-form'),
};

const KEY_USER_DATA = 'userData';
let data = loadFromLS(KEY_USER_DATA) || {};
refs.formElement.addEventListener('input', onFormElementInput);

function onFormElementInput(event) {
  const name = event.target.name;
  const value = event.target.value;
  data[name] = value;
  saveToLS(KEY_USER_DATA, data);
}

function onPageLoad() {
  for (const key of Object.keys(data)) {
    refs.formElement.elements[key].value = data[key];
  }

  //   refs.formElement.elements.delay.value = data.delay;
  //   refs.formElement.elements.interval.value = data.interval;
  //   refs.formElement.elements.count.value = data.count;
}

onPageLoad();

refs.formElement.addEventListener('submit', event => {
  event.preventDefault();
  refs.formElement.reset();
  console.log(data);
  localStorage.removeItem(KEY_USER_DATA);
  data = {};
});
