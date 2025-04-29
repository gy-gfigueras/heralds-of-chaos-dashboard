/* eslint-disable @typescript-eslint/no-explicit-any */
import Item from '@/domain/item';

export function mapItem(raw: any): Item {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid item data');
  }

  return {
    identifier: raw.identifier ?? '',
    name: raw.name ?? '',
    description: raw.description ?? '',
    image: raw.image ?? '',
    type: raw.type ?? '',
  };
}
