"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `I am a highly motivated software developer with a diverse skill set and a passion for building innovative digital solutions. Proficient in HTML, CSS, and JavaScript, I specialize in creating engaging and user-friendly web applications. My expertise extends to modern technologies like React.js for building dynamic front-end interfaces, as well as Node.js and Express.js for server-side development. With experience in MongoDB, I am adept at designing and managing database systems to ensure efficient data storage and retrieval. Additionally, I have a solid foundation in core Java and SQL, enabling me to develop robust backend systems and handle complex data operations. As a dedicated job seeker, I am eager to leverage my skills and contribute to impactful projects in a dynamic work environment.
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
