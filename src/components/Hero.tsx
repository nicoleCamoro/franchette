import heroImage from "@/app/assets/images/image-55.png";
import dynamic from "next/dynamic";
import SoundBtn from "./atoms/SoundBtn";

const Image = dynamic(() => import("next/image"));

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen px-6 pt-16 md:pt-20 bg-beige"
    >
      <div className="flex flex-col justify-evenly lg:justify-between mx-auto md:mt-14 lg:mt-24 max-w-7xl">
        {/* Main Title */}
        <div className="mb-8 text-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-navy mb-2 font-libre-baskerville tracking-[0.4em]">
            FRANCHETTE
          </h1>
          <hr className="w-3/5 mx-auto text-navy my-3.5" />
          <div className="flex items-center justify-center gap-1">
            <p className="text-navy text-xs md:text-lg font-libre-baskerville tracking-[0.4em]">
              /fran·shay/
            </p>
            <SoundBtn />
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:items-center gap-1 md:gap-6 lg:gap-12 md:flex-row">
          {/* Left Side - Full Stack Developer Label */}
          <div className="order-1 lg:order-1 md:w-1/2 lg:w-auto">
            <div className="text-md flex flex-col items-start md:text-3xl lg:text-4xl font-extrabold font-inter">
              <div className="text-navy">FULL-STACK</div>
              <div className="bg-navy text-beige">DEVELOPER</div>
              {/* <div className="text-navy">FOR WEB</div> */}
            </div>
          </div>

          {/* Center - Profile Image */}
          <div className="order-3 md:order-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={heroImage}
                alt="Profile"
                width={500}
                height={500}
                className="object-cover mx-auto"
                priority
              />
            </div>
          </div>

          {/* Right Side - Community Builder Label */}
          <div className="order-2 md:order-3 md:w-1/2 lg:w-auto">
            <div className="flex flex-col items-end text-md md:text-3xl lg:text-4xl font-extrabold font-inter lg:items-start">
              {/* <div className="text-navy">TECHNOLOGY</div> */}
              <div className="bg-navy text-beige">COMMUNITY</div>
              <div className="text-navy">BUILDER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
