import { generateRandomString } from "@/actions/generateRandomString";
import Image from "next/image";
import { CrossLine } from "@/components/CrossLine";

export const RightSection = () => {
  const string = generateRandomString(92);
  const tags = ["Designer", "ML enthusiast", "Fullstack developer"];

  return (
    <section className="relative flex select-none justify-between py-8 pl-8">
      <CrossLine
        horizontalPosition="left"
        verticalPosition="top"
        direction="horizontal"
        withDot
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
        withDot
      />
      <CrossLine
        horizontalPosition="left"
        verticalPosition="bottom"
        direction="vertical"
      />
      <div className="flex w-min flex-col justify-between gap-5">
        {tags.map((item, key) => (
          <div key={key} className="border border-accent-500 px-3 py-6">
            <h2
              className="text-xl"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {item}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between">
        <Image
          src="/assets/cyber_sign_2.svg"
          alt="cyber_sign_2"
          width={92}
          height={92}
          className="select-none"
        />
        <div className="flex">
          <p
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            className="text-[8px] text-secondary-700"
          >
            {string}
          </p>
          <div className="flex flex-col justify-between uppercase text-primary-500">
            <p
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className="w-min"
            >
              serial number is not found
            </p>
            <p style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
              access denied
            </p>
          </div>
        </div>
        <Image
          src="/assets/cyber_sign_1.svg"
          alt="cyber_sign_1"
          width={64}
          height={64}
          className="select-none"
        />
      </div>
    </section>
  );
};
