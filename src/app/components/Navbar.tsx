"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavType {
  scrolled: boolean;
  activeSection:string;
}
export default function Navbar({ scrolled, activeSection }: NavType) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const line1Variants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const line2Variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const line3Variants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };
  return (
    <div className="w-full flex justify-between px-20 py-12  top-0 fixed ">
    <motion.p
        initial={{
          y: 0,
          scale: 1,
          opacity: 1,
          letterSpacing: "0px",
        }}
        animate={{
          y: scrolled ? -10 : 0,
          scale: scrolled ? 1.2 : 1,
          opacity: scrolled ? 1 : 0.8, 
          letterSpacing: scrolled ? "4px" : "0px", 
          color: activeSection === "About" ? "#000000" :activeSection === "Contact"?"#000000":activeSection === "Project"?"#000000": activeSection === "Footer"?"#ffffff": "#ffffff", 
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15, 
          duration: 0.6,
        }}
        className="font-bold text-4xl"
      >
        {scrolled ? "∞" : "αηιкєт"}
      </motion.p>
      <div className="relative">
      <button className="font-bold p-2 " onClick={() => setShowModal(!showModal)}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${activeSection === "About"? "#000000":activeSection==="Contact"?"text-[#000000]":activeSection === "Project"?"text-[#000000]": activeSection==="Footer"? "text-[#ffffff] ": "text-[#000000]"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            variants={line1Variants}
            initial="closed"
            animate={showModal ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            variants={line2Variants}
            initial="closed"
            animate={showModal ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            variants={line3Variants}
            initial="closed"
            animate={showModal ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="absolute top-full right-0 mt-2 bg-white py-4 px-10 shadow-lg w-[300px]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.p
              className="font-light tracking-widest text-[#4831D4] cursor-pointer  p-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Home
            </motion.p>
            <motion.p
              className="font-light tracking-widest text-[#4831D4] cursor-pointer mt-1 p-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              About
            </motion.p>
            <motion.p
              className="font-light tracking-widest text-[#4831D4] mt-1 cursor-pointer  p-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Projects
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}
