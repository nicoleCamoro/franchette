"use client";

import Image from "next/image";
import SkillsHeader from "@/app/assets/images/skills-header.svg";
import Tabs from "./atoms/Tabs";
import skillsData from "@/app/data/skills.json"; // Fixed import path
import { useState, useRef, MouseEvent } from "react";

type Category = "Frontend" | "Backend" | "Practices" | "Tools";
type Skill = {
  name: string;
  description: string;
  logo: string;
};

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(0);
  const categories: Category[] = ["Frontend", "Backend", "Tools", "Practices"];
  const currentSkills = skillsData.skills[categories[selectedTab]] as Skill[];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dragInfo = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const ele = scrollContainerRef.current;
    if (!ele) return;

    dragInfo.current = {
      isDragging: true,
      startX: e.pageX - ele.offsetLeft,
      scrollLeft: ele.scrollLeft,
    };

    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
  };

  const handleDragEnd = () => {
    const ele = scrollContainerRef.current;
    if (ele && dragInfo.current.isDragging) {
      dragInfo.current.isDragging = false;
      ele.style.cursor = "grab";
      ele.style.userSelect = "auto";
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragInfo.current.isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const ele = scrollContainerRef.current;
    const x = e.pageX - ele.offsetLeft;
    const walk = x - dragInfo.current.startX;
    ele.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  return (
    <section
      id="skills"
      className="md:min-h-screen bg-peach py-20 md:pt-0 relative"
    >
      {/* Skills Header - Mobile (Top) */}
      <div className="md:hidden w-full flex justify-center mb-10">
        <Image
          src={SkillsHeader}
          alt="SKILLS"
          width={400}
          height={400}
          className="w-[300px]"
          priority
        />
      </div>

      <div className="w-full h-full">
        <div className="flex items-center justify-center md:min-h-screen mx-auto">
          <div className="flex flex-col w-screen md:w-9/12">
            <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
            <div className="bg-beige p-8 rounded-sm relative">
              {/* Mobile scrollable container */}
              <div className="xl:hidden relative">
                <div
                  ref={scrollContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onMouseMove={handleMouseMove}
                  className="overflow-x-auto scrollbar-hide pb-4 cursor-grab"
                >
                  <div className="grid grid-flow-col auto-cols-[250px] grid-rows-2 gap-4 px-4">
                    {currentSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="text-start text-white/90 font-inter tracking-wider py-6 px-4 bg-navy rounded-lg shadow-sm h-[140px]"
                      >
                        <div className="text-xl font-bold italic mb-2">
                          {skill.name}
                        </div>
                        <p className="text-sm line-clamp-2">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Fade edges for mobile scroll */}
                <div className="absolute -left-1 top-0 h-full w-6 bg-gradient-to-r from-beige to-transparent pointer-events-none" />
                <div className="absolute -right-1 top-0 h-full w-6 bg-gradient-to-l from-beige to-transparent pointer-events-none" />
              </div>

              {/* Desktop grid layout */}
              <div className="hidden xl:flex lg:flex-wrap gap-6 justify-center">
                {currentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-[250px] text-start text-white/90 font-inter tracking-wider py-6 px-4 bg-navy rounded-lg shadow-sm"
                  >
                    {/* <i className={`${skill.logo} text-2xl mb-3 block`}></i> */}
                    <div className="text-xl font-bold italic mb-2">
                      {skill.name}
                    </div>
                    <p className="text-sm ">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Header - Desktop (Bottom) */}
      <div className="hidden md:block absolute right-3.5 bottom-14">
        <Image
          src={SkillsHeader}
          alt="SKILLS"
          width={800}
          height={800}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}
