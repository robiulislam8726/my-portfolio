import project1 from "../assets/projects/project1.jpg"
import project2 from "../assets/projects/project2.jpg"
import project3 from "../assets/projects/project3.jpg"

export const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: project1,
    link: "https://your-portfolio-link.com",
    rating: 5,
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce platform with product listings and cart.",
    tech: ["React", "Redux", "Node.js", "MySQL"],
    image: project2,
    link: "https://your-ecommerce-link.com",
    rating: 4,
  },
  {
    title: "Task Management Tool",
    description: "A productivity app for managing daily tasks and deadlines.",
    tech: ["React", "Firebase", "MUI"],
    image: project3,
    link: "https://your-taskapp-link.com",
    rating: 4,
  },
];

export default projectsData;