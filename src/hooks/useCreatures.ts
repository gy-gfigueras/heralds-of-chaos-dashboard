import useSWR from 'swr';
import getCreatures from '@/services/creatures';
import Creature from '@/domain/creature';
import { useLanguage } from '@/contexts/LanguageContext';

interface useCreaturesProps {
  data: Creature[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function useCreatures(): useCreaturesProps {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSWR(
    `/api/data/creatures?lang=${language}`,
    () => getCreatures(language),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      keepPreviousData: true,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
}
