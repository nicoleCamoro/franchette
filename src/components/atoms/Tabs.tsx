"use client";
import { useState } from "react";

export default function Tabs() {
  const tabs = ["Frontend", "Backend", "Practices", "Tools"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex text-white justify-around font-extrabold text-4xl font-inter font bold">
      {tabs.map((tab, index) => (
        <div
          key={tab}
          onClick={() => setSelectedTab(index)}
          className={`tab-animate-bg px-6 py-2 tracking-wider cursor-pointer relative text-neutral-600 ${
            selectedTab === index ? "tab-selected" : ""
          }`}
        >
          <span className="absolute -top-5 -left-2 z-10 font-black text-red-400 text-6xl italic">
            {index + 1}
          </span>
          <span className="relative z-10 italic pl-2">{tab}</span>
        </div>
      ))}
    </div>
  );
}
