/* eslint-disable @typescript-eslint/no-explicit-any */
import Place from '@/domain/place';
import { mapToPlace } from '@/mappers/place.mapper';

export async function getPlace(
  identifier: string,
  language: string
): Promise<Place> {
  try {
    console.log('Fetching place with identifier:', identifier);
    const response = await fetch(`/api/data/worlds/places/place/`, {
      method: 'POST',
      body: JSON.stringify({ identifier, lang: language }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch places');
    }
    const data: any[] = await response.json();

    const place: Place = mapToPlace(data);
    return place;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
}
