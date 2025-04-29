import useSWR from 'swr';
import getCreatures from '@/services/creatures';
import Creature from '@/domain/creature';

interface useCreaturesProps {
  data: Creature[] | undefined;
  isLoading: boolean;
  error: Error | null;
}
export function useCreatures(): useCreaturesProps {
  const { data, isLoading, error } = useSWR(
    '/api/data/creatures',
    getCreatures
  );

  return {
    data,
    isLoading,
    error,
  };
}
