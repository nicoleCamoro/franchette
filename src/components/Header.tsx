"use client";

import { useState } from "react";
import MenuButton from "./atoms/MenuButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const MENU_ITEMS = ["home", "about", "skills", "contact"];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 md:py-6 bg-beige">
        <nav className="flex justify-end items-center md:justify-center max-w-6xl mx-auto">
          <div className="flex items-center justify-between hidden w-full space-x-8 md:flex">
            {MENU_ITEMS.map((item) => {
              return (
                <button
                  onClick={() => scrollToSection(item)}
                  className="font-medium transition-colors text-navy hover:text-gray-600 font-inter"
                  key={item}
                >
                  {item.toUpperCase()}
                </button>
              );
            })}
          </div>

          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </nav>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-navy z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full space-y-2">
          {MENU_ITEMS.map((item) => {
            return (
              <button
                onClick={() => scrollToSection(item)}
                className="ml-8 text-5xl sm:text-6xl font-bold text-white tracking-wide hover:text-peach transition-colors font-inter"
                key={item}
              >
                {item.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
