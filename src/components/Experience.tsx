import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Software Engineer",
    company: "Tappware Solutions LimitedCyberxield Solutions",
    period: "Dec 2023 - Present",
    description: `Developed and maintained dynamic web applications using the MERN stack for seamless user experience. 
    Designed and developed a real-time interactive dashboard that significantly increased user engagement by 40%. 
    Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.`,
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
  },
  {
    title: "Software Engineer (Remote)",
    company: "Affordable Life",
    period: "Oct 2021 - Dec 2022",
    description: `Led a dedicated team of 4 developers in designing and creating the college event management platform. 
    Successfully launched a scalable event platform used by 1000+ students, improving event organization. 
    Mentored and guided 4 junior developers in modern full-stack web technologies and best coding practices.`,
    skills: ["Next.js", "PostgreSQL", "Git", "TailwindCSS", "Team Leadership"],
    },
    {
    title: "Trainee Software Engineer",
    company: "CEFALO Bangladesh Ltd.",
    period: "Apr 2022 - Oct 2022",
    description: `Led a dedicated team of 4 developers in designing and creating the college event management platform. 
    Successfully launched a scalable event platform used by 1000+ students, improving event organization. 
    Mentored and guided 4 junior developers in modern full-stack web technologies and best coding practices.`,
        skills: ["Next.js", "PostgreSQL", "Git", "TailwindCSS", "Team Leadership"],
    },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
