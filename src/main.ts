import { getPokemon } from './api.ts'

const pokemon = await getPokemon(720);
console.log(`Name: ${pokemon.name}`);
console.log(`ID: ${pokemon.id}`);
console.log(`Sprite: ${pokemon.sprites.front_default}`);
