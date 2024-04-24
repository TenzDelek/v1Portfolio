import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
const handle = [
  {
    title: "LinkedIn",
    link: "/",
  },
  {
    title: "GitHub",
    link: "/",
  },
  {
    title: "LeetCode",
    link: "/",
  },
  {
    title: "Resume",
    link: "/",
  },
];
const Footer = () => {
  return (
    <>
      <div className=" flex justify-between items-center h-64">
        <div className=" relative h-36  w-24">
          <Image src="/logobig.png" fill draggable="false" />
        </div>
        <div>
          <div className=" items-end flex flex-col space-y-2">
            <p className=" text-xs text-[#999999]">Socials</p>
            {handle.map((data) => (
              <div className="flex gap-2 text-sm" key={data.title}>
                {data.title}
                <BsArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" md:text-sm text-xs">
        <div className="flex  items-center gap-2 ">
        <FaRegCopyright />
        <p className=" font-medium">2024 Tenzin Delek. All Right Reserved</p>
        </div>
        <p className="text-[#999999]">Made with Love and Tsampa(50% ButterTea, No Chura)</p>
      </div>
     
    </>
  );
};

export default Footer;
