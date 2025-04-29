import Creature from '@/domain/creature';
import { mapCreature } from '@/mappers/creature.mapper';
export default async function getCreatures(): Promise<Creature[]> {
  try {
    const response = await fetch('/api/data/creatures', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch creatures');
    }
    const data: unknown[] = await response.json();

    const creatures: Creature[] = data.map(mapCreature);
    return creatures;
  } catch (error) {
    console.error('Error fetching creatures:', error);
    throw error;
  }
}
