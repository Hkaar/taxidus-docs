import * as SwitchPrimitives from "@radix-ui/react-switch";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface SwitchFieldProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  containerClassName?: string;
}

const SwitchField = ({
  title,
  id,
  containerClassName,
  className,
  disabled,
}: SwitchFieldProps) => {
  return (
    <div className={cn("flex items-center space-x-2", containerClassName)}>
      <Switch
        id={id}
        name={id}
        className={cn("data-[state=checked]:bg-tptGreen-600", className)}
        disabled={disabled}
      />
      <Label className="text-base" htmlFor={id}>
        {title}
      </Label>
    </div>
  );
};

export default SwitchField;