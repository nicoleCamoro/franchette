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
              Franchette is a Full Stack Developer with <mark>8+ years</mark> of
              experience building fast, responsive web apps using JavaScript,
              React, Node.js, and cloud services like GCP, to name a few. At
              Symph, she’s delivered a variety of projects with clean code and
              clear results.
            </p>
            <p>
              She focuses on building <mark>large-scale webapps</mark> with
              smooth APIs and user-friendly interfaces, always aligning tech
              solutions with business goals. Known for being a strong
              collaborator and mentor, Franchette helps teams grow while getting
              things done.
            </p>
            <p>
              Outside of work, she supports the{" "}
              <mark>local tech community</mark> through conducting events and
              workshops, and enjoys experimenting with IoT and smart home
              automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
