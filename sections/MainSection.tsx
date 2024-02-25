import { Spinner } from "@/components/animations";
import { BoxWithCorners, CrossLine } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { GrUbuntu } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ASCII } from '@/components/3d/face/ascii'

export const MainSection = () => {
  const data = {
    visitLinks: "Visit links",
    citizenDetected: "Citizen detected",
    infoCard: {
      name: "Eugene Michkov",
      location: "Moscow/Russia",
      age: "Level 18",
      description:
        "Middle Frontend developer. Cooks delicious. Enjoys neo-futurism. Have a cat named Usurper.",
      dataIsMissing: "Data is missing...",
    },
    tags: ["Designer", "ML enthusiast", "Fullstack developer"],
  };

  return (
    <section className="relative flex p-8">
      <CrossLine
        horizontalPosition="left"
        verticalPosition="top"
        direction="horizontal"
      />
      <CrossLine
        horizontalPosition="left"
        verticalPosition="top"
        direction="vertical"
      />
      <CrossLine
        horizontalPosition="left"
        verticalPosition="bottom"
        direction="horizontal"
      />
      <CrossLine
        horizontalPosition="left"
        verticalPosition="bottom"
        direction="vertical"
      />
      <CrossLine
        horizontalPosition="right"
        verticalPosition="top"
        direction="horizontal"
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
      />
      <CrossLine
        horizontalPosition="right"
        verticalPosition="bottom"
        direction="vertical"
      />
      <div className="flex h-full items-stretch gap-5">
        <div className="z-10 flex flex-col gap-5">
          <div className="flex flex-1 flex-col items-stretch">
            <div className="flex justify-center border border-primary-500 px-6 py-3">
              <h1 className="text-4xl font-bold uppercase">Michkoff.com</h1>
            </div>
            <div className="flex h-full min-w-96 items-center justify-center border-x border-primary-500 bg-background">
              <Spinner />
            </div>
            <Link href="https://links.michkoff.com">
              <div className="flex justify-center border border-primary-500 bg-secondary-500 px-6 py-3 transition-colors hover:bg-secondary-700">
                <p className="text-2xl uppercase">{data.visitLinks} 浏览连结</p>
              </div>
            </Link>
          </div>
          <BoxWithCorners className="flex flex-col items-center gap-2 px-6 py-3">
            <p className="text-2xl uppercase">{data.citizenDetected}</p>
            <Image
              src="/assets/barcode.svg"
              width={268}
              height={50}
              alt="barcode"
              className="select-none"
            />
          </BoxWithCorners>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex w-fit justify-center border border-accent-500 p-4">
            <p
              style={{ textOrientation: "upright", writingMode: "vertical-lr" }}
              className="text-2xl text-accent-500"
            >
              公开招聘
            </p>
          </div>
          <div className="z-10 w-min">
            <div className="flex justify-center border-x border-t border-primary-500 bg-background px-6 py-3">
              <h3 className="text-2xl">微芯片与信</h3>
            </div>
            <div className="hero-section-cut px-6 py-3">
              <h2 className="mb-3 w-max text-2xl font-medium text-accent-500">
                {data.infoCard.name}
              </h2>
              <div className="flex flex-col gap-1 ">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="text-text" />
                  <p className="font-medium">{data.infoCard.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <GrUbuntu className="text-text" />
                  <p className="font-medium">{data.infoCard.age}</p>
                </div>
              </div>
              <p className="my-6 text-xs">{data.infoCard.description}</p>
              <p className="uppercase text-primary-500">
                {data.infoCard.dataIsMissing}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 aspect-square h-full">
        <ASCII />
      </div>
    </section>
  );
};
