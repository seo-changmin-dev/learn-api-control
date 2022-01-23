window.onload = () => {
  const elPokemonId = document.querySelector('.field-id');
  const elIdSubmit = document.querySelector('.btn-submit');

  elIdSubmit.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${elPokemonId.value}`)
    .then((resp) => resp.json())
    .then((data) => {
      const img = document.createElement('img');
      img.src = data.sprites.front_default;

      document.body.appendChild(img);
    });
  })
}