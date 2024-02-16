import { Star } from "@/animations/Star";
import Image from "next/image";
import { CrossLine } from "@/components/CrossLine";

export const LeftSection = () => {
  return (
    <section className="relative flex select-none flex-col justify-between py-8 pr-8">
      <CrossLine
        horizontalPosition="right"
        verticalPosition="top"
        direction="horizontal"
        withDot
      />
      <CrossLine
        horizontalPosition="right"
        verticalPosition="top"
        direction="vertical"
      />
      <CrossLine
        horizontalPosition="right"
        verticalPosition="bottom"
        direction="horizontal"
        withDot
      />
      <CrossLine
        horizontalPosition="right"
        verticalPosition="bottom"
        direction="vertical"
      />
      <Image src="/assets/torus.svg" width={207} height={210} alt="torus" />
      <Star />
      <div className="flex gap-4 pl-4">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/protocol_icon.svg"
            width={56}
            height={10}
            alt="protocol"
          />
          <p className="text-center text-[10px] text-xs uppercase text-primary-500">
            Protocol
          </p>
          <p className="-mt-[4px] text-center text-[10px] text-xs uppercase text-primary-500">
            2024-msk
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[8px] uppercase">User identified</p>
          <p className="text-[8px] uppercase">Breaching completed</p>
          <p className="text-[8px] uppercase">Compiling daemon</p>
        </div>
      </div>
    </section>
  );
};
