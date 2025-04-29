/* eslint-disable @typescript-eslint/no-explicit-any */

import { Place, World } from '@/domain/world';

export function mapToWorld(data: any): World {
  return {
    identifier: data.identifier,
    name: data.name,
    description: data.description,
    image: data.image,
    detailedIcon: data.detailedIcon,
    inGame: data.inGame ?? false,
    mainColor: data.mainColor,
    places: data.places.map(
      (place: any): Place => ({
        identifier: place.identifier,
        name: place.name,
        description: place.description,
        image: place.image,
        inGame: place.inGame,
      })
    ),
  };
}
