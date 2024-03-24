"use client";
import React from "react";
import { TypewriterEffect } from "./typewriter";

export default function TypewriterEffectDemotwo() {
  const words = [
    {
      text: "Connect",
    },
    {
      text: "me",
    },
    {
      text: "socially",
    },
    {
      text: "through",
    },
    {
        text: "below",
      },
    {
      text: "Links.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
     
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        
      </div>
    </div>
  );
}
