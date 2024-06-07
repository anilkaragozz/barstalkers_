"use client";

import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export function BarsWelcome() {
  const words = ["delicious", "unique", "exquisite", "refreshing"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-28 w-[70%]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Enjoy our
          <FlipWords words={words} />
          cocktails crafted to perfection just for you.
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/barss.gif"
          alt="Martini"
          width={500}
          height={500}
          className="object-cover rounded-2xl"
          draggable="false"
          unoptimized
          priority
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
