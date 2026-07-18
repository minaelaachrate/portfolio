import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

// Styles pour les variantes
const variants: Record<string, string> = {
  default: "bg-[#b3bbd1] text-white hover:bg-blue-700 focus:ring-blue-500",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  link: "text-blue-600 underline hover:text-blue-800",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
};

// Styles pour les tailles
const sizes: Record<string, string> = {
  default: "px-4 py-2 text-sm",
  sm: "px-3 py-1 text-sm",
  lg: "px-5 py-3 text-base"
};
