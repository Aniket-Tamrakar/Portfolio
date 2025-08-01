"use client";
// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { useState, useEffect, useRef } from "react";
import CustomScollbar from "./components/CustomScollbar";
import About from "./components/About/About";
import FeatureProject from "./components/FeatureProject/FeatureProject";

export default function Home() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("LandingPage");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: scrollContainer, // Observing inside the scrollable container
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  console.log(activeSection);

  return (
    <div id="container">
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <CustomScollbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <div
        ref={scrollRef}
        className="w-full h-screen overflow-auto scroll-smooth snap-y snap-mandatory scrollbar-hide"
        onScroll={() => setScrolled((scrollRef.current?.scrollTop ?? 0) > 50)}
      >
        {/* Scrollable snap content */}
        <div id="LandingPage" className="section">
          <LandingPage />
        </div>
        <div id="About" className="section">
          <About />
        </div>
        <div id="Project" className="section">
          <FeatureProject />
        </div>
        <div id="Contact" className="section">
          <Contact />
        </div>
        <div id="Footer" className="section">
          <Footer />
        </div>
      </div>
    </div>
  );
}
