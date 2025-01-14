import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import LoadingOverlay from '@/components/auth/LoadingOverlay';

const AuthorizedGate = ({ children }: { children?: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      window.location.replace('/login');
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return children ||
      <LoadingOverlay visible={loading} className="grid place-items-center">
        <span>Loading...</span>
      </LoadingOverlay>;
  }

  return null;
};

export default AuthorizedGate;