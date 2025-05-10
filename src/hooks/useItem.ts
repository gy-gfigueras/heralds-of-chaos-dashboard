/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import Item from '@/domain/item';
import { getItem } from '@/services/item';
import { useLanguage } from '@/contexts/LanguageContext';

interface useItemProps {
  data: Item | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}

export function useItem(identifier: string): useItemProps {
  const { language } = useLanguage();
  const { data, isLoading, error, isValidating } = useSWR(
    identifier
      ? `/api/data/items/item?lang=${language}&id=${identifier}`
      : null,
    () => getItem(identifier, language),
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
