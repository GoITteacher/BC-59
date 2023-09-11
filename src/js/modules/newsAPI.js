const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const END_POINT = '/search';

const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  },
};

export class NewsApi {
  constructor() {
    this.q = '';
    this.page = 1;
  }

  fetchArticles() {
    const PARAMS = new URLSearchParams({
      q: this.q,
      page: this.page,
      page_size: 20,
    });

    return fetch(`${BASE_URL}${END_POINT}?${PARAMS}`, options)
      .then(response => response.json())
      .then(data => {
        return data.articles;
      });
  }
}
