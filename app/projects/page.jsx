"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Personal Portfolio 2024",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    description:
      "This portfolio is the upgraded version of my 2022 site, showing off my latest projects and web development skills. Built with Next.js and Tailwind CSS, it's packed with smooth animations powered by Framer Motion, giving it a more dynamic and engaging feel. It's been a great way to showcase my growth in both design and development! Check out the code on Github!",
    image: "/assets/portfolio_2024.avif",
    text: "View on Github",
    url: "https://github.com/nivethakuruparan/personal-portfolio-2024",
  },
  {
    name: "Source Code Optimizer",
    tech: "Python, Typescript, Pylint, Rope, PyJoules",
    description:
      "As my capstone project, this automated tool is aimed at improving the energy efficiency of Python code by identifying and implementing refactorings. It integrates with GitHub Actions and VSCode, allowing users to accept or decline suggested changes, and utilizes tools like Pylint, Rope, and PyJoules for detailed analysis and optimization. This project provides a streamlined interface to guide developers toward more energy-efficient code, helping to reduce energy consumption without altering functionality. Check out the code on Github!",
    image: "/assets/code_optimizer.avif",
    text: "View on Github",
    url: "https://github.com/nivethakuruparan/source-code-optimizer",
  },
  {
    name: "Carpool Clan",
    tech: "Java, XML, Android Studio, Google Maps API, Google Firebase",
    description:
      "This carpooling platform was a semester-long project for the SFWRENG 3A04 course, Software Architecture, where I collaborated with a team of five to build a mobile app connecting people for shared commutes. It was my first experience working with Android Studio, the Google Maps API, and Google Firebase for backend integration, as well as creating a comprehensive Software Requirements Specification (SRS) document. We designed the app to be responsive and user-friendly, making carpooling more accessible and convenient. This project was both challenging and rewarding, offering hands-on experience with mobile development and collaborative software architecture.",
    image: "/assets/carpooling.avif",
    text: "View on Github",
    url: "https://github.com/nivethakuruparan/carpool-clan",
  },
  {
    name: "Bin Packing",
    tech: "Python",
    description:
      "This project, completed as part of the SFWRENG 3X03 course, Software Engineering Practice and Experience: Binding Theory to Practice, addresses the bin packing problem using a range of algorithms to optimize space utilization. It provided a hands-on experience with algorithm implementation for efficient storage solutions, demonstrating the practical applications of computational problem-solving techniques.",
    image: "/assets/bin_packing.jpg",
    text: "View on Github",
    url: "https://github.com/nivethakuruparan/bin-packing",
  },
  {
    name: "London Subway Network",
    tech: "Python, NetworkX",
    description:
      "This Python-based project was developed as part of the SFWRENG 3X03 course, Software Engineering Practice and Experience: Binding Theory to Practice. It visualizes and analyzes the London Subway network using NetworkX, calculating the shortest paths, assessing station connectivity, and evaluating network efficiency. This assignment deepened my understanding of data analysis and graph theory, highlighting Python’s capability to address complex, real-world challenges.",
    image: "/assets/metro_map.jpg",
    text: "View on Github",
    url: "https://github.com/nivethakuruparan/london-subway-network",
  },
  {
    name: "Expenso",
    tech: "React, Node.js, Express, MongoDB",
    description:
      "Expenso is an expense tracker application designed to help users effectively manage their daily finances. Built with the MERN stack, this project allows users to log their expenses, view summaries, and analyze spending trends. It was created as part of the Stem Warrior Hack 2022, marking my first venture into deeper web development. This experience was both challenging and rewarding, fueling my passion for creating impactful applications.",
    image: "/assets/budget_tracker.jpg",
    text: "View on Devpost",
    url: "https://devpost.com/software/expenso-9biwcu",
  },
  {
    name: "Pawsitive",
    tech: "HTML5, CSS3, Bootstrap4, Node.js, PetFinder's API",
    description:
      "This project was my team’s submission for the Girls Hoo Hacks Hackathon, where we were thrilled to win the Best Social Good Category. We created a dynamic website that allows users to enter their zip code and discover adoptable pets in their area, utilizing the PetFinder API for seamless searches. This project marked my first experience with Node.js, and collaborating with my team was an incredibly rewarding experience. Check out our submission on Devpost!",
    image: "/assets/pet_adoption.jpg",
    text: "View on Devpost",
    url: "https://devpost.com/software/pawsitive-t4pogf",
  },
  {
    name: "Personal Portfolio 2022",
    tech: " HTML5, CSS3, Javascript",
    description:
      "This project was my first venture into web development, where I created a simple portfolio site to showcase my skills. It helped me discover my passion for designing intuitive user interfaces and working with frontend components. I had a great experience working on this project, and it inspired me to pursue more complex web development challenges. Check out the live site using the link below!",
    image: "/assets/portfolio_2022.avif",
    text: "View Portfolio",
    url: "https://nivethakuruparan.github.io/personal-portfolio-2022/",
  },
  {
    name: "First Year Projects",
    tech: "Python, Autodesk Inventor",
    description:
      "This project marked my introduction to engineering during my first year in the ENGINEER 1P13 course. Throughout the course, I completed several projects that allowed me to explore various concepts and develop valuable skills. Each project contributed to my growth and understanding of engineering principles, igniting my passion for tackling complex challenges. Take a closer look at my work on my Wix website, where you can find detailed information about each project!",
    image: "/assets/engineering.avif",
    text: "View on Wix Website",
    url: "https://kuruparn.wixsite.com/1p13portfolio",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[60px]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#151E28] p-4 rounded-xl flex flex-col justify-center items-center text-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={200}
                className="object-cover mb-4 rounded-lg"
                style={{ width: "400px", height: "200px" }}
              />

              <h3 className="text-xl uppercase font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-accent mb-2">{project.tech}</p>
              <p className="text-sm text-white/60 flex-grow">
                {project.description}
              </p>
              <Link
                href={project.url}
                className="mt-4 inline-block bg-[#184A8B] text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-accent hover:text-black hover:font-medium"
                target="_blank"
              >
                {project.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
