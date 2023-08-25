function findAllTitles() {
  return document.querySelectorAll('h2');
}

function createClass() {
  const title = findAllTitles();
  console.log(title);
  title.forEach(el => {
    el.classList.add('active');
  });
}

function task3() {
  const h1 = document.querySelector('h2');
  h1.textContent = 'My Favorites Fruits';
}
function task3_1() {
  const ulElem = document.querySelector('#categories');
  const elem = ulElem.children[3].firstElementChild;
  elem.textContent = 'My Favorites Products';
  console.log(elem);
}

function task4() {
  const elem = document.querySelector('.js-tech-list');
  const li = document.createElement('li');
  li.textContent = 'vue-js';
  elem.append(li);
}
function task5() {
  const elem = document.querySelector('.js-bg-col');
  const li = [...elem.children];
  console.log(li);
  li.forEach(el => {
    el.style.backgroundColor = 'yellow';
  });
}
function task6() {
  const elem = document.querySelector('.js-fruits');
  elem.lastElementChild.remove();
}

function task7() {
  const el = document.querySelector('.js-countries');
  console.log(el);
  const changeCountry = el.firstElementChild.nextElementSibling;
  changeCountry.textContent = 'Italy';
}

function task8() {
  const el = document.querySelectorAll('.js-tech-list > li');
  const array = [...el];

  array.forEach(element => {
    element.setAttribute('target', '_blank');
  });
}

function task9() {
  const ulElem = document.querySelector('.js-tech-list');

  const firstEl = ulElem.firstElementChild;
  firstEl.remove();

  const lastEl = ulElem.lastElementChild;
  lastEl.remove();

  ulElem.prepend(lastEl);
  ulElem.append(firstEl);
}

function task10() {
  const ulElem = document.querySelector('.js-lang');
  ulElem.style.fontStyle = 'italic';
}

function task11() {
  const liEl = document.querySelector('.item:nth-child(4)');
  liEl.firstElementChild.textContent = 'Various Products';
}

function task12() {
  const el = document.querySelector('.js-fruits');
  el.lastElementChild.classList.add('highlight');
}

/* const li = {
  firstElementChild: {},
  lastElementChild: {},
  textContent: 'Hello',
  innerHtml: "",
  arguments: {},
  classList: {},
  class: '',
  style: {
    backgorundColor:
  },
};

ul.innerHTML += '<li>1</li>' + '<li>text</li>'; */
