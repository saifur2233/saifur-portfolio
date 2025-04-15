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
    image: '/assets/portfolio.png',
      link: 'https://saifur-rahman.vercel.app/',
      github: 'https://github.com/saifur2233/saifur-portfolio',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
      title: 'Image Hub | Drag and Drop Image Gallary',
      description: 'Image Hub is an innovative and user-friendly online platform designed to cater to all your image-related needs. It provides a seamless experience for managing, organizing, and interacting with images in a gallery format. The platform features a drag-and-drop interface, allowing users to effortlessly upload images into the gallery and organize them as desired.',
      image: '/assets/image-hub.png',
      link: 'https://image-hub.netlify.app/',
      github: 'https://github.com/saifur2233/ReactJS-Project-ImageGallery',
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
      title: 'Auraro | Online Furniture Shop',
      description: 'Auraro is a second hand furniture sale website. It is the biggest platform in the Bangladesh. Anyone can sell his/her used furniture here. Anyone can buyer used furniture in a low cost. A seller can advertise for his/her furniture to display in advertise page. A normal-user can see his/her wishlist product. An admin can manage the full website. An admin can delete any user from the website.',
      image: 'https://user-images.githubusercontent.com/85455377/230288945-30253db6-7430-4979-b8b7-c4a5ca018502.png',
      github: 'https://github.com/saifur2233/NodeJS_Project_Auraro_Server',
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.socket,
      techStacks.mongodb,
    ],
  },
  {
      title: 'Hey-Tech',
      description: 'Hey-Tech is the most popular Laptop Brand Shop in BD. Hey-Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at Star Tech outlets, the best Desktop PC shop in Bangladesh, which are spread nationwide.',
      image: '/assets/hey-tech.png',
      link: 'https://next-js-project-hey-tech.vercel.app/',
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
