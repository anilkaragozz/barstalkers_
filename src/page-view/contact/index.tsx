"use client";

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";

const contactIcons = [
  {
    icon: <BsInstagram className="h-8 w-8" />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <RiLinkedinBoxLine className="h-8 w-8" />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <PiFacebookLogoBold className="h-8 w-8" />,
    link: "https://www.facebook.com/",
  },
];

export function BarsContact() {
  return (
    <>
      <footer
        className="flex justify-between items-center mx-auto w-[70%]"
        id="contact-us"
      >
        <div className="max-w-md bg-transparent">
          <div className="flex flex-col">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              sequi ea, eligendi explicabo architecto aspernatur! Earum rerum
              facilis aperiam optio, dolor quidem modi perspiciatis magni
              pariatur quaerat eum ad totam.
            </span>
          </div>
          <ul className="flex flex-row gap-6 my-2">
            {contactIcons.map((item, index) => (
              <a key={index} href={item.link}>
                <li> {item.icon} </li>
              </a>
            ))}
          </ul>
          <span>
            &copy; 2024 All rights reserved <br />
          </span>
          <span>BARSTALKERS</span>
        </div>

        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.8309936860231!2d29.049458070385484!3d41.08679652571681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca01c585b20f%3A0xccf0dc09c64f9184!2sAy%C5%9Fe%20Abla%20Tekel!5e0!3m2!1str!2str!4v1714946108276!5m2!1str!2str"
            className="border-none h-full w-32 xl:w-full lg:w-full md:w-44"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </>
  );
}
