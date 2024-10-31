"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative"
      >
        {/* Image with darkened edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[300px] h-[300px] xl:w-[440px] xl:h-[440px]"
        >
          <Image
            src="/assets/girl.png"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[320px] h-[320px] xl:w-[480px] xl:h-[480px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ECEFF1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
