const refs = {
  formEl: document.querySelector('.js-search-form[data-id="2"]'),
  infoEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const value = e.target.elements.query.value.trim();

  try {
    const data = await getPrice(value);
    renderPrice(data);
  } catch (err) {
    console.log('Don`t worry', err.message);
  }
});

async function getPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com/ticker/price';
  const PARAMS = new URLSearchParams({
    symbol: userValue,
  });
  const url = `${BASE_URL}?${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  await fetch(url, options);
  try {
    if (!res.ok) {
      throw new Error('Error');
    } else {
      return res.json();
    }
  } catch {
    console.log('error');
  }
}

function renderPrice({ symbol, price }) {
  const markup = `
    <span>${symbol}</span>
    <span>${Number.parseInt(price)}</span>`;

  refs.infoEl.innerHTML = markup;
}
