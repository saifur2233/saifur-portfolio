import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'IIT, Noakhali Science and Technology University',
    period: '2018 - 2023',
        CGPA: '3.63 (in scale of 4), Graduated',
  },
  {
      degree: 'HSC - Higher Secondary School Certificate',
      institution: 'Ispahani Public School and College',
    period: '2015 - 2017',
      score: 'Major: Science, Obtained GPA: 4.83 (in scale of 5)',
  },
  {
      degree: 'SSC - Secondary School Certificate',
      institution: "Dharmapur Nazim Ali High School and College",
    period: '2013 - 2015',
      score: 'Major: Science, Obtained GPA: 5.00 (on a scale of 5)',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
