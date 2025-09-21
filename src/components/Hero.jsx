import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import  toon from "../assets/toon.jpg"
import  sahillogo from "../assets/sahillogo.png"

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center mt-5 lg:mt-14">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-xl lg:text-4xl text-center font-bold text-indigo-600"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Competitive Programmer",
            "Tech Enthusiast",
          ]}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          loop={true}
        />
      </motion.div>
      <h1 className="pt-10 text-md lg:text-3xl font-semibold text-center">
        Crafting code that brings ideas to life, one algorithm at a time.
      </h1>
  <div className="pt-10 flex flex-col items-center">
  <img
    className="h-72 w-72 rounded-full"
    src={sahillogo}
    alt="Sahil Logo"
  />
</div>



      <div className="pt-[8rem] lg:w-[67rem] ">
        <img src="https://mattfarley.ca/img/hero-devices.svg" />
      </div>
    </div>
  );
}