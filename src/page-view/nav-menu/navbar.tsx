"use client";

import Image from "next/image";
import { Menu, MenuItem } from "../../components/ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="relative w-[5rem]"
          draggable={false}
        />
        <MenuItem item="About Us" id="#about" />
        <MenuItem item="Reference" id="#reference" />
        <MenuItem item="Contact Us" id="#contact-us" />
      </Menu>
    </div>
  );
}

export function BarsNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
