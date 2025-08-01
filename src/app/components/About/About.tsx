import React from "react";
import "./About.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const slideUpVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div 
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="content-wrapper"
        variants={slideUpVariants}
      >
        <motion.div 
          className="first-about-content"
          variants={slideUpVariants}
        >
          <motion.div variants={slideUpVariants}>
            <motion.h1 
              className="about-title"
              variants={titleVariants}
            >
              Designing
            </motion.h1>
            <motion.p 
              className="about-description"
              variants={textVariants}
            >
              I may not be a traditional designer sketching wireframes or
              pushing pixels in design software, but I design through code. You
              &apos;ll find me deep in stylesheets, refining margins, perfecting
              layouts, and carefully crafting user experiences. Every detail,
              from spacing to responsiveness, is intentional—turning abstract
              ideas into functional and visually appealing interfaces.
            </motion.p>
          </motion.div>
          <motion.div 
            className="about-image-container"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Image src="/logo.svg" width={160} height={160} alt="logo" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="second-about-content"
          variants={slideUpVariants}
        >
          <motion.div
            variants={imageVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: -5,
              transition: { duration: 0.3 }
            }}
          >
            <Image src="/logo_dot.svg" width={250} height={250} alt="logo" />
          </motion.div>
          <motion.div variants={slideUpVariants}>
            <motion.h1 
              className="about-title"
              variants={titleVariants}
            >
              Engineering
            </motion.h1>
            <motion.p 
              className="about-description"
              variants={textVariants}
            >
              As a frontend developer, I create fast, responsive, and user
              friendly interfaces using modern frameworks like React and
              Next.js. I focus on performance, scalability, and clean code to
              deliver seamless user experiences that are both functional and
              visually appealing.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
