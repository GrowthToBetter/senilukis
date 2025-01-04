import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const PageContainer: FC<{
  children?: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "mx-auto min-h-screen w-full px-6 py-8",
        "landscape:flex landscape:flex-row landscape:items-center landscape:justify-center",
        className
      )}
    >
      {children}
    </main>
  );
};
