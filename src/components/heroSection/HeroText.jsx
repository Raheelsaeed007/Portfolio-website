import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaDownload } from "react-icons/fa"; // Optional: icon for the button

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Rahil <br className="sm:hidden md:block" />
        Saeed
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Web Developer and Designer <br /> with 3 years of experience.
      </motion.p>

      {/* 🔽 Download CV Button */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <a
          href="/public/CV/Raheel.cv (1).pdf"
          download
          className="inline-flex items-center gap-2 bg-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan transition duration-300 w-fit mt-4"
        >
          <FaDownload />
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;