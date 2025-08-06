import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export function useAuth() {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return useContext(AuthContext)!;
}
