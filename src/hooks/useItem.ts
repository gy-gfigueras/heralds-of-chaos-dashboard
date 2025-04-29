/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import Item from '@/domain/item';
import { getItem } from '@/services/item';

interface useItemProps {
  data: Item | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}
export function useItem(identifier: string): useItemProps {
  const { data, isLoading, error, isValidating } = useSWR<Item>(
    `/api/data/items/item/${identifier}`,
    () => getItem(identifier)
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
}
