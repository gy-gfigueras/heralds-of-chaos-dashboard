/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorlds } from '@/services/worlds';

interface useWorldsProps {
  data: World[] | undefined;
  isLoading: boolean;
  error: Error | null;
  worldsWithCharacters: World[] | undefined;
}
export function useWorlds(): useWorldsProps {
  const { data, isLoading, error } = useSWR('/api/data/worlds', getWorlds);

  const worldsWithCharacters = data?.filter(
    (world) => world.name !== 'Niflheim'
  );

  return {
    data,
    isLoading,
    error,
    worldsWithCharacters,
  };
}
