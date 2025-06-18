import Image from "next/image";
import SkillsHeader from "@/app/assets/images/skills-header.svg";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#FFF6ED] py-20 relative">
      <div className="w-full h-full">
        {/* Skills Grid */}
        <div className="flex items-center justify-center min-h-screen mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4 min-w-6xl">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-shadow bg-white border-2 rounded-lg aspect-square border-beige hover:shadow-lg"
              >
                <div className="text-center text-gray-500 font-inter">
                  <div className="mb-2 text-4xl">⚡</div>
                  <div className="text-sm">Skill {index}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large SKILLS Text */}
      <div className="absolute right-3.5 bottom-14">
        <Image
          src={SkillsHeader}
          alt="SKILLS"
          width={600}
          height={600}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}
