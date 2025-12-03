"use client";

import { useId } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
}

export function TextareaField({
  label,
  placeholder,
  error,
  register,
  required,
  disabled,
  rows = 4,
}: TextareaFieldProps) {
  const id = useId();

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed resize-none ${
          error ? "border-destructive focus:ring-destructive/50" : "border-input"
        }`}
        {...register}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
