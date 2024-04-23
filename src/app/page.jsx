import Biocard from "@/components/Card/Biocard";
import About from "@/components/Pages/About/About";
import Projects from "@/components/Pages/Projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-12">
      <p className=" font-semibold lg:text-5xl md:text-4xl text-3xl">Tenzin Delek</p>
      <p className=" font-semibold  lg:text-5xl md:text-4xl text-2xl">FullStack Product <span className=" italic">Designer</span></p>
      <p className="text-[#858585]">A Tibetan Based in India</p>
      <div className=" relative mt-4 lg:w-[500px] lg:h-[280px] md:w-[400px] md:h-[250px] w-[300px] h-[230px]">
      <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]  transition-opacity duration-300 opacity-100"
        ></div>
        <Biocard/>
      </div>
      <div className=" w-full mt-10 p-2">
      <About/>
      </div>
     
     <div className=" p-2 w-full">
      <Projects domains="Development"/>
      <Projects domains="Design"/>
     </div>
    </div>
    
  );
}
