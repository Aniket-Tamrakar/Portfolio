import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiArrowRightThin } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="snap-start w-full h-screen px-[120px] bg-[#f5f5f5] py-[100px] ">
      <div className=" bg-[#f4f4f4] w-full h-full ">
        <div className="w-full  h-full flex ">
          <div className="w-[35%] px-8  py-5">
            <div className="w-full flex flex-col h-full justify-center items-center">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <FaLocationDot size={30} className="text-[#000000]" />
                <p className="font-sans tracking-wider font-semibold mt-2 text-[#000000]">
                  Address
                </p>
                <p className="font-sans tracking-wider text-black text-sm">
                  Dharan, Nepal
                </p>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <FaPhoneAlt size={30} className="text-[#000000]" />
                <p className="font-sans tracking-wider font-semibold mt-2 text-[#000000]">
                  Contact
                </p>
                <p className="font-sans tracking-wider text-black text-sm">
                  +977 9805674141
                </p>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <MdEmail size={30} className="text-[#000000]" />
                <p className="font-sans tracking-wider font-semibold mt-2 text-[#000000]">
                  Email
                </p>
                <p className="font-sans tracking-wider text-black text-sm">
                  anikettamrakar0@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="inline-block h-[350px] min-h-[1em] w-[1px] bg-black self-stretch mt-20 "></div>
          <div className="w-full px-[70px] py-5 bg-[#f3f3f3] ">
            <h1 className=" text-3xl font-bold text-[#000000] font-sans tracking-wide mt-5">
              Send me a message
            </h1>
            <p className="text-[#3d155f]  tracking-wider font-sans mt-3">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
            <p className="text-xs tracking-widest ml-3 mt-5 text-[#3d155f80]">
              Your Name
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full   p-3 custom-placeholder border-b-[1px] border-[#3d155f] focus:outline-none"
            />
            <p className="text-xs tracking-widest ml-3 mt-5 text-[#3d155f80]">
              Your Email
            </p>

            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full  p-3 custom-placeholder border-b-[1px] border-[#3d155f] focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full h-[140px] mt-6 p-3 custom-placeholder border-[1px] border-[#3d155f] focus:outline-none"
            />
            <div className="w-full flex ">
              <button className="border border-[#4831d4] px-20 py-4 mt-5 text-xs text-center font-bold tracking-widest flex items-center gap-4 bg-[#000000] text-white">
                SHOOT <PiArrowRightThin className="text-2xl font-extralight text-white " />
              </button>
            </div>

            {/* <div className="bg-yellow-500 inline-block pb-[4px] rounded-md hover:pb-0 mt-5">
          <button className="text-sm font-extralight rounded-md border border-black bg-white px-16 py-4 hover:mt-1 ">
            SUBMIT
          </button>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
