import React from "react";
import "./FeatureProject.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureProject() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.9,
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

  const contentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const underlineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div 
      className="feature-project-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="feature-project-content-wrapper"
        variants={contentVariants}
      >
        <motion.div 
          className="feature-project-title-wrapper"
          variants={titleVariants}
        >
          <h1
            className="feature-project-title"
            style={{ position: "relative" }}
          >
            PiQ Suite
          </h1>

          <motion.div 
            className="underline"
            variants={underlineVariants}
          ></motion.div>
        </motion.div>
        <motion.div 
          className="feature-project-description-wrapper"
          variants={contentVariants}
        >
          
          <p className="feature-project-description">
            PiQ Suite is a customizable platform that aggregates &nbsp;
            <span>real-time financial news and market data</span> from over 500
            sources, including Bloomberg, Reuters, and CME Group. It helps
            traders and professionals create personalized dashboards with
            relevant market insights.
          </p>
          <p className="feature-project-description">
            As a frontend developer, I contributed to improving the platform&apos;s
            usability by &nbsp;
            <span>
              redesigning the App Selector, resizable modals, pricing modals,
              and authentication flows
            </span>
            . I also enhanced &nbsp;
            <span> feed responsiveness on mobile devices </span> and implemented
            &nbsp;
              reusable UI components to ensure a consistent and scalable design
              system.
          </p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="feature-project-image-container"
        variants={imageVariants}
        style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src="/PiqSuite.webp"
            alt="haster_gym"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div 
          className="project-link" 
          onClick={() => window.open("https://www.piqsuite.com", "_blank")}
          whileHover={{ 
            scale: 1.1,
            color: "#4f48e2"
          }}
          transition={{ duration: 0.2 }}
        >
          www.piqsuite.com
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
