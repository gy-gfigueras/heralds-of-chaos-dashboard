/* eslint-disable @typescript-eslint/no-explicit-any */
import Item from '@/domain/item';
import { mapItem } from '@/mappers/item.mapper';

export async function getItem(
  identifier: string,
  language: string
): Promise<Item> {
  try {
    console.log('Fetching item with identifier:', identifier);
    const response = await fetch(`/api/data/items/item/`, {
      method: 'POST',
      body: JSON.stringify({ identifier, lang: language }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    const data: any[] = await response.json();

    const item: Item = mapItem(data);
    return item;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
}
