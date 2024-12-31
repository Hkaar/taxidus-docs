import * as React from "react"

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends Omit<React.ComponentProps<"input">, "className" | "type"> {
  className?: string;
  inputClassName?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, inputClassName, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    const toggleVisibility = () => {
      setVisible(prev => !prev);
    };

    return (
      <div className={cn("relative", className)}>
        <Input ref={ref} className={cn("pe-9", inputClassName)} type={visible ? "text" : "password"} {...props} />

        <Button
          type="button"
          variant={"ghost"}
          size={"sm"}
          className="absolute z-10 top-0.5 right-0 me-1" onClick={toggleVisibility}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible
            ? <Eye
              size={18}
              strokeWidth={1.5}
              className="stroke-gray-500 dark:stroke-neutral-600"
            />
            : <EyeOff
              size={18}
              strokeWidth={1.5}
              className="stroke-gray-500 dark:stroke-neutral-600"
            />
          }
        </Button>
      </div>
    )
  }
)

export default PasswordInput;