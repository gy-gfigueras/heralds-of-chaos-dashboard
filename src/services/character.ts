/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/domain/character';
import { mapCharacter } from '@/mappers/character.mapper';

export async function getCharacter(
  identifier: string,
  language: string
): Promise<Character> {
  try {
    console.log('Fetching character with identifier:', identifier);
    const response = await fetch(`/api/data/characters/character/`, {
      method: 'POST',
      body: JSON.stringify({ identifier, language }),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data: any[] = await response.json();

    const character: Character = mapCharacter(data);
    return character;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}
