"use client";

import Marquee from "react-fast-marquee";

export const RunningLine = () => {
  const data = {
    common: [
      "MICHKOFF.COM",
      "Developer",
      "Digital Creator",
      "Cyclist",
      "Pythonista",
      "Let him cook!",
      "Database Engineer",
      "Pianist",
      "Rust enjoyer",
      "Cyberpsycho",
    ],
    openToJobOffers: "Open to job offers",
  };

  return (
    <section className="flex-none border-red-500 border-y border-primary-500 bg-background py-3 text-sm uppercase">
      <Marquee autoFill speed={90}>
        {data.common.map((item, index) => (
          <div
            key={index}
            className="mx-4 border border-secondary-500 px-6 py-3"
          >
            <p>{item}</p>
          </div>
        ))}
        <div className="mx-4 border border-accent-500 px-6 py-3 text-accent-500">
          <h2>{data.openToJobOffers}</h2>
        </div>
      </Marquee>
    </section>
  );
};
