import Image from "next/image";
import React from "react";

interface IProps {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: IProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image src={src} alt={title} width={1000} height={300} className="object-contain w-full" />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
