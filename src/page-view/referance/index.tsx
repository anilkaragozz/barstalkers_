"use client";

import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

const testimonials = [
  {
    src: "/Louis_Vuitton_logo.png",
    alt: "Louis Vuitton",
    name: "Barstalkers1",
  },
  {
    src: "/the-macallan-logo.png",
    alt: "The Macallan",
    name: "Barstalkers2",
  },
  {
    src: "/philips-logo.png",
    alt: "Philips",
    name: "Barstalkers3",
  },
  {
    src: "/Dimes-logo.png",
    alt: "Dimes",
    name: "Barstalkers5",
  },
  {
    src: "/Harman-logo.png",
    alt: "Harman Coffee",
    name: "Barstalkers6",
  },
  {
    src: "/kalafilm-logo.png",
    alt: "Kalafilm",
    name: "Barstalkers7",
  },
  {
    src: "/sephora-logo.png",
    alt: "Sephora",
    name: "Barstalkers4",
  },
  {
    src: "/paxie-logo.png",
    alt: "Paxie",
    name: "Barstalkers8",
  },
];

export function BarsReferance() {
  return (
    <>
      <h1
        className="flex justify-center items-center text-2xl font-semibold p-4 mt-40"
        id="reference"
      >
        OUR REFERENCES
      </h1>
      <div className="h-[15rem] flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}
