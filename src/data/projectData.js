import project1 from "../assets/projects/project1.jpg"
import project2 from "../assets/projects/project2.jpg"
import project3 from "../assets/projects/project3.jpg"

export const projectsData = [
  {
    title: "Full-Stack E-Commerce Store",
    description:
      "A complete shopping platform with product listing, cart, checkout, and admin product management.",
    image: project1,
    tech: ["React", "Node.js", "Express", "MySQL", "TailwindCSS"],
    live: "https://your-ecommerce-demo.com",
    github: "https://github.com/yourname/ecommerce-app",
    rating: 5,
  },
  {
    title: "Portfolio CMS (Content Manager)",
    description:
      "Custom admin dashboard to manage portfolio projects dynamically with React and Node.js backend.",
    image: project2,
    tech: ["React", "Node.js", "Express", "MySQL", "TailwindCSS"],
    live: "https://your-portfolio-cms.com",
    github: "https://github.com/yourname/portfolio-cms",
    rating: 4,
  },
  {
    title: "Task Management App",
    description:
      "A task management web app with real-time updates, filters, and drag-and-drop organization.",
    image: project3,
    tech: ["React", "Firebase", "TailwindCSS"],
    live: "https://your-taskmanager-demo.com",
    github: "https://github.com/yourname/task-manager",
    rating: 4,
  },
];

export default projectsData;