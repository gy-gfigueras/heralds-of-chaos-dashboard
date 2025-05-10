/* eslint-disable @typescript-eslint/no-explicit-any */
import Creature from '@/domain/creature';
import { mapCreature } from '@/mappers/creature.mapper';

export async function getCreature(
  identifier: string,
  language: string
): Promise<Creature> {
  try {
    console.log('Fetching creature with identifier:', identifier);
    const response = await fetch(`/api/data/creatures/creature/`, {
      method: 'POST',
      body: JSON.stringify({ identifier, lang: language }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch creatures');
    }
    const data: any[] = await response.json();

    const creature: Creature = mapCreature(data);
    return creature;
  } catch (error) {
    console.error('Error fetching creatures:', error);
    throw error;
  }
}
