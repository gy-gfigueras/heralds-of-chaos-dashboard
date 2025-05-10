/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import Creature from '@/domain/creature';
import { getCreature } from '@/services/creature';
import { useLanguage } from '@/contexts/LanguageContext';

interface useCreatureProps {
  data: Creature | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}

export function useCreature(identifier: string): useCreatureProps {
  const { language } = useLanguage();
  const { data, isLoading, error, isValidating } = useSWR(
    identifier
      ? `/api/data/creatures/creature?lang=${language}&id=${identifier}`
      : null,
    () => getCreature(identifier, language),
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
