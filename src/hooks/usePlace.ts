/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import { World } from '@/domain/world';
import { getWorld } from '@/services/world';
import Place from '@/domain/place';
import { getPlace } from '@/services/place';
import { useLanguage } from '@/contexts/LanguageContext';

interface usePlaceProps {
  data: Place | undefined;
  isLoading: boolean;
  error: Error | null;
  isValidating: boolean;
}

export function usePlace(identifier: string): usePlaceProps {
  const { language } = useLanguage();
  const { data, isLoading, isValidating, error } = useSWR(
    identifier
      ? `/api/data/worlds/places/place?lang=${language}&id=${identifier}`
      : null,
    () => getPlace(identifier, language),
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
