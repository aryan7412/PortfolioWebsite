import React from "react";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-black text-sm py-10 px-6 w-[60%] mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation as anchor */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#about" className="hover:text-gray-600">About Me</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#experience" className="hover:text-gray-600">Experience</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-lg justify-center">
          <a href="https://github.com/aryansamal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://www.hackerrank.com/aryansamal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaHackerrank />
          </a>
          <a href="https://www.geeksforgeeks.org/user/aryansamal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <SiGeeksforgeeks />
          </a>
          <a href="https://leetcode.com/aryansamal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © 2025 Aryan Samal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
