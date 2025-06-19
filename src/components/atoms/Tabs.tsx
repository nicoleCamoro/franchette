export default function Tabs() {
  const tabs = ["Frontend", "Backend", "Practices"];

  return (
    <div className="flex text-white justify-around font-extrabold text-4xl font-inter font bold">
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className="tab-animate-bg px-6 py-2 tracking-wider cursor-pointer relative text-neutral-600"
        >
          <span className="absolute -top-4 -left-4 z-10 font-black text-red-400 text-6xl italic">
            {index + 1}
          </span>
          <span className="relative z-10 italic">{tab}</span>
        </div>
      ))}
    </div>
  );
}
