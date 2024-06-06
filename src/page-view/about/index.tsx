"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function BarsAbout() {
  const tabs = [
    {
      title: "Who are we?",
      value: "who",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">Who are we</p>

          <div className="grid grid-row grid-cols-2 my-5">
            <div className="col-span-1">
              <p className="text-stone-700">
                We are a team of passionate mixologists dedicated to creating
                unforgettable experiences through the art of cocktail crafting.
                With years of expertise and a love for mixology, we bring
                creativity and innovation to every drink we make.
              </p>
            </div>
            <Image
              src="/WhoAreWe.jpeg"
              alt="WhatWeDo"
              width={400}
              height={50}
              className="col-span-1 object-cover inset-x-0 rounded-xl mx-auto"
              priority={true}
            />
          </div>
        </div>
      ),
    },

    {
      title: "What we do?",
      value: "what",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">What we do</p>
          <div className="grid grid-row grid-cols-2 my-5">
            <div className="col-span-1">
              <p className="text-stone-700">
                At our core, we specialize in crafting exquisite cocktails that
                tantalize the senses and elevate any occasion. From classic
                favorites to innovative creations, each drink is meticulously
                prepared using the finest ingredients and techniques.
              </p>
            </div>
            <Image
              src="/WhatWeDo.jpeg"
              alt="WhatWeDo"
              width={400}
              height={50}
              className="col-span-1 object-cover inset-x-0 rounded-xl mx-auto"
              priority={true}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Why us?",
      value: "why",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">Why us</p>
          <div className="grid grid-row grid-cols-2 my-5">
            <div className="col-span-1">
              <p className="text-stone-700">
                Choose us because we go above and beyond to make every sip
                memorable. Our commitment to excellence ensures that each
                cocktail is not just a drink, but an experience. Whether it's a
                private event or a corporate gathering, trust us to exceed your
                expectations.
              </p>
            </div>
            <Image
              src="/WhyUs.jpeg"
              alt="WhyUs"
              width={400}
              height={50}
              className="col-span-1 object-cover inset-x-0 rounded-xl mx-auto"
              priority={true}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div
        className="h-[35rem] xl:h-[50rem] lg:h-[50rem] md:h-[50rem] sm:h-[40rem] w-full max-w-5xl [perspective:1000px] relative flex flex-col mx-auto items-start justify-start"
        id="about"
      >
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
