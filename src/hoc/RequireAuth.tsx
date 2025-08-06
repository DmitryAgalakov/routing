import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

interface Props {
  children: ReactNode;
}

export function RequireAuth(props: Props) {
  const { children } = props;

  const location = useLocation();
  const { user } = useAuth() ?? {};

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}
