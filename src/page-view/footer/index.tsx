"use client";

import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { NewsletterInputs } from "@/page-view/newsletter";

const contactIcons = [
  {
    icon: (
      <Image
        src="https://img.icons8.com/color/48/instagram-new--v1.png"
        width={50}
        height={50}
        alt="Instagram"
      />
    ),
    link: "https://www.instagram.com/barstalkers",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src="https://img.icons8.com/color/48/whatsapp--v1.png"
        alt="whatsapp"
      />
    ),
    link: "https://wa.me/05330939838",
  },
  {
    icon: (
      <Image
        width={50}
        height={50}
        src="https://img.icons8.com/fluency/48/mail--v1.png"
        alt="Mail"
      />
    ),
    link: "mailto:hello@barstalkers.com",
  },
];

export function BarsFooter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterInputs>();

  const onSubmit: SubmitHandler<NewsletterInputs> = async (email) => {
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.email,
          firstName: email.email.split("@")[0],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      toast.success("Thanks for subscribing!");
    } catch (error) {
      toast.error("Failed to send email");
    }
  };

  return (
    <>
      <footer
        className="flex flex-col gap-8 lg:flex-row justify-between items-center mx-auto my-10 w-[70%]"
        id="contact-us"
      >
        <div className="min-w-xl bg-transparent mb-6 lg:mb-0">
          <div className="flex flex-col">
            <p className="text-xl">
              From exquisite flavors crafted to delight every palate, to
              impeccable service ensuring unforgettable moments, we're here to
              cater to your every need and exceed your expectations!
            </p>
          </div>
          <ul className="flex flex-row gap-6 my-2">
            {contactIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="inline-block transition duration-300 filter grayscale hover:filter-none transform hover:scale-110"
              >
                <li> {item.icon} </li>
              </a>
            ))}
          </ul>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex w-full">
              <input
                {...register("email", { required: true })}
                placeholder="Enter your email to be informed about us"
                className="p-4 border outline-slate-200 rounded-l-lg w-3/4 bg-white"
                disabled
              />
              <button
                type="submit"
                className="p-4 bg-orange-300 text-stone-700 rounded-r-lg transition w-1/4"
                disabled
              >
                Subscribe
              </button>
            </div>
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.1942788879805!2d29.047088175366408!3d41.08660161459946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca01c574a677%3A0x9f34d66c772fe8b4!2sRumeli%20Hisar%C4%B1%2C%20Nisbetiye%20Cd%20No%3A75%2C%2034470%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1724852984765!5m2!1str!2str"
          className="border-none h-full w-full"
          loading="eager"
        ></iframe>
      </footer>
      <span className="text-center block text-black py-8 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          &copy; 2024 Barstalker
          <span className="origin-center rotate-45 inline text-center text-black">
            s
          </span>
        </div>
        <div>All rights reserved</div>
      </span>
    </>
  );
}
