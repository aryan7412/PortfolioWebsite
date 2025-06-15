import React from 'react'
import { useEffect, useState } from 'react';

const phrases = [
  "Aryan Samal!",
  "a Frontend Developer!",
  "a Backend Developer!",
  "a MERN Stack Developer!"
];
function About() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 70 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {}, 1000);
        } else {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);
  return (
    <div className="min-h-screen w-full text-black">
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 gap-16 max-w-6xl mx-auto">
      {/* Image */}
      <div className="w-96 h-[35rem]">
        <img
          src="/Imageee1.png"
          alt="Profile"
          className="w-full h-full" 
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col text-left max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">HELLO!!</h1>
        <h2 className="text-2xl font-semibold  mb-6">
          I am <span className="typing">{text}</span>
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed text-[1.1rem]">
          I’m a passionate{" "}
          <span className="font-semibold text-black">
            MERN stack web developer
          </span>{" "}
          who loves bringing ideas to life through clean code, intuitive
          design, and dynamic user experiences. Whether it’s building
          full-stack applications or crafting slick frontends, I thrive in
          that sweet spot where creativity meets logic.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed text-[1.1rem]">
          Outside of tech, I’m just as driven — you’ll usually find me playing
          football, solving puzzles and cubes, or deep-diving into geopolitics
          and global trends. I love staying curious about the world and how
          everything connects.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed text-[1.1rem]">
          I enjoy traveling, discovering new perspectives, and growing through
          real conversations. As an ambivert learning to be more outgoing, I
          like mixing with new people, adapting to different spaces, and
          building meaningful connections wherever I go.
        </p>

        <p className="text-gray-700 leading-relaxed text-[1.1rem]">
          Strategy is in my DNA — whether on the field, in a project, or just
          life in general, I love thinking ahead and figuring out the best way
          to make things work.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About