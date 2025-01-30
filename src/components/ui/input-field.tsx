import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./password-input";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  title?: string;
  containerClassName?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const InputField = ({
  title,
  type,
  id,
  containerClassName,
  className,
  onChange,
  value,
  placeholder,
  disabled,
  required,
  suffixIcon,
  prefixIcon,
}: InputFieldProps) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      {title && (
        <Label className="text-base" htmlFor={id}>
          {title}
        </Label>
      )}

      <div className="relative">
        {prefixIcon && (
          <div className="absolute top-2.5 ms-3 pointer-events-none">
            {prefixIcon}
          </div>
        )}

        {type === "password" ? (
          <PasswordInput id={id} value={value} onChange={onChange} name={id} className={cn(suffixIcon && "ps-18")} />
        ) : (
          <Input
            onChange={onChange}
            className={cn(
              suffixIcon && "pe-9",
              prefixIcon && "ps-9",
              className
            )}
            name={id}
            required={required}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}

        {suffixIcon && (
          <div className="absolute top-2.5 right-3 pointer-events-none">
            {suffixIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
