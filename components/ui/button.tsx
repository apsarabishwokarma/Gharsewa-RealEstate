import { ReactNode } from "react";

export default function Button({
  children,
  type,
  size,
  className,
}: {
  children: ReactNode;
  type?: "primary" | "secondary" | "destructive" | "success" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const baseStyles = "rounded-lg justify-center item-center text-sm font-bold";
  const typeStyles =
    type === "primary"
      ? "bg-primary text-white"
      : type === "secondary"
      ? " border-2 border-primary-92 text-primary"
      : type === "success"
      ? "bg-green-500"
      : type === "destructive"
      ? "bg-red-500"
      : type === "ghost"
      ? "hover:bg-accent hover:text-accent-foreground"
      : "";

  const sizeStyles =
    size === "small"
      ? "px-4 py-[10px]"
      : size === "medium"
      ? "px-6 py-3"
      : size === "large"
      ? "px-8 py-4 "
      : "";

  return (
    <button
      className={`${baseStyles} ${typeStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
}
