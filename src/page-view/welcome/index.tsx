"use client";

import Image from "next/image";

export function BarsWelcome() {
  return (
    <div className="flex justify-between items-center mx-auto h-full w-[80%]">
      <div className="mx-40 my-32">
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
        className="object-cover h-[30%] xl:h-[80%] lg:h-[60%] md:h-[50%] sm:h-[40%] inset-x-0 my-28"
      />
    </div>
  );
}
