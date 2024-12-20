import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hey, I'm <br />
              <span className="text-accent">Nivetha Kuruparan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Thanks for checking out my personal website! I built this project
              using Next.js, Tailwind CSS, and Framer Motion, and had a lot of
              fun doing it! Feel free to explore more about me and check out
              some of my past projects. <br />
              <br /> I love coding and am always eager to learn new skills.
              Right now, I'm focused on deepening my understanding of data
              structures and algorithms, diving more into frontend development,
              and exploring internship or new grad opportunities. If you'd like
              to connect, don't hesitate to reach out!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Nivetha_Kuruparan_Resume_2024.pdf"
                download="Nivetha_Kuruparan_Resume"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
