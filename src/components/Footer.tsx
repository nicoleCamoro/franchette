"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2A2A2A] py-8 px-6 border-t border-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm font-inter">
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            Back to top
          </button>

          {/* Copyright and credits */}
          <div className="text-center md:text-right">
            <p>
              © {new Date().getFullYear()} All Rights Reserved. Design &
              Developed by Franchette Camoro Reyes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
