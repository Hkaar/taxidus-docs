import { cn } from "@/lib/utils";

interface LoadingOverlayProps {
  children?: React.ReactNode;
  className?: string;
  percentage?: number;
  visible: boolean;
}

const LoadingOverlay = ({ children, className, percentage, visible }: LoadingOverlayProps) => {
  return visible && (
    <div className={cn("fixed h-screen w-screen bg-neutral-950/75 dark:bg-gray-50/35 z-[90]", className)}>
      {percentage && <span>{percentage}%</span>}
      {children}
    </div>
  )
}

export default LoadingOverlay;