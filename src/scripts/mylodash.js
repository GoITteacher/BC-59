const refs = {
  formElem: document.querySelector('.js-form'),
  inputEl: document.querySelector('.js-input'),
  spanEl: document.querySelector('.js-text'),
};

const callback = _.throttle(onFormSubmit, 2000);

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  callback();
});

function onFormSubmit(e) {
  console.log(refs.inputEl.value);
  //   refs.spanEl.textContent = e.target.elements[0].value;
  refs.spanEl.textContent = refs.inputEl.value;
}

refs.inputEl.addEventListener(
  'input',
  _.debounce(onInputChange, 3000, {
    maxWait: 1000,
  }),
);

function onInputChange(e) {
  e.preventDefault();
  refs.spanEl.textContent = e.target.value;
}
