import { getPokemon } from './api.ts'

const pokemon = await getPokemon(720);

// 表示領域の取得
const container = document.getElementById('poke-container');

// 表示要素生成
const nameElem = document.createElement('p');
nameElem.textContent = `Name : ${pokemon.name}`;

const image = document.createElement('img');
image.src = pokemon.sprites.front_default;
image.alt = pokemon.name;

// 要素をDOMへ追加
container?.appendChild(nameElem);
container?.appendChild(image);

