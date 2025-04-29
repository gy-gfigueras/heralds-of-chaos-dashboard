/* eslint-disable @typescript-eslint/no-explicit-any */

import { World } from '@/domain/world';
import { mapToWorld } from '@/mappers/world.mapper';

export async function getWorlds(): Promise<World[]> {
  try {
    const response = await fetch('/api/data/worlds', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch worlds');
    }
    const data: any[] = await response.json();

    const worlds: World[] = data.map(mapToWorld);
    return worlds;
  } catch (error) {
    console.error('Error fetching worlds:', error);
    throw error;
  }
}
