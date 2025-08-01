import React from "react";
import "./FeatureProject.scss";
import Image from "next/image";
export default function FeatureProject() {
  return (
    <div className="feature-project-container">
      <div className="feature-project-content-wrapper">
        <div className="feature-project-title-wrapper">
          <h1
            className="feature-project-title"
            style={{ position: "relative" }}
          >
            PiQ Suite
          </h1>

          <div className="underline"></div>
        </div>
        <div className="feature-project-description-wrapper">
          
          <p className="feature-project-description">
            PiQ Suite is a customizable platform that aggregates &nbsp;
            <span>real-time financial news and market data</span> from over 500
            sources, including Bloomberg, Reuters, and CME Group. It helps
            traders and professionals create personalized dashboards with
            relevant market insights.
          </p>
          <p className="feature-project-description">
            As a frontend developer, I contributed to improving the platform’s
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
        </div>
      </div>
      <div className="feature-project-image-container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Image
          src="/PiqSuite.webp"
          alt="haster_gym"
          className="rounded-xl"
          width={1000}
          height={1000}
        />
        <div className="project-link" onClick={() => window.open("https://www.piqsuite.com", "_blank")}>www.piqsuite.com</div>
      </div>
    </div>
  );
}
