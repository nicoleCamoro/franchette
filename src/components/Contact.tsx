import Link from "next/link";

export default function Contact() {
  const linktree = "https://linktr.ee/franchette12";

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#1e1e1e] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Contact Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16 leading-relaxed font-libre-baskerville">
          Want to reach
          <br />
          out to me?
        </h2>

        {/* Contact Buttons */}
        <div className="flex items-center justify-center relative">
          <Link
            className="w-40 h-40 md:w-60 md:h-60 bg-[#E8B69A] rounded-full flex items-center justify-center text-[#2A2A2A] font-medium hover:bg-[#D9A583] relative z-10 hover:z-30"
            href="mailto:nicolecamoro@gmail.com"
          >
            <div className="text-center text-smmd:text-xl font-inter">
              <div>SEND</div>
              <div>EMAIL</div>
            </div>
          </Link>

          <Link
            className="w-40 h-40 md:w-60 md:h-60 bg-[#C47B5A] rounded-full flex items-center justify-center text-white font-medium hover:bg-[#B56B4A] relative -ml-8 z-20"
            href={linktree}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center text-sm md:text-xl font-inter">
              <div>CHECK</div>
              <div>LINKS</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
