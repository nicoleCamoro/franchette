import Image from "next/image";
import aboutImage from "@/app/assets/images/image-65.png";
import MapPin from "./icons/MapPin";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-2 bg-navy">
      <div className="max-w-5xl mx-auto h-svh flex items-center">
        {/* Left Side - Content */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-between md:flex-row">
            <h2 className="mb-2 text-4xl font-light tracking-wide text-white underline decoration-2 underline-offset-8 md:text-5xl font-libre-baskerville">
              ABOUT
            </h2>
            <div className="flex flex-col items-center justify-end gap-2 lg:w-1/2">
              <figure className="overflow-hidden rounded-sm">
                <Image
                  src={aboutImage}
                  alt="About"
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <figcaption className="text-center font-inter mt-2">
                  Maria Nicole Franchette Camoro Reyes
                </figcaption>
              </figure>

              <div className="flex gap-2">
                <MapPin />
                <p className="text-white font-inter tracking-wide">
                  Cebu, Philippines
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-white font-inter lg:w-1/2">
            <p>
              Full Stack Developer Franchette brings <b>8+ years</b> of web
              development expertise to every project. She excels in JavaScript,
              React, Node.js and Cloud Services like GCP, having successfully
              delivered 50+ responsive web apps throughout her tenure as Symph.
              Her code is clean. Her solutions are crisp.
            </p>
            <p>
              Her current goal balances technical excellence with business
              needs. Franchette specializes in large-scale responsive
              applications, seamless APIs, and interactive user interfaces that
              captivate. Clients value her ability to translate technical
              concepts into business outcomes, and her talent for collaboration
              and mentorship are what make an impact.
            </p>
            <p>
              When not coding, Franchette is a passionate tech community
              builder, organizing events and workshops to help others learn and
              grow. She also enjoys tinkering with things like IoT devices,
              smart home automation, and explores different hobbies every now
              and then.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
