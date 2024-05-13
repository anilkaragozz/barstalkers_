"use client"

import Image from "next/image";

export function BarsSlider() {
  return (
    <div className="grid grid-row grid-cols-2 h-full mx-40">
      <div className="flex justify-center items-center col-span-1">
        <span className="text-black text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          dolorum voluptatem mollitia cumque repudiandae modi quaerat explicabo
          minima aliquam labore.
        </span>
      </div>
      <Image
        src="/martini.png"
        alt="dummy image"
        width="1000"
        height="1000"
        draggable="false"
        className="col-span-1 object-cover md:h-[90%] inset-x-0 my-20 "
      />
    </div>
  );
}
