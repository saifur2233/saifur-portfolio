import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
};

// Define projects data
const projects = [
  {
    title: 'MediQuick | Medical Solution',
    description: 'MediQuick is a blockchain-based system designed to address the critical issue of counterfeit drugs in the pharmaceutical industry. With the aim of ensuring patient safety and protecting public health, MediQuick offers an innovative solution that leverages blockchain technology to track and authenticate medications throughout the supply chain.',
    image: '/assets/medi-quick.png',
        link: 'https://medi-quick-app.netlify.app/',
        github: 'https://github.com/saifur2233/MediQuick',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
      title: 'Pizza Lover',
      description: 'Pizza-Lover is an online pizza ordering platform that brings a fast and convenient way to enjoy your favorite pizzas from the comfort of your home. As a dedicated fast-food shop, Pizza-Lover offers a wide range of pizza varieties to satisfy every craving, from classic favorites like Margherita and Pepperoni to gourmet options with unique toppings.',
      image: '/assets/pizza-lover.png',
      link: 'https://pizza-lover-bd.netlify.app/',
      github: 'https://github.com/saifur2233/ReactJS_Project_Pizza-Lover',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.',
    image: '/assets/portfolio.webp',
    link: 'https://deepakmodi.vercel.app',
    github: 'https://github.com/decodewithdeepak/portfolio',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
    title: 'NeoCompiler',
    description: 'An online compiler supporting multiple languages with auth, themes, and AI-assisted suggestions. Part of the NeoCode ecosystem.',
    image: '/assets/codecompiler.webp',
    github: 'https://github.com/decodewithdeepak/codecompiler',
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
      techStacks.shadcn,
    ],
  },
  {
    title: 'NeoChat',
    description: 'A real-time chat application using WebSockets, supporting private and group messaging, typing indicators, and clean UI for all devices.',
    image: '/assets/neochat.webp',
    github: 'https://github.com/decodewithdeepak/neochat',
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.socket,
      techStacks.mongodb,
    ],
  },
  {
    title: 'Ajay Sharma',
    description: 'A freelance project built for Ajay Sharma, a self-empowerment coach. Designed landing page, pricing section, and integrated payments.',
    image: '/assets/ajaysharma.webp',
    link: 'https://ajay-sharma.vercel.app',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
