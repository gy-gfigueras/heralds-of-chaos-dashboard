/* eslint-disable @typescript-eslint/no-explicit-any */

import Place from '@/domain/place';

export function mapToPlace(data: any): Place {
  return {
    identifier: data.identifier,
    name: data.name,
    description: data.description,
    image: data.image,
  };
}
