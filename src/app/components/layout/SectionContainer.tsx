import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const SectionContainer: FC<{
  children?: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}> = (props) => {
  return (
    <section
      {...props}
      style={props.style}
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-6 py-8 md:px-12 md:py-16",
        "landscape:px-20 landscape:py-10 landscape:flex landscape:items-center",
        "w-full min-h-screen bg-cover bg-center bg-no-repeat",
        props.className
      )}
    />
  );
};
