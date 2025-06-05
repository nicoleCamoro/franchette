import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#F5DDD1] pt-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Title */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-7xl font-light text-[#1A4A47] tracking-[0.2em] mb-2 font-libre-baskerville">
                        FRANCHETTE
                    </h1>
                    <p className="text-[#1A4A47] text-lg tracking-widest font-inter">
                        /fran·shay/
                    </p>
                </div>

                {/* Hero Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-16">
                    {/* Left Side - Full Stack Developer Label */}
                    <div className="lg:order-1">
                        <div className="bg-[#1A4A47] text-white px-6 py-4 font-bold text-lg font-inter">
                            <div>FULL-STACK</div>
                            <div>DEVELOPER</div>
                        </div>
                    </div>

                    {/* Center - Profile Image */}
                    <div className="lg:order-2 relative">
                        <div className="w-80 h-96 bg-gray-300 rounded-lg overflow-hidden">
                            {/* Placeholder for profile image */}
                            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 font-inter">
                                Profile Image
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Community Builder Label */}
                    <div className="lg:order-3">
                        <div className="bg-[#1A4A47] text-white px-6 py-4 font-bold text-lg font-inter">
                            <div>COMMUNITY</div>
                            <div>BUILDER</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
