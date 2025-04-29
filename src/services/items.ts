/* eslint-disable @typescript-eslint/no-explicit-any */
import Item from '@/domain/item';
import { mapItem } from '@/mappers/item.mapper';

export async function getItems(): Promise<Item[]> {
  try {
    const response = await fetch('/api/data/items', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to get item list');
    }
    const data: any[] = await response.json();

    const items: Item[] = data.map((item: any) => mapItem(item));
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
}
