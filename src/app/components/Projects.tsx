import React from "react";

export default function Projects() {
  return (
    <div className="snap-start w-full h-screen flex flex-col items-center bg-[#f5f5f5] px-[100px] py-10">
      <div className="w-full h-full flex">
        <div className="w-[40%] px-3">
          <h1 className="text-[#000000] font-extrabold text-5xl w-[300px] ml-4">
            Projects
          </h1>
        </div>
        <div className="w-[60%] px-5">
          <div className="h-full flex flex-col items-center justify-center">
            <img src="/PiqSuite.webp" alt="haster_gym" className="rounded-xl" />
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[60%] flex flex-col ">
        fdasdfasd;fjasdlfjasd;fjasd;fasdfhasdfasdfasldfj;alsdfnasldkasdglaslngkjnaslgdnas
      </div> */}
    </div>
  );
}
