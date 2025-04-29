/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorld } from '@/services/world';
import Place from '@/domain/place';
import { getPlace } from '@/services/place';

interface usePlaceProps {
  data: Place | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}
export function usePlace(identifier: string): usePlaceProps {
  const { data, isLoading, isValidating, error } = useSWR(
    '/api/data/places/place',
    () => getPlace(identifier)
  );
  return {
    data,
    isLoading,
    error,
    isValidating,
  };
}
