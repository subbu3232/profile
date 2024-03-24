"use client";
import React from "react";
import { TypewriterEffect } from "./typewriter";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    {
      text: "Subrahmanyam",
    },
    {
      text: "aka",
    },
    {
      text: "Subbu.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Welcome To My Profile
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        
      </div>
    </div>
  );
}
