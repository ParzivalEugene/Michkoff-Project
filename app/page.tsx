import { Frame, RunningLine } from "@/components/common";
import { LeftSection, MainSection, RightSection } from "@/sections";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <RunningLine />
      <div className="flex flex-1 ">
        <Frame position="left" />
        <div className="m-10 grid flex-1 grid-cols-[16rem_auto_16rem]">
          <LeftSection />
          <MainSection />
          <RightSection />
        </div>
        <Frame position="right" />
      </div>
    </main>
  );
}
