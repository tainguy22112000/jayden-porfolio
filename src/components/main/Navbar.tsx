import Image from "next/image";
import Link from "next/link";

import { LogoIcon } from "@/assets";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex flex-row items-center w-auto h-auto">
          <Image
            src={LogoIcon}
            alt="logo"
            width={120}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex flex-row justify-center items-center gap-2 text-white">
          <Link className="hover:text-primary" href="/about-me">
            About
          </Link>
          <Link className="hover:text-primary" href="/projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
