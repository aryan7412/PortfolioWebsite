import React from 'react';
import Button from './Button';
import { BsDownload } from "react-icons/bs";

function Navbar() {
  return (
    <div className='w-full px-10 pt-6 flex items-center justify-center gap-x-40 bg-transparent'>
      {/* Logo and Name */}
      <div className='flex items-center gap-2'>
        <img width="40" height="40" src="/name-logo.png" alt="Logo" />
        <div className='text-2xl font-bold text-black'>aryan samal</div>
      </div>

      {/* Navlinks */}
      <div className='hidden md:flex gap-8 text-[1.2rem] font-medium text-black/70'>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#experience" className="hover:text-black">Experience</a>
        <a href="#contact" className="hover:text-black">Contact Me</a>
      </div>

      {/* Download Resume Button */}
      <Button ButtonText="Download Resume" ButtonLogo={BsDownload} />
    </div>
  );
}

export default Navbar;
