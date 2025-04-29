/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/domain/character';
import { mapCharacter } from '@/mappers/character.mapper';

export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await fetch('/api/data/characters', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data: any[] = await response.json();

    const characters: Character[] = data.map(mapCharacter);
    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}
