import React from "react";
import "./About.scss";
import Image from "next/image";

export default function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <div className="first-about-content">
          <div>
            <h1 className="about-title">Designing</h1>
            <p className="about-description">
              I may not be a traditional designer sketching wireframes or
              pushing pixels in design software, but I design through code. You
              &apos;ll find me deep in stylesheets, refining margins, perfecting
              layouts, and carefully crafting user experiences. Every detail,
              from spacing to responsiveness, is intentional—turning abstract
              ideas into functional and visually appealing interfaces.
            </p>
          </div>
          <div className="about-image-container">
            <Image src="/logo.svg" width={160} height={160} alt="logo" />
          </div>
        </div>
        <div className="second-about-content">
          <Image src="/logo_dot.svg" width={250} height={250} alt="logo" />
          <div>
            <h1 className="about-title">Engineering</h1>
            <p className="about-description">
              As a frontend developer, I create fast, responsive, and user
              friendly interfaces using modern frameworks like React and
              Next.js. I focus on performance, scalability, and clean code to
              deliver seamless user experiences that are both functional and
              visually appealing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
