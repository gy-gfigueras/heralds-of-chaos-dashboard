/* eslint-disable @typescript-eslint/no-explicit-any */
import Creature from '@/domain/creature';

export function mapCreature(raw: any): Creature {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid creature data');
  }

  return {
    identifier: raw.identifier ?? '',
    name: raw.name ?? '',
    description: raw.description ?? '',
    image: raw.image ?? '',
  };
}
