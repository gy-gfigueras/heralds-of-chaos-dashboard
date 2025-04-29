/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorld } from '@/services/world';

interface useWorldProps {
  data: World | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}
export function useWorld(identifier: string): useWorldProps {
  const { data, isLoading, isValidating, error } = useSWR(
    '/api/data/worlds/world',
    () => getWorld(identifier)
  );
  return {
    data,
    isLoading,
    error,
    isValidating,
  };
}
