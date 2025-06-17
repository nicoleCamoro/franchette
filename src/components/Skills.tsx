export default function Skills() {
  return (
    <section className="min-h-screen bg-beige py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-square bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="text-gray-500 text-center font-inter">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-sm">Skill {index}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Large SKILLS Text */}
        <div className="text-center">
          <h2
            className="text-6xl md:text-8xl lg:text-9xl font-light text-beige stroke-2 stroke-navy opacity-50 tracking-[0.2em] font-libre-baskerville"
            style={{
              WebkitTextStroke: "2px #06222D",
              WebkitTextFillColor: "transparent",
            }}
          >
            SKILLS
          </h2>
        </div>
      </div>
    </section>
  );
}
