import { generateRandomString } from "@/actions/generateRandomString";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { FC } from "react";

export type FramePosition = "left" | "right";
interface FrameProps {
  position: FramePosition;
}

const frameVariants = cva("flex flex-none items-center uppercase", {
  variants: {
    variant: {
      left: "pl-1",
      right: "flex-row-reverse pr-1",
    },
    defaultVariants: {
      variant: "left",
    },
  },
});

export const Frame: FC<FrameProps> = ({ position }) => {
  const string = generateRandomString(120);

  return (
    <div className={cn(frameVariants({ variant: position }))}>
      <p
        style={{ writingMode: "vertical-lr" }}
        className={cn(
          "text-xs text-primary-500",
          position === "left" && "rotate-180",
        )}
      >
        alpha version development in progress
      </p>
      <p
        style={{ writingMode: "vertical-lr" }}
        className={cn(
          "text-[8px] text-secondary-700",
          position === "left" && "rotate-180",
        )}
      >
        {string}
      </p>
    </div>
  );
};
