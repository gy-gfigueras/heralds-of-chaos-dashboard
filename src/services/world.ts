/* eslint-disable @typescript-eslint/no-explicit-any */

import { World } from '@/domain/world';
import { mapToWorld } from '@/mappers/world.mapper';

export async function getWorld(identifier: string): Promise<World> {
  try {
    const response = await fetch('/api/data/worlds/world', {
      method: 'POST',
      body: JSON.stringify({ identifier }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch world');
    }
    const data: any[] = await response.json();

    const world: World = mapToWorld(data);
    return world;
  } catch (error) {
    console.error('Error fetching world:', error);
    throw error;
  }
}
