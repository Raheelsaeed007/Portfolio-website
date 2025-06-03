import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Cook Nest - Smart Meal Planner",
    year: "April2025",
    align: "right",
   image: "/cook nest pic.png"
    link: "https://recipe-app-api-9.onrender.com/",
  },
  {
    name: "Mobile App - Online store",
    year: "June2024",
    align: "left",
    image: "../../public/mappp.jpg",
    link: "https://www.youtube.com/watch?v=34gybft4F_c",
  },
  {
    name: "Masat Al Nahar - Group Website",
    year: "Mar2024",
    align: "right",
    image: "../../public/MAN my.png",
    link: "https://asifyousaf.github.io/masatalnahar.io/",
  },
  {
    name: "Mobile App Design - Figma",
    year: "Dec2023",
    align: "left",
    image: "../../public/mobile app.png",
    link: "https://www.figma.com/design/aGFs9xE6q5VuS7ktEQOht9/Untitled?node-id=0-1&p=f&t=w3TtsPDWMTZCNumt-0",
  },
   {
    name: "Front End Wesbite",
    year: "Sep2024",
    align: "right",
    image: "../../public/my web.png",
    link: "https://raheelsaeed007.github.io/MyWebsite.github.io/",
  },
  {
    name: "Chatbot",
    year: "May2024",
    align: "left",
    image: "../../public/chatbot2.png",
    link: "https://www.youtube.com/watch?v=TPLI9z6hjzc",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
