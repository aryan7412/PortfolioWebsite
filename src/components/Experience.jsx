import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample timeline data
const timelineElements = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Silicon University, On-site",
    description: "Worked with React and Tailwind to build reusable components.",
    date: "Jan 2025 - Mar 2025",
    tech: ["React", "Tailwind", "Git", "Javascript"],
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "SDE Intern",
    location: "Sparkradix Technologies, On-site",
    description: "Worked with React and Tailwind to build reusable components.",
    date: "June 2025 - Present",
    tech: ["Next", "Tailwind", "Git", "Typescript"],
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "SDE Intern",
    location: "XYZ University",
    description: "Graduated with a focus in Web Technologies and AI.",
    date: "August 2025 - Present",
    tech: ["Python", "HTML", "CSS"],
    color: "bg-green-500",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-20 w-[70%] mx-auto">
      {/* Timeline line */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 h-[calc(100%-8rem)] w-1 bg-gray-300 z-0" />

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-20 z-10 relative">My Experience</h2>

        <div className="relative space-y-20">
          {timelineElements.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                data-aos="fade-up"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-4 z-10">
                  <div className={`w-5 h-5 rounded-full border-4 border-white ${item.color} shadow-md`} />
                </div>

                {/* Card */}
                <div className={`md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
