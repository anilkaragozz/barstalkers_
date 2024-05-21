"use client";

import React from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { TextArea } from "../../components/ui/text-area";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsInstagram } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { cn } from "@/utils/cn";

type ContactForm = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

export function BarsContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Thank you for your message! " + result.message);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to send message: " + error);
    }
  };

  return (
    <footer className="grid grid-flow-col gird-cols-3" id="contact-us">
      <div className="col-span-1 w-full max-w-xl mx-auto p-4">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Us
        </h2>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                {...register("firstname", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                placeholder="Tyler"
                type="text"
                className={errors.firstname ? "border-red-500" : ""}
              />
              {errors.firstname && (
                <p className="text-red-500 text-xs">
                  {errors.firstname.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                {...register("lastname", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
                placeholder="Durden"
                type="text"
                className={errors.lastname ? "border-red-500" : ""}
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs">
                  {errors.lastname.message}
                </p>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register("email", { required: "Email is required" })}
              placeholder="tyler@mail.com"
              type="email"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <TextArea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
              className={`h-30 ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message.message}</p>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-md"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="col-span-1 w-full max-w-md mx-auto rounded-none p-4 bg-transparent">
        <div className="flex flex-col">
          <span className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi
            ea, eligendi explicabo architecto aspernatur! Earum rerum facilis
            aperiam optio, dolor quidem modi perspiciatis magni pariatur quaerat
            eum ad totam.
          </span>
        </div>
        <ul className="flex flex-row gap-6 my-2">
          <li>
            <BsInstagram className="h-8 w-8" />
          </li>
          <li>
            <RiLinkedinBoxLine className="h-8 w-8" />
          </li>
          <li>
            <PiFacebookLogoBold className="h-8 w-8" />
          </li>
        </ul>
        <span>
          &copy; 2024 All rights reserved <br />
        </span>
        <span>BARSTALKERS</span>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.8309936860231!2d29.049458070385484!3d41.08679652571681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca01c585b20f%3A0xccf0dc09c64f9184!2sAy%C5%9Fe%20Abla%20Tekel!5e0!3m2!1str!2str!4v1714946108276!5m2!1str!2str"
          className="border-none h-full w-32 xl:w-96 lg:w-96 md:w-44"
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
