/* eslint-disable @typescript-eslint/no-unused-vars */
import { Character } from '@/domain/character';
import useSWR from 'swr';
import { getCharacter } from '@/services/character';
import { useLanguage } from '@/contexts/LanguageContext';

interface useCharacterProps {
  data: Character | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function useCharacter(identifier: string): useCharacterProps {
  const { language } = useLanguage();

  const { data, isLoading, error } = useSWR<Character>(
    `/api/data/character/${identifier}?lang=${language}`,
    () => getCharacter(identifier, language)
  );

  return {
    data,
    isLoading,
    error,
  };
}
