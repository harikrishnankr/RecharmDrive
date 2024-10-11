import { Label, TextInput } from "flowbite-react";
import React, { forwardRef, LegacyRef, ReactNode } from "react";

interface InputFieldProps {
  placeholder: string;
  required?: boolean;
  label: string;
  name: string;
  type?: string;
  rightIcon?: ReactNode;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      placeholder,
      required,
      label,
      name,
      type,
      rightIcon,
      error,
      onChange,
      className,
    } = props;

    return (
      <div className={`mt-5 mb-5 ${className || ""}`}>
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
            {...(error
              ? {
                  color: "failure",
                }
              : {})}
          />
        </div>
        <div
          className={`w-full relative ${rightIcon ? "input-right-icon" : ""}`}
        >
          <TextInput
            ref={ref as LegacyRef<HTMLInputElement>}
            id={name}
            type={type || "text"}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            {...(error
              ? {
                  color: "failure",
                  helperText: <>{error}</>,
                }
              : {})}
          />
          {rightIcon ? (
            <div
              className={`absolute right-3 cursor-pointer ${error ? "input-icon-top" : "top-1/3"}`}
            >
              {rightIcon}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);
