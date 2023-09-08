const refs = {
  formEl: document.querySelector('.js-search-form[data-id="5"]'),
  cartEl: document.querySelector('.js-pokemon-cart'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);
function onFormElSubmit(event) {
  event.preventDefault();
  const value = refs.formEl.elements.query.value;
  getPokemon(value).then(renderPokemon);
}

function getPokemon(value) {
  const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`;
  return fetch(url).then(res => {
    return res.json();
  });
}

function renderPokemon({
  height,
  weight,
  id,
  name,
  sprites: { front_default },
}) {
  const markup = `
    <h1>${name}</h1>
    <p>Number: ${id}</p>
    <p>Height: ${height} m</p>
    <p>Weight: ${weight} kg</p>
    <img
      src="${front_default}"
      alt="${name}"
    />`;
  refs.cartEl.innerHTML = markup;
}
