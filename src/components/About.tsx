import Image from "next/image";
import aboutImage from "@/app/assets/images/image-65.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-navy">
      <div className="max-w-5xl mx-auto">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-around h-svh">
          <div className="flex flex-col justify-between md:flex-row">
            <h2 className="mb-2 text-4xl font-light tracking-wide text-white underline decoration-2 underline-offset-8 md:text-5xl font-libre-baskerville">
              ABOUT
            </h2>
            <div className="flex items-center justify-end lg:w-1/2">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={aboutImage}
                  alt="About"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white font-inter lg:w-1/2">
            <p>
              Full Stack Developer Franchette brings 8+ years of web development
              expertise to every project. She excels in JavaScript, React and
              Node.js, having successfully delivered 50+ responsive web apps
              throughout her tenure as Symph. Her code is clean. Her solutions
              are crisp. Her current goal balances technical excellence with
              business needs. Franchette specializes in large-scale responsive
              applications, seamless APIs, and interactive user interfaces that
              captivate. She tackles complex problems with simple solutions.
              Clients value her ability to translate technical concepts into
              business outcomes, and her talent for collaboration and mentorship
              are what make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
