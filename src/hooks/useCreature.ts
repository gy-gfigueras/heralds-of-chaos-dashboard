/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import Creature from '@/domain/creature';
import { getCreature } from '@/services/creature';

interface useCreatureProps {
  data: Creature | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}
export function useCreature(identifier: string): useCreatureProps {
  const { data, isLoading, error, isValidating } = useSWR<Creature>(
    `/api/data/creatures/creature/${identifier}`,
    () => getCreature(identifier)
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
}
