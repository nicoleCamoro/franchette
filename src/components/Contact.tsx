export default function Contact() {
  return (
    <section className="min-h-screen bg-[#2A2A2A] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 leading-relaxed font-libre-baskerville">
          Want to reach
          <br />
          out to{" "}
          <span className="underline decoration-2 underline-offset-8">me?</span>
        </h2>

        {/* Contact Buttons */}
        <div className="flex items-center justify-center relative">
          <button className="w-60 h-60 bg-[#E8B69A] rounded-full flex items-center justify-center text-[#2A2A2A] font-medium hover:bg-[#D9A583] transition-colors relative z-10">
            <div className="text-center text-xl font-inter">
              <div>OPEN</div>
              <div>CONTACT</div>
              <div>FORM</div>
            </div>
          </button>

          <button className="w-60 h-60 bg-[#C47B5A] rounded-full flex items-center justify-center text-white font-medium hover:bg-[#B56B4A] transition-colors relative -ml-8 z-20 mix-blend-difference">
            <div className="text-center text-xl font-inter">
              <div>CHECK</div>
              <div>LINKS</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
