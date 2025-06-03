import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    title: "Frontend Developer (Self-Taught)",
    date: "2023 ",
    details: [
      "Built multiple full-stack projects using React, Node.js, and MongoDB.",
      "Created responsive UIs using Tailwind CSS and followed modern JavaScript best practices.",
      "Continuously learning through hands-on practice and online resources.",
    ],
  },
  {
    title: "Capstone Project Developer",
    date: "2024 - 2025",
    details: [
      "Developed real-world applications like a Fitness Tracker and Meal Planner.",
      "Implemented user authentication, API integration, and interactive dashboards.",
      "Gained practical experience in full development cycles from design to deployment.",
    ],
  },
  {
    title: "Lifelong Learner",
    date: "Ongoing",
    details: [
      "Completed online courses and tutorials on React, Tailwind CSS, and JavaScript.",
      "Built projects to apply and reinforce concepts.",
      "Actively exploring new tools and best practices in web development.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-4">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="xl:w-[30%] border border-lightBrown p-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-orange mb-2">{exp.title}</h3>
          <p className="text-sm text-lightGrey mb-3">{exp.date}</p>
          <ul className="list-disc pl-4 text-lightGrey text-base space-y-2">
            {exp.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;