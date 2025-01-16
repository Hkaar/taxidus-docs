import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import LoadingOverlay from "@/components/auth/LoadingOverlay";
import { Loader2 } from "lucide-react";

interface GuestGateProps {
  visible?: boolean;
  children?: React.ReactNode;
}

const GuestGate = ({ visible, children }: GuestGateProps) => {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      window.location.replace("/home");
    }
  }, [isAuthenticated, loading]);

  if (visible && loading) {
    return (
      children || (
        <LoadingOverlay visible={loading} className="grid place-items-center">
          <div className="flex items-center gap-3">
            <Loader2 strokeWidth={1.5} className="animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        </LoadingOverlay>
      )
    );
  }

  return null;
};

export default GuestGate;
