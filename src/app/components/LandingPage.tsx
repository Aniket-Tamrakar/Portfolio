// import { RxTransparencyGrid } from "react-icons/rx";
import { FaBookOpen, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="snap-start w-full h-screen bg-[#1C1C1E]   flex items-center">
      <div className="w-full pl-[120px]">
        <h1 className="text-[#ffffff] font-extrabold text-6xl w-[300px]">
          Fɾσɳƚҽɳԃ Dҽʋҽʅσρҽɾ.
        </h1>
        <p className="font-sans text-gray-300 font-semibold text-sm w-[400px] mt-4">
          I specialize in crafting visually stunning and user-centric web
          applications.
        </p>

        <p className="font-sans text-gray-300 font-semibold text-sm w-[400px] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime
          placeat porro distinctio pariatur quae corrupti doloribus, velit qui
          animi architecto adipisci? Dicta quis id rerum iure hic illo dolorum.
        </p>
        <div className="flex bg-gray-200 mt-6 p-1 gap-1 w-fit rounded-lg">
          <div className="p-2 hover:bg-blue-400 w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
            <p>
              <FaLinkedin size={32} className="z-1" />
            </p>
          </div>
          <div className="p-2 hover:bg-blue-400 w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
            <p>
              <FaTwitter size={32} className="z-1" />
            </p>
          </div>
          <div className="p-2 hover:bg-blue-400 w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
            <p>
              <FaYoutube size={32} className="z-1" />
            </p>
          </div>
          <div className="p-2 hover:bg-blue-400 w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
            <p>
              <FaGithub size={32} className="z-1" />
            </p>
          </div>
          <div className="p-2 hover:bg-blue-400 w-auto inline-block z-0 rounded-[5px] transition-all duration-300 ease-in">
            <p>
              <FaBookOpen size={32} className="z-1" />
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center bg-[#dee6e8]">
        <Image src='/aniket.png' width={550} height={100} alt="aniket_pixel" className="rounded-full mb-5  border border-none "/>
      
      </div>
    </div>
  );
}
