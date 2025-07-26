import React from "react";
// import { FaReact } from "react-icons/fa6";
// import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
// import { BsWordpress } from "react-icons/bs";
// import { TbBrandFramerMotion } from "react-icons/tb";
// import { FaBootstrap } from "react-icons/fa6";
// import { FaCss3Alt } from "react-icons/fa6";
// import { RiTailwindCssLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="snap-start w-full h-screen flex items-center bg-[#f5f5f5] ">
      <div className="w-full flex flex-col h-screen">
        <h1 className="text-[#000000] font-extrabold text-6xl w-[300px] ml-[120px] mt-[120px]">
          Design
        </h1>
        <p className="font-sans text-gray-700 text-sm leading-loose font-semibold w-[400px] md:w-[300px] lg:w-[450px] mt-4 ml-[120px] text-start">
          I may not be a traditional designer sketching wireframes or pushing
          pixels in design software, but I design through code. You &apos;ll find me
          deep in stylesheets, refining margins, perfecting layouts, and
          carefully crafting user experiences. Every detail, from spacing to
          responsiveness, is intentional—turning abstract ideas into functional
          and visually appealing interfaces.
        </p>
        {/* <div className="ml-[120px] mt-10 flex gap-4">
          <p>
            <FaBootstrap size={40} />
          </p>
          <p>
            <FaCss3Alt size={40}  />
          </p>
          <p>
            <TbBrandFramerMotion size={40} />
          </p>
          <p>
            <RiTailwindCssLine size={40}/>
          </p>
        </div> */}
        <div className="mt-[150px] ml-20 w-full flex justify-center">
          <Image src="/logo.svg" width={160} height={160} alt="logo" />
        </div>
      </div>
      <div className="w-full h-screen bg-[#f5f5f5]">
        <div className="flex flex-col w-full h-screen justify-end ">
          <div className="mb-10 w-[full] flex justify-center md:w-full lg:w-[70%]">
            <Image src="/logo_dot.svg" width={250} height={250} alt="logo" />
          </div>
          <h1 className="font-sans text-[#000000] font-extrabold text-6xl w-[300px] ml-[120px]">
            Engineering
          </h1>
          <p className="font-sans text-gray-700 text-sm leading-loose font-semibold w-[400px] md:w-[300px] lg:w-[450px] mt-4 ml-[120px]  font-base text-start mb-[120px]">
            As a frontend developer, I create fast, responsive, and user
            friendly interfaces using modern frameworks like React and Next.js.
            I focus on performance, scalability, and clean code to deliver
            seamless user experiences that are both functional and visually
            appealing.
          </p>
          {/* <div className="ml-[120px] mt-10 flex gap-4 mb-20">
            <p>
              <FaReact size={40} />
            </p>
            <Image
              src="/Remix.png"
              width={40}
              height={40}
              alt="remix"
              className="rounded-full"
            />
            <p>
              <RiNextjsFill size={40} />
            </p>
            <p>
              <BsWordpress size={40} />
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
