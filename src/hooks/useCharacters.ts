import { Character } from '@/domain/character';
import useSWR from 'swr';
import { getCharacters } from '@/services/characters';

interface useCharactersProps {
  data: Character[] | undefined;
  isLoading: boolean;
  error: Error | null;
  getCharactersByWorldOrder: () => Character[] | undefined;
}

const WORLD_ORDER = [
  'asgard',
  'alfheim',
  'vanaheim',
  'svartalfheim',
  'midgard',
  'jotunheim',
  'muspelheim',
  'helheim',
  'ginnungagap',
];

export function useCharacters(): useCharactersProps {
  const { data, isLoading, error } = useSWR(
    '/api/data/characters',
    getCharacters
  );

  const getCharactersByWorldOrder = () => {
    if (!data) return undefined;

    return [...data].sort((a, b) => {
      const indexA = WORLD_ORDER.indexOf(a.world.toLowerCase());
      const indexB = WORLD_ORDER.indexOf(b.world.toLowerCase());

      // Si un mundo no está en el orden especificado, lo colocamos al final
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  };

  return {
    data,
    isLoading,
    error,
    getCharactersByWorldOrder,
  };
}
