"use client";

import Image from "next/image";
import { Tabs } from "../../components/ui/tabs";

export function BarsAbout() {
  const tabs = [
    {
      title: "Who are we?",
      value: "who",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">Who are we</p>
          <DummyContent />
        </div>
      ),
    },

    {
      title: "What we do?",
      value: "what",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">What we do</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Why us?",
      value: "why",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-100 to-slate-100">
          <p className="text-black">Why us</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <>
      <div
        className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start"
        id="about"
      >
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-row grid-cols-2 h-full my-5">
      <div className="col-span-1">
        <span className="text-stone-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quia!
        </span>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="dummy image"
        width="1000"
        height="1000"
        className="col-span-1 object-cover md:h-[90%] inset-x-0 rounded-xl mx-auto"
      />
    </div>
  );
};
