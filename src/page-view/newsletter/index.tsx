"use client";

import { useVisibilityStore } from "@/context";
import React, { useEffect } from "react";

export function BarsNewsletter() {
  const { isVisible, toggleVisibility } = useVisibilityStore();

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    toggleVisibility();
    console.log(isVisible, "burda");
  };

  const handleClose = () => {
    toggleVisibility();
  };

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
            <button
              type="button"
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 transition"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-center text-gray-600">
              Subscribe to our newsletter to get the latest updates right to
              your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center mt-6"
            >
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-4 border outline-slate-200 rounded-l-lg w-3/4 "
                />
                <button
                  type="submit"
                  className="p-4 bg-orange-400 text-white rounded-r-lg hover:bg-orange-500 transition w-1/4"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
