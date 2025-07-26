import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaBookOpen, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="snap-start w-full h-screen flex flex-col bg-[#000000]">
      <div className="w-full h-screen px-20 pt-20 lg:flex gap-4 ">
        <div className="w-full lg:pt-[120px] ">
          <h1 className="text-xl text-[#ffffff] font-extrabold font-sans tracking-widest">
            ANIKET TAMRAKAR
          </h1>
          <p className="text-[#ffffff] font-sans leading-loose mt-5">
            A frontend-focused web developer dedicated to crafting intuitive,
            high-performing websites and web applications that enhance user
            experience and contribute to the success of the product.
          </p>
       
        </div>

        <div className="w-full lg:pt-[120px] lg:flex gap-4">
          <div className="w-full">
            <h1 className="text-xl text-[#ffffff] font-extrabold font-sans tracking-widest">
              RESOURCES
            </h1>
            <p className="text-[#ffffff] font-sans leading-loose mt-5 hover:underline cursor-pointer">
              Discover My Projects and Creations
            </p>
            <p className="text-[#ffffff] font-sans leading-loose hover:underline cursor-pointer">
              Resume, Professional Journey & Experiences
            </p>
            <p className="text-[#ffffff] font-sans leading-loose hover:underline cursor-pointer">
              Technical Insights, Articles & Blogs
            </p>
          </div>
          <div className="w-full">
          <h1 className="text-xl text-[#ffffff] font-extrabold font-sans tracking-widest">
            SOCIAL
          </h1>
          <div className="flex  mt-5  gap-5 w-fit">
            <div className=" w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
              <p>
                <FaLinkedin size={32} className="z-1 text-[#ffffff]" />
              </p>
            </div>
            <div className=" w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
              <p>
                <FaTwitter size={32} className="z-1 text-[#ffffff]" />
              </p>
            </div>
            <div className=" w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
              <p>
                <FaYoutube size={32} className="z-1 text-[#ffffff]" />
              </p>
            </div>
            <div className=" w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
              <p>
                <FaGithub size={32} className="z-1 text-[#ffffff]" />
              </p>
            </div>
            <div className=" w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
              <p>
                <FaBookOpen size={32} className="z-1 text-[#ffffff]" />
              </p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <div className="w-full px-20 lg:pt-20 flex justify-end flex-col">
        <div>
          <hr className="border-[#ffffff]" />
          <div className=" flex justify-between">
            <p className="font-sans py-10 text-[#ffffff]">
              © Aniket Tamrakar 2025. All Rights Reserved.
            </p>
            <button className="font-sans py-10 text-[#ffffff] flex gap-2">
              Scroll Top <FaArrowCircleUp size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full h-4 mt-auto">
        <div className="bg-[#02b2ed] w-full h-full"></div>
        <div className="bg-[#fcaf3d] w-full h-full"></div>
        <div className="bg-[#fd3358] w-full h-full"></div>
        <div className="bg-[#0dca95] w-full h-full"></div>
      </div>
    </div>
  );
}
