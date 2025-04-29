/* eslint-disable @typescript-eslint/no-unused-vars */
import type { User, UserUpdateData } from '../domain/user';
import { getUser, updateUser } from '../services/user';
import { useState } from 'react';
import useSWR from 'swr';
interface useUserProps {
  data: User | undefined;
  isLoading: boolean;
  error: Error | null;
}
export function useUser(): useUserProps {
  const { data, isLoading, error } = useSWR('/api/auth/get', getUser);

  return {
    data,
    isLoading,
    error,
  };
}
