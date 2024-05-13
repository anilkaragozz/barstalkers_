"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const MenuItem = ({
  item,
  id,
}: {
  active?: string | null;
  item: string;
  children?: React.ReactNode;
  id: string;
}) => {
  return (
    <div onClick={() => console.log(id)} className="relative col-span-auto">
      <motion.a
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9]"
        href={id}
      >
        {item}
      </motion.a>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="relative rounded-full border-transparent bg-stone-50 shadow-input grid grid-cols-5 gap-6 items-center space-x-4 px-4 py-2">
        {children}
      </nav>
    </>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};
