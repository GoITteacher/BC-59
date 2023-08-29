const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  setTimeout(() => {
    console.log(e.target);
    console.log(e.currentTarget);
  }, 2000);
});
