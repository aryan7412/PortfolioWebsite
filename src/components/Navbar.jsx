import React, { useState } from 'react';
import Button from './Button';
import { BsDownload } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className='w-full px-4 sm:px-10 pt-6 flex items-center justify-between bg-transparent relative'>
      {/* Logo and Name */}
      <div className='flex items-center gap-2'>
        <img width="40" height="40" src="/name-logo.png" alt="Logo" />
        <div className='text-xl sm:text-2xl font-bold text-black'>aryan samal</div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-2xl text-black'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Desktop Navlinks */}
      <div className='hidden md:flex gap-8 text-[1.2rem] font-medium text-black/70'>
        <button onClick={() => scrollToSection('about')} className="hover:text-black">About</button>
        <button onClick={() => scrollToSection('skills')} className="hover:text-black">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-black">Projects</button>
        <button onClick={() => scrollToSection('experience')} className="hover:text-black">Experience</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-black">Contact Me</button>
      </div>

      {/* Download Resume Button */}
      <div className="hidden md:block">
        <Button ButtonText="Download Resume" ButtonLogo={BsDownload} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50'>
          <div className='flex flex-col p-4 gap-4'>
            <button onClick={() => scrollToSection('about')} className="text-black hover:text-gray-600">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-black hover:text-gray-600">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-black hover:text-gray-600">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-black hover:text-gray-600">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-black hover:text-gray-600">Contact Me</button>
            <Button ButtonText="Download Resume" ButtonLogo={BsDownload} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
