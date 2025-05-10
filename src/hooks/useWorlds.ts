/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorlds } from '@/services/worlds';
import { useLanguage } from '@/contexts/LanguageContext';

interface useWorldsProps {
  data: World[] | undefined;
  isLoading: boolean;
  error: Error | null;
  worldsWithCharacters: World[] | undefined;
}

export function useWorlds(): useWorldsProps {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSWR(
    `/api/data/worlds?lang=${language}`,
    () => getWorlds(language),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      keepPreviousData: true,
    }
  );

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
