"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaCopyright,
  FaFigma,
  FaGit,
} from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoCPlusPlus,
  BiLogoTypescript,
} from "react-icons/bi";
import { VscVscode, VscTerminalBash } from "react-icons/vsc";

// about data
const about = {
  title: "About me",
  description:
    "I'm a software engineering student with a passion for technology and problem-solving. My journey so far has led me through several enriching internships and projects, where I gained valuable skills and hands-on experience.",
  info: [
    { fieldName: "Name", fieldValue: "Nivetha Kuruparan" },
    { fieldName: "Nationality", fieldValue: "Canadian" },
    { fieldName: "School", fieldValue: "McMaster University" },
    { fieldName: "Program", fieldValue: "Software Engineering" },
    { fieldName: "Hobbies", fieldValue: "Reading, gardening" },
  ],
};

// experience data
const experience = {
  title: "My work experience",
  description:
    "A showcase of the positions I've held throughout my university career, including valuable internships where I honed my technical skills and collaborated with experienced professionals.",
  items: [
    {
      company: "McMaster University",
      position: "ENGINEER 1P13 Teaching Assistant",
      duration: "Sep 2024 - Present",
    },
    {
      company: "IBM",
      position: "Software Developer Intern",
      duration: "May 2023 - Sep 2024",
    },
    {
      company: "TD Bank",
      position: "Software Developer Intern",
      duration: "May 2022 - Sep 2022",
    },
  ],
};

// extracurricular data
const extracurricular = {
  title: "My extracurricular activities",
  description:
    "Clubs and projects I've been part of outside of my core coursework, focusing on my passion for software, teamwork, and community involvement.",
  items: [
    {
      organization: "Google Developer Student Clubs",
      position: "Open Source Developer",
      duration: "Aug 2023 - Jan 2024",
    },
    {
      organization: "DeltaHacks",
      position: "Technical Executive",
      duration: "Jul 2022 - Jan 2023",
    },
    {
      organization: "McMaster Engineering Competition",
      position: "Programming Lead",
      duration: "Apr 2022 - Nov 2022",
    },
    {
      organization: "DeltaHacks",
      position: "Logistics Executive",
      duration: "Jun 2021 - Jun 2022",
    },
  ],
};

// skills data
const skills = {
  title: "My technical skills",
  description:
    "A summary of technical proficiencies I've developed through my studies, projects, and work experience, including various programming languages, frameworks, and tools.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaCopyright />, name: "C" },
    { icon: <BiLogoCPlusPlus />, name: "C++" },
    { icon: <VscTerminalBash />, name: "Bash" },
    { icon: <FaGit />, name: "Git" },
    { icon: <VscVscode />, name: "VSCode" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="extracurricular">
              Extracurricular Activities
            </TabsTrigger>
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#151E28] h-[164px] py-6 px-7 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-sm text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[30px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* extracurricular */}
            <TabsContent value="extracurricular" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{extracurricular.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {extracurricular.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {extracurricular.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#151E28] h-[164px] py-6 px-7 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-sm text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[30px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">
                              {item.organization}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#151E28] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
