import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Muhammad Rahil Saeed — a passionate web developer and creative technologist.
I specialize in front-end and full-stack development, building responsive and user-focused applications using technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy turning ideas into practical digital solutions, whether it's a smart meal planner, a fitness tracker, or a dynamic portfolio website.

Through hands-on projects and continuous learning, I’ve developed a strong foundation in web technologies and user experience design. I'm driven by curiosity, problem-solving, and a desire to create tools that are not just functional but meaningful. Outside of coding, I enjoy exploring design tools like Figma, mentoring peers, and staying updated with the latest in tech.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;