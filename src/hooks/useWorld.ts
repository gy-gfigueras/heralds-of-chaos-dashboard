/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorld } from '@/services/world';
import { useLanguage } from '@/contexts/LanguageContext';

interface useWorldProps {
  data: World | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}

export function useWorld(identifier: string): useWorldProps {
  const { language } = useLanguage();
  const { data, isLoading, isValidating, error } = useSWR(
    identifier
      ? `/api/data/worlds/world?lang=${language}&id=${identifier}`
      : null,
    () => getWorld(identifier, language),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
    }
  );
  return {
    data,
    isLoading,
    error,
    isValidating,
  };
}
