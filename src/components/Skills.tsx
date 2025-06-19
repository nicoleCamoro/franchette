"use client";

import Image from "next/image";
import SkillsHeader from "@/app/assets/images/skills-header.svg";
import Tabs from "./atoms/Tabs";
import skillsData from "@/app/data/skills.json";
import { useState } from "react";

type Category = "Frontend" | "Backend" | "Practices" | "Tools";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(0);
  const categories: Category[] = ["Frontend", "Backend", "Practices", "Tools"];
  const currentSkills = skillsData.skills[categories[selectedTab]];

  return (
    <section id="skills" className="min-h-screen bg-peach py-20 relative">
      <div className="w-full h-full">
        {/* Skills Grid */}
        <div className="flex items-center justify-center min-h-screen mx-auto">
          <div className="flex flex-col">
            <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
            <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4 min-w-6xl bg-beige p-4 rounded-sm">
              {currentSkills.map((skill: string) => (
                <div
                  key={skill}
                  className="flex items-center justify-center transition-shadow bg-white border-2 rounded-lg aspect-square border-beige hover:shadow-lg scale-none hover:scale-120 transition-all duration-500"
                >
                  <div className="text-center text-gray-500 font-inter">
                    <div className="text-sm">{skill}</div>
                  </div>
                </div>
              ))}
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
