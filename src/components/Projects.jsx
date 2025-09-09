import React, { useState } from "react";
import switchImg from "../assets/SWITCH_Project.png";
import zygon from "../assets/Zygon_Project.png";
import dorm from "../assets/Dorm_Sync.png";
import sparkFoundation from "../assets/Sparkradix_Foundation_Project.png"
import tabletzpharma from "../assets/TabletzPharma_Project.png"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Switch Club",
    techStack: "React, Tailwind",
    date: "June 2024",
    github: "https://github.com/yourusername/switchclub",
    live: "https://switchclub.netlify.app",
    image: switchImg,
    description:
      "Swap items easily within the college community to promote sustainability and save money.",
    hw: ""
  },
  {
    title: "Zygon Website",
    techStack: "React, Tailwind CSS, MongoDb, NodeJs",
    date: "March 2024",
    github: "https://github.com/yourusername/zygon",
    live: "https://zygon.live",
    image: zygon,
    description:
      "A sleek portfolio site for a creative agency featuring animations and a responsive layout.",
    hw: "h-44 w-72"
  },
  {
    title: "Dorm Sync",
    techStack: "MongoDB, Express, React, Node",
    date: "May 2025",
    github: "https://github.com/yourusername/dormsync",
    live: "https://dorm-sync-as7412.vercel.app",
    image: dorm,
    description:
      "An intuitive app for managing hostel room allocations, live sync status, and bed tracking.",
    hw: ""
  },
  {
    title: "Sparkradix Foundation",
    techStack: "Next,Typescript",
    date: "June 2025",
    github: "https://github.com/yourusername/dormsync",
    live: "https://dorm-sync-as7412.vercel.app",
    image: sparkFoundation,
    description:
      "An intuitive app for managing hostel room allocations, live sync status, and bed tracking.",
    hw: ""
  },
  {
    title: "TabletzPharma",
    techStack: "React,Tailwind",
    date: "June 2025",
    github: "https://github.com/yourusername/dormsync",
    live: "https://tabletz-pharma.vercel.app",
    image: tabletzpharma,
    description:
      "An intuitive app for managing hostel room allocations, live sync status, and bed tracking.",
    hw: ""
  },
];

export default function ProjectCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="projects" className="py-12 px-4 w-[90%] md:w-[80%] mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl w-full max-w-[300px] mx-auto h-[22rem]"
          >
            {/* Image */}
            <div className="relative mt-4 mx-4 mb-3">
              <img src={proj.image} alt={proj.title} className={`rounded-xl ${proj.hw}`}  />
            </div>
            {/* Hover Overlay */}
            {hovered === idx && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-20 flex flex-col justify-between p-4 transition-all duration-300">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                  {proj.description}
                </p>
                <div className="text-right mt-2">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black font-medium hover:underline flex items-center justify-end gap-1"
                  >
                    Live Project <FaExternalLinkAlt className="inline-block" />
                  </a>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div
              className={`p-4 transition duration-300 ${
                hovered === idx ? "blur-sm" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-md text-gray-600">{proj.techStack}</p>
              <p className="text-sm text-gray-500 mb-2">
                Published: {proj.date}
              </p>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
