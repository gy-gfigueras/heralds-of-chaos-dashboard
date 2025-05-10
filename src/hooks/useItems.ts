import useSWR from 'swr';
import Item from '@/domain/item';
import { getItems } from '@/services/items';
import { useLanguage } from '@/contexts/LanguageContext';

interface useItemsProps {
  data: Item[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function useItems(): useItemsProps {
  const { language } = useLanguage();
  const { data, isLoading, error } = useSWR(
    `/api/data/items?lang=${language}`,
    () => getItems(language),
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
