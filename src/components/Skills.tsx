"use client";

import Image from "next/image";
import SkillsHeader from "@/app/assets/images/skills-header.svg";
import Tabs from "./atoms/Tabs";
import skillsData from "@/app/data/skills.json"; // Fixed import path
import { useState } from "react";

type Category = "Frontend" | "Backend" | "Practices" | "Tools";
type Skill = {
  name: string;
  description: string;
  logo: string;
};

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(0);
  const categories: Category[] = ["Frontend", "Backend", "Practices", "Tools"];
  const currentSkills = skillsData.skills[categories[selectedTab]] as Skill[];

  return (
    <section id="skills" className="min-h-screen bg-peach py-20 relative">
      <div className="w-full h-full">
        <div className="flex items-center justify-center min-h-screen mx-auto">
          <div className="flex flex-col w-screen md:w-9/12">
            <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
            <div className=" bg-beige p-8 rounded-sm">
              <div className="flex flex-wrap gap-6 justify-center">
                {currentSkills.map((skill) => (
                  <div
                    key={skill.name}
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

      {/* Large SKILLS Text */}
      <div className="absolute right-3.5 bottom-14">
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
