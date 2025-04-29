import useSWR from 'swr';
import Item from '@/domain/item';
import { getItems } from '@/services/items';

interface useItemsProps {
  data: Item[] | undefined;
  isLoading: boolean;
  error: Error | null;
}
export function useItems(): useItemsProps {
  const { data, isLoading, error } = useSWR('/api/data/items', getItems);

  return {
    data,
    isLoading,
    error,
  };
}
