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

  // stats element
  const hStatsElem = document.getElementById('stats-h');
  const aStatsElem = document.getElementById('stats-a');
  const bStatsElem = document.getElementById('stats-b');
  const cStatsElem = document.getElementById('stats-c');
  const dStatsElem = document.getElementById('stats-d');
  const sStatsElem = document.getElementById('stats-s');

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

    const statsAry = pokemon.stats;
    if (5 < statsAry.length) {
      if (hStatsElem) {
        hStatsElem.textContent = `HP : ${String(pokemon.stats[0]['base_stat'])}`;
      }
      if (aStatsElem) {
        aStatsElem.textContent = `Attack : ${String(pokemon.stats[1]['base_stat'])}`;
      }
      if (bStatsElem) {
        bStatsElem.textContent = `Defence : ${String(pokemon.stats[2]['base_stat'])}`;
      }
      if (cStatsElem) {
        cStatsElem.textContent = `S-Attack : ${String(pokemon.stats[3]['base_stat'])}`;
      }
      if (dStatsElem) {
        dStatsElem.textContent = `S-Defence : ${String(pokemon.stats[4]['base_stat'])}`;
      }
      if (sStatsElem) {
        sStatsElem.textContent = `Speed : ${String(pokemon.stats[5]['base_stat'])}`;
      }
    }

  } catch (error) {
    if (errorElem) {
      errorElem.textContent = 'Not found';
    }
  }
});
