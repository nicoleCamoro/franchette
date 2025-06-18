"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-beige">
      <nav className="flex items-center justify-center max-w-6xl mx-auto">
        <div className="flex items-center justify-between hidden w-full space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("home")}
            className="font-medium transition-colors text-navy hover:text-gray-600 font-inter"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-medium transition-colors text-navy hover:text-gray-600 font-inter"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="font-medium transition-colors text-navy hover:text-gray-600 font-inter"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium transition-colors text-navy hover:text-gray-600 font-inter"
          >
            CONTACT
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-8 h-8 transition-colors bg-navy hover:bg-gray-700 md:hidden"
        >
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </div>
        </button>
      </nav>
    </header>
  );
}
