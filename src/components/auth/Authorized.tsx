import React from 'react';
import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

const Authorized = ({ children, invisible }: { children: React.ReactNode, invisible?: boolean }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className={cn(invisible && 'hidden')}>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default Authorized;