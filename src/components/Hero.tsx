import Image from "next/image";
import heroImage from "@/app/assets/images/image-55.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-beige pt-20 px-6 flex">
      <div className="max-w-7xl mx-auto mt-24 flex flex-col justify-between">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-8xl font-bold text-navy mb-2 font-libre-baskerville tracking-[0.4em]">
            FRANCHETTE
          </h1>
          <hr className="w-3/5 mx-auto text-navy my-3.5" />
          <p className="text-navy text-lg font-libre-baskerville tracking-[0.4em]">
            /fran·shay/
          </p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-row items-center gap-12">
          {/* Left Side - Full Stack Developer Label */}
          <div className="lg:order-1">
            <div className="font-extrabold text-4xl font-inter">
              <div className="text-navy ">FULL-STACK</div>
              <div className="bg-navy text-beige">DEVELOPER</div>
            </div>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:order-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={heroImage}
                alt="Profile"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Community Builder Label */}
          <div className="lg:order-3">
            <div className="font-extrabold text-4xl font-inter">
              <div className="bg-navy text-beige">COMMUNITY</div>
              <div className="text-navy">BUILDER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
