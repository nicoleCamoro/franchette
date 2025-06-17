import Image from "next/image";
import aboutImage from "@/app/assets/images/image-65.png";

export default function About() {
  return (
    <section className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 h-svh flex flex-col justify-around">
            <h2 className="underline decoration-2 underline-offset-8 text-4xl md:text-5xl font-light text-white mb-2 tracking-wide font-libre-baskerville">
              ABOUT
            </h2>
            <div className="text-white text-base leading-relaxed space-y-4 font-inter">
              <p>
                Full Stack Developer Franchette brings 8+ years of web
                development expertise to every project. She excels in
                JavaScript, React and Node.js, having successfully delivered 50+
                responsive web apps throughout her tenure as Symph. Her code is
                clean. Her solutions are crisp. Her current goal balances
                technical excellence with business needs. Franchette specializes
                in large-scale responsive applications, seamless APIs, and
                interactive user interfaces that captivate. She tackles complex
                problems with simple solutions. Clients value her ability to
                translate technical concepts into business outcomes, and her
                talent for collaboration and mentorship are what make an impact.
              </p>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={aboutImage}
                alt="About"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
