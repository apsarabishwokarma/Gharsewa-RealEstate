import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  size,
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive" | "success" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const baseStyles = "rounded-lg justify-center item-center text-sm font-bold";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white"
      : variant === "secondary"
      ? " border-2 border-primary-92 text-primary"
      : variant === "success"
      ? "bg-green-500"
      : variant === "destructive"
      ? "bg-red-500"
      : variant === "ghost"
      ? "hover:bg-accent hover:text-accent-foreground"
      : "";

  const sizeStyles =
    size === "sm"
      ? "px-4 py-[10px]"
      : size === "md"
      ? "px-6 py-3"
      : size === "lg"
      ? "px-8 py-4 "
      : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
}
