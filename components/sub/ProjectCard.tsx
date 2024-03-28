import Image from "next/image";
import React from "react";
import Icon from "@/public/icon.png";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  link: string;
}

const ProjectCard = ({ src, title, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>

        <a href={link}>
          <Image
            src={Icon}
            width={50}
            height={20}
            alt="preview"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
