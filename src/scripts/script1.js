const refs = {
  usernameElem: document.querySelector('.js-input-username'),
  formElem: document.querySelector('.js-register-form'),
  inputSizeElem: document.querySelector('#js-input-size'),
  inputColorElem: document.querySelector('#js-input-color'),
};

refs.inputSizeElem.addEventListener('input', e => {
  const size = e.target.value;
  refs.inputColorElem.style.transform = `scale(${size})`;
});

refs.inputColorElem.addEventListener('change', e => {
  const color = e.target.value;
  refs.formElem.style.backgroundColor = color;
});

// ===================================
// refs.usernameElem.addEventListener('blur', e => {
//   if (e.target.value.length < e.target.dataset.maxLength) {
//     e.target.classList.remove('is-valid');
//     e.target.classList.add('is-invalid');
//   } else {
//     e.target.classList.remove('is-invalid');
//     e.target.classList.add('is-valid');
//   }
// });

// refs.formElem.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   const myData = {};
//   for (let i = 0; i < e.target.elements.length; i++) {
//     const element = e.target.elements[i];
//     if (element.name && data.has(element.name)) {
//       myData[element.name] = data.get(element.name);
//     }
//   }
//   e.target.reset();
//   console.log(myData);
// });
