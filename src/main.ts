import { getPokemon } from './api.ts';

const form = document.getElementById('poke-form');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.getElementById('poke-id');

  if (!(input instanceof HTMLInputElement)) {
    return;
  }
  const id = input.value;

  const nameElem = document.getElementById('poke-name');
  const imageElem = document.getElementById('poke-image') as HTMLImageElement;
  const errorElem = document.getElementById('error-msg');
  if (nameElem) nameElem.textContent = '';
  if (imageElem) {
    imageElem.src = '';
    imageElem.alt = '';
  }
  if (errorElem) errorElem.textContent = '';

  try {
    const pokemon = await getPokemon(Number(id));

    if (nameElem) {
      nameElem.textContent = `Name : ${pokemon.name}`;
    }
    if (imageElem) {
     imageElem.src = pokemon.sprites.front_default;
     imageElem.alt = pokemon.name;
    }

  } catch (error) {
    if (errorElem) {
      errorElem.textContent = 'Not found';
    }
  }
});
