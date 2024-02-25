import { cn } from "@/lib/utils";

interface BoxWithCornersProps {
  className?: string;
  children: React.ReactNode;
}

export const BoxWithCorners: React.FC<BoxWithCornersProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative box-border border border-secondary-500",
        className,
      )}
    >
      <div className="absolute -left-[1px] -top-[1px] h-4 w-4 border-l border-t border-primary-500" />
      <div className="absolute -bottom-[1px] -left-[1px] h-4 w-4 border-b border-l border-primary-500" />
      <div className="absolute -right-[1px] -top-[1px] h-4 w-4 border-r border-t border-primary-500" />
      <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b border-r border-primary-500" />
      {children}
    </div>
  );
};
