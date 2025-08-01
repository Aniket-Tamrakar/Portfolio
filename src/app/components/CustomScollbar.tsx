import React from "react";
import { motion } from "framer-motion";

export default function CustomScollbar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  console.log(activeSection);
  const activeSectionConfig = [
    {
      id: 1,
      label: "LandingPage",
    },
    {
      id: 2,
      label: "About",
    },
    {
      id: 3,
      label: "Project",
    },
    {
      id: 4,
      label: "Contact",
    },
  
  ];

  console.log(activeSection);
  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="absolute text-white right-5 top-1/2 ">
      <div>
        {activeSectionConfig.map((item) => (
          <div key={item.id} className="flex items-center gap-5">
            {item.label === activeSection ? (
              <motion.div
                initial={{ height: "0.75rem" }}
                animate={{ 
                  height: "1.5rem",
                  backgroundColor: "#ffffff",
                  borderColor: "#4831d4",
                  borderWidth: "1px"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className={`w-3 rounded-full mt-3 ${activeSection === "Footer" ? "opacity-0" : "opacity-100"}`}
              />
            ) : (
              <motion.div
                initial={{ height: "1.5rem" }}
                animate={{ 
                  height: "0.75rem",
                  backgroundColor: "#4831d4",
                  borderWidth: "0px"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className={`w-3 rounded-full mt-3 cursor-pointer ${activeSection === "Footer"? "opacity-0" : "opacity-100"}`}
                onClick={()=>{
                  setActiveSection(item.label);
                  scrollToSection(item.label);
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
