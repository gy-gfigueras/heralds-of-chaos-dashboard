import { Character } from '@/domain/character';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function mapCharacter(raw: any): Character {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid character data');
  }

  return {
    identifier: raw.identifier ?? '',
    name: raw.name ?? '',
    title: raw.title ?? '',
    description: raw.description ?? '',
    race: raw.race ?? '',
    image: raw.image ?? '',
    world: raw.world ?? '',
  };
}
