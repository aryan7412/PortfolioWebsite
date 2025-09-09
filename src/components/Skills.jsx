import React from "react";

// Grouped into lines to control alignment
const frontendSkills = [
  ["HTML", "CSS", "JavaScript", "React"],
  ["Next JS", "Tailwind CSS", "Framer Motion", "DOM"],
  ["Bootstrap", "TypeScript"]
];

const backendSkills = [
  ["Node", "Express", "REST API", "MongoDB"],
  ["JWT/OAuth","SQL", "DB Modeling", "Postman" ],
  ["Prisma ORM" , "Postgres","Stripe Payments"]
];

const tools = [
  ["Docker", , "Zed", "Vs Code", "React Native"],
  ["Netlify", "Vercel", "Render", "Git", "GitHub", "Canva", "Figma",],
  [ "C/C++","Python","DSA", "DBMS", "Computer Networks", "Operating System"]
];

function Skills() {
  const SkillGroup = ({ skills }) => (
    <div className="flex flex-col gap-3">
      {skills.map((line, index) => (
        <div key={index} className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {line.map((skill, i) => (
            <span
              key={i}
              className="text-black px-4 py-1 rounded-md border border-black text-[1rem] font-medium hover:scale-105 transition transform duration-200 drop-shadow-glow"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="min-h-screen text-black px-6 py-20 ">
      <div className="max-w-6xl mx-auto text-center w-[60rem]">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-widest text-black">
            MY SKILLS
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-2 mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 text-left">
          <div>
            <SkillGroup skills={frontendSkills} />
          </div>

          <div>
            <SkillGroup skills={backendSkills} />
          </div>
        </div>

        <div className="mt-16">
          <SkillGroup skills={tools} />
        </div>
      </div>
    </section>
  );
}

export default Skills;