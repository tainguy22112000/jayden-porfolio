import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineMilitaryTech, MdWork } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";

export const MenuNavigation = () => {
  return (
    <div className="fixed bottom-10 left-1/2 translate-x-[-50%] z-50">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-primary px-[20px] py-[10px] gap-4 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer py-2 px-4 hover:brightness-125">
            <FaCircleUser size={24} />
          </a>
          <a href="#skills" className="cursor-pointer py-2 px-4 hover:brightness-125">
            <MdOutlineMilitaryTech size={24} />
          </a>
          <a href="#experiences" className="cursor-pointer py-2 px-4 hover:brightness-125">
            <MdWork size={24} />
          </a>
          <a href="#projects" className="cursor-pointer py-2 px-4 hover:brightness-125">
            <SiPolymerproject size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
