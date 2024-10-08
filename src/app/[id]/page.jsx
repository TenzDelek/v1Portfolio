'use client'
import React from "react";
import devdatas from "@/data/Project.json";
import Image from "next/image";
import Slugcard from "@/components/Card/Slugcard";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";


const Each = ({ params }) => {
  const router=useRouter()
  const redirecthome=()=>{
   router.push("/")
  }
  const { id } = params;
  const currentSlug = id;
  const selectedItem = devdatas.find((item) => item.slug === currentSlug);
  return (
    <div className=" relative lg:w-[560px] md:w-[480px] m-auto bg-[#121212] ">
      <div onClick={redirecthome} className=" cursor-pointer absolute  text-xl  bg-green-500 text-white rounded-full p-2 animate-pulse top-4 z-50 left-4">
        <IoArrowBackCircleOutline/>
      </div>
      {selectedItem ? (
        <div className="relative">
          <div className="relative h-56">
            <div className="absolute inset-0 overflow-hidden">
              <Image
              className=" z-10"
                alt="images for the cover"
                src={selectedItem.imgs}
                fill
                objectFit="cover"
                style={{ objectPosition: "center 20%" }}
              />
                <div className="h-56 bg-[#999999] animate-pulse -z-10 "/>
            </div>
            
          </div>
          <div className=" z-20  md:h-20 md:w-20 h-14 w-14 rounded-xl absolute md:top-48 top-52 md:left-5 left-2">
            <Image src={selectedItem.logo} alt="logo" fill />
          </div>
          <div className=" flex gap-4  justify-between items-center md:pl-28 pl-20 mt-2">
            <p className=" md:text-lg md:font-semibold text-sm font-semibold">
              {selectedItem.title}:{selectedItem.subtitle}
            </p>
            <Link
                  className="group hover:opacity-75 transition"
                  href={selectedItem.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </Link>
           
                <Link
                  className="group hover:opacity-75 transition"
                  href={selectedItem.linked}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
            <div
              className={` flex hover:cursor-pointer items-center gap-x-2 px-2 py-1 mr-2 md:text-sm text-xs font-semibold rounded-lg ${
                selectedItem.deploy ? "bg-[#2EBE0A]" : "bg-[#ff4343]"
              } `}
            >
             {selectedItem.deploy ?<>Live <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span></> : "Code"}
             </div> </Link>
          </div>
          
          <div className=" md:mt-4 p-4 mt-2">
            <p className=" md:text-sm text-[#999999] text-xs">
              {selectedItem.para}
            </p>
          </div>

          {/* tools and type */}
          <div className=" flex justify-around text-[#999999] h-24 text-xs">
            <div>
              <p className=" md:text-base text-xs text-white">TimeLine</p>
              {selectedItem.timeline}
            </div>
            <div className="  flex flex-col">
              {" "}
              <p className=" md:text-base text-xs text-white">Tools</p>
              {selectedItem.tools.map((tool, index) => (
                <div key={index}>{tool}</div>
              ))}
            </div>
            <div>
              <p className=" md:text-base text-xs text-white">Domain</p>
              {selectedItem.type}
            </div>
          </div>

          <div className=" mt-4 flex flex-col text-center ">
                <p className=" text-xl font-semibold">{selectedItem.body1}</p>
                <p className=" text-[#999999] md:text-sm text-xs">{selectedItem.body1sub}</p>
                <div>
                   <Slugcard imgt={selectedItem.slugimg}/>
                </div>
          </div>
          <div className=" mt-4 flex flex-col text-center ">
                <p className=" text-xl font-semibold">{selectedItem.body2}</p>
                <p className=" text-[#999999] md:text-sm text-xs">{selectedItem.body2sub}</p>
                <div>
                   <Slugcard imgt={selectedItem.slugimg2}/>
                </div>
          </div>
        </div>
      ) : (
        //if the slug are not found
        <div className=" flex flex-col items-center h-48 justify-center text-5xl font-bold">
         DESIGN PAGE IS UNDER CONSTRUCTION
          <p className=" text-xs font-normal">
            WILL BE LIVE AFTER JULY,2024
          </p>
        </div>
      )}
    </div>
  );
};

export default Each;
