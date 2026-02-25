import type { Pokemon } from './pokemon.ts'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemon(id: number): Promise<Pokemon> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`)

    if (!response.ok) {
      throw new Error(`Pokemon not found: ${id}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching pokemon:', error)
    throw error
  }
}
