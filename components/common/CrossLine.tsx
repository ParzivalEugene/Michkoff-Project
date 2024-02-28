import { cn } from "@/lib/utils";
import { FC } from "react";

const LINE_LENGTH = 240;
const TIP_LENGTH = 24;

interface CrossLineBase {
  verticalPosition: "top" | "bottom";
  horizontalPosition: "left" | "right";
  direction: "horizontal" | "vertical";
}

interface CrossLineProps extends CrossLineBase {
  withDot?: boolean;
}

interface LineProps extends CrossLineBase {
  type: "main" | "tip";
}

const Line: FC<LineProps> = ({
  verticalPosition,
  horizontalPosition,
  direction,
  type,
}) => {
  const getStyle = () => {
    const color = type === "main" ? "rgb(15, 87, 87)" : "rgb(59, 222, 222)";
    if (direction === "horizontal") {
      return {
        width: type === "main" ? LINE_LENGTH : TIP_LENGTH,
        top: verticalPosition === "top" ? 0 : "auto",
        bottom: verticalPosition === "bottom" ? 0 : "auto",
        left: horizontalPosition === "left" ? 16 : "auto",
        right: horizontalPosition === "right" ? 16 : "auto",
        borderTop: verticalPosition === "top" ? `1px solid ${color}` : "0 ",
        borderBottom:
          verticalPosition === "bottom" ? `1px solid ${color}` : "0",
      };
    }
    return {
      height: type === "main" ? LINE_LENGTH : TIP_LENGTH,
      left: horizontalPosition === "left" ? 0 : "auto",
      right: horizontalPosition === "right" ? 0 : "auto",
      top: verticalPosition === "top" ? 16 : "auto",
      bottom: verticalPosition === "bottom" ? 16 : "auto",
      borderLeft: horizontalPosition === "left" ? `1px solid ${color}` : "0",
      borderRight: horizontalPosition === "right" ? `1px solid ${color}` : "0",
    };
  };
  return (
    <div
      style={getStyle()}
      className={cn("absolute", {
        "border-accent-800": type === "main",
        "border-accent-500": type === "tip",
      })}
    />
  );
};

export const CrossLine: FC<CrossLineProps> = (props) => {
  const { withDot, ...data } = props;
  return (
    <>
      <Line {...data} type="main" />
      <Line {...data} type="tip" />
      {withDot && (
        <div
          className="absolute h-[3px] w-[3px] bg-accent-500"
          style={{
            top: props.verticalPosition === "top" ? -1 : "auto",
            bottom: props.verticalPosition === "bottom" ? -1 : "auto",
            left: props.horizontalPosition === "left" ? -1 : "auto",
            right: props.horizontalPosition === "right" ? -1 : "auto",
          }}
        />
      )}
    </>
  );
};
