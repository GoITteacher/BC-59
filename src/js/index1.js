import { NewsApi } from './modules/newsAPI';
const refs = {
  formEl: document.querySelector('.js-search-form'),
  listEl: document.querySelector('.js-article-list'),
  nextPageBtn: document.querySelector('.js-btn-load'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);

const newsApi = new NewsApi();
function onFormElSubmit(event) {
  event.preventDefault();
  newsApi.q = event.target.elements.query.value.trim();
  newsApi.page = 1;

  newsApi.fetchArticles().then(articles => {
    refs.listEl.innerHTML = '';
    renderArticles(articles);
    refs.nextPageBtn.disabled = false;
  });
}

const renderArticles = articles => {
  const markup = articles
    .map(
      el => `<li class="card news-card">
      <div class="news-image">
      <img src="${el.media}" alt="" loading="lazy">
      </div>
      
      <h3 class="card-title">${el.title}</h3>
      <p class="card-desc">${el.summary}</p>
      <div class="card-footer">
        <span>${el.author}</span>
        <span>${el.author}</span>
      </div>
      
  </li>`,
    )
    .join('\n');

  refs.listEl.insertAdjacentHTML('beforeend', markup);
};

function onNextBtnClick(event) {
  newsApi.page += 1;
  newsApi.fetchArticles().then(articles => {
    renderArticles(articles);
  });
}

refs.nextPageBtn.addEventListener('click', onNextBtnClick);
