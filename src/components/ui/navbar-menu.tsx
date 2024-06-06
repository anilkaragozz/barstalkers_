import React from "react";
import { motion } from "framer-motion";

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
    <div className="relative col-span-auto">
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
      <nav className="relative rounded-full bg-slate-50 border-slate-400 grid grid-cols-4 gap-4 items-center px-4 py-2">
        {children}
      </nav>
    </>
  );
};
