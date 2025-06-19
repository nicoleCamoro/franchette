"use client";

interface TabsProps {
  selectedTab: number;
  onTabChange: (index: number) => void;
}

export default function Tabs({ selectedTab, onTabChange }: TabsProps) {
  const tabs = ["Frontend", "Backend", "Tools", "Practices"];

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto lg:overflow-visible scrollbar-hide">
        <div className="flex text-white whitespace-nowrap min-w-max lg:min-w-0 lg:justify-around font-extrabold text-xl lg:text-4xl font-inter font-bold px-4 lg:px-0 gap-6 lg:gap-0">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              onClick={() => onTabChange(index)}
              className={`tab-animate-bg px-6 py-2 tracking-wider cursor-pointer relative text-neutral-600 ${
                selectedTab === index ? "tab-selected" : ""
              }`}
            >
              <span className="absolute -top-1 lg:-top-5 lg:-left-2 z-10 font-black text-red-400 text-lg lg:text-6xl italic">
                {index + 1}
              </span>
              <span className="relative z-10 italic pl-2">{tab}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Fade edges on mobile */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-peach to-transparent lg:hidden" />
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-peach to-transparent lg:hidden" />
    </div>
  );
}
