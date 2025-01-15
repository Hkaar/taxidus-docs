import React from 'react';
import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

const Guest = ({ children, invisible }: { children: React.ReactNode, invisible?: boolean }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className={cn(invisible && 'hidden')}>Loading...</div>; // Show loading indicator
  }

  return !isAuthenticated ? <>{children}</> : null;
};

export default Guest;