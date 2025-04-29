/* eslint-disable @typescript-eslint/no-unused-vars */
import { Character } from '@/domain/character';
import useSWR from 'swr';
import { getCharacter } from '@/services/character';

interface useCharacterProps {
  data: Character | undefined;
  isLoading: boolean;
  error: Error | null;
}
export function useCharacter(identifier: string): useCharacterProps {
  const { data, isLoading, error } = useSWR<Character>(
    `/api/data/character/${identifier}`,
    () => getCharacter(identifier)
  );

  return {
    data,
    isLoading,
    error,
  };
}
