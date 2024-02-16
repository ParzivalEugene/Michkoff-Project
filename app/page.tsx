import { Frame } from "@/components/Frame";
import { RunningLine } from "@/components/RunningLine";
import { LeftSection } from "@/sections/LeftSection";
import { RightSection } from "@/sections/RightSection";
import { MainSection } from "@/sections/MainSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <RunningLine />
      <div className="flex flex-1 ">
        <Frame position="left" />
        <div className="m-10 grid flex-1 grid-cols-[16rem_auto_16rem]">
          <LeftSection />
          <MainSection />
          {/* <div></div> */}
          <RightSection />
        </div>
        <Frame position="right" />
      </div>
    </main>
  );
}
