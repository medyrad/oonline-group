"use client";

import { useId } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  error?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  disabled?: boolean;
}

export function InputField({
  label,
  placeholder,
  type = "text",
  error,
  register,
  required,
  disabled,
}: InputFieldProps) {
  const id = useId();

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed ${
          error ? "border-destructive focus:ring-destructive/50" : "border-input"
        }`}
        {...register}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
