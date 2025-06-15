import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background radial gradients */}
      <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,189,210,0.55)_0%,transparent_80%)] z-0" /> {/* RED */}
      <div className="absolute top-[-10px] right-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(194,223,255,0.8)_0%,transparent_80%)] z-0" /> {/* BLUE */}
      <div className="absolute bottom-1 right-80 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,200,255,0.7)_0%,transparent_80%)] z-0" /> {/* PINK */}

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-8 px-4 md:px-12">

        {/* Row: Social icons + Image */}
        <div className="flex justify-center items-center gap-x-20 mx-auto">
        {/* Social Icons Left */}
          <div className="flex flex-col gap-6 text-xl text-black">
            <a href="#"><FiGithub /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><SiGeeksforgeeks /></a>
            <a href="#"><LiaHackerrank /></a>
          </div>

          {/* Profile Image with background shape */}
          <div className="relative flex items-center justify-center">
            <img
              src="/Imageeeee-2.png"
              alt="Aryan Samal"
              className="relative z-10 w-full h-[35rem] object-contain"
            />
          </div>
        </div>


        {/* Text under image */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-sans text-black">
            Aryan Samal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            SOFTWARE ENGINEER 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
