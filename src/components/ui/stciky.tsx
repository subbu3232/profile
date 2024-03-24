"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "About",
    description:
      "Middle-class dreamer striving for a career in software development. Electronics and Communication Engineer with a knack for cricket and volleyball. Passionate photographer capturing life's moments with creativity. Social butterfly fostering connections and meaningful conversations. Ready to merge technical expertise with sporting spirit and creative pursuits. Let's build a brighter future together. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
<img src="./profileimg.jpeg" alt="Profile" /></div>
    ),
  },
  {
    title: "Projects",
    description:
      "Explore my portfolio featuring an ecommerce website crafted with React, a live weather application, and a cryptocurrency price tracker. Each project is meticulously documented on my GitHub profile for further exploration.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Skills",
    description:
      "Proficient in HTML, CSS, and JavaScript, with expertise in React.js and Node.js. Experienced in database management using MongoDB and SQL. Familiar with Express.js for server-side development. Additionally, knowledgeable in Core Java and proficient in version control using Git.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  }
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
