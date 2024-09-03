import { cx } from "@/lib/utils";
import { ReactNode } from "react";

export default function Text({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
}) {
  let textStyle = "";

  switch (variant) {
    case "h1":
      textStyle = cx("text-[64px] leading-[1.1]");
      break;
    case "h2":
      textStyle = cx("text-[40px] leading-[1.4]");
      break;
    case "h3":
      textStyle = cx("text-[32px] leading-[1.25]");
    case "h4":
      textStyle = cx("text-[24] leading-[1.5]");
    case "xl":
      textStyle = cx("text-[20px] leading-[1.6]");
    case "lg":
      textStyle = cx("text-[18px] leading-[1.45]");
    case "md":
      textStyle = cx("text-[16px] leading-[1.6]");
    case "sm":
      textStyle = cx("text-[14px] leading-[1.4]");
    case "xs":
      textStyle = cx("text-[12px] leading-[1.35]");
  }

  const Comp = variant?.startsWith("h")
    ? (variant as "h1" | "h2" | "h3" | "h4")
    : "p";

  return <Comp className={`${textStyle} ${className}`}>{children}</Comp>;
}
