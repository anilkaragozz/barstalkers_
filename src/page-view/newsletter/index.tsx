"use client";

import { Input } from "@/components/ui/input";
import { Meteors } from "@/components/ui/meteors";

import React, { useState } from "react";

export function BarsNewsletter() {
  //Todo: Create a firebase or mongoDB connection and subscribe the user to the newsletter, You should use reach-hook form and create a api for sending the data to the database
  // ps: do not miss control to mail is already in the database
  // reasearch to how can send mail automatically

  /*
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
  
  */

  const [isVisable, setIsVisable] = useState<boolean>(true);

  // Todo: create aler message and time out for the message

  const onSubmit = () => {
    setIsVisable(false);
    console.log(isVisable);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center bg-transparent">
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h2>Bültene kayıt ol babus</h2>
            <Input />

            <button
              className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
              onClick={onSubmit}
            >
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
