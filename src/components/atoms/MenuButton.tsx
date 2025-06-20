export default function MenuButton(props: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <button
      onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
      className="flex items-center justify-center w-8 h-8 transition-colors bg-navy hover:bg-gray-700 md:hidden relative z-50"
    >
      <div className="space-y-1">
        <div
          className={`w-4 h-0.5 bg-white transition-all duration-300 ${
            props.isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-4 h-0.5 bg-white transition-all duration-300 ${
            props.isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-4 h-0.5 bg-white transition-all duration-300 ${
            props.isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </div>
    </button>
  );
}
