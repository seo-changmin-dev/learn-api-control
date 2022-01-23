fetch("https://pokeapi.co/api/v2/pokemon/1")
.then((resp) => resp.json())
.then((data) => {
  const img = document.createElement('img');
  img.src = data.sprites.front_default;

  document.body.appendChild(img);
});