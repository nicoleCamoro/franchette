import Image from 'next/image';

export default function About() {
    return (
        <section className="bg-[#1A4A47] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side - Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wide">
                            ABOUT
                        </h2>
                        <div className="text-white text-base leading-relaxed space-y-4">
                            <p>
                                Full Stack Developer Franchette brings 8+ years of web development expertise to every project. She excels in JavaScript, React and Node.js, having successfully delivered 50+ responsive web apps throughout her tenure as Synph. Her code is clean. Her solutions are crisp. Her current goal balances technical excellence with business needs. Nicole specializes in responsive applications, seamless APIs, and sleek user interfaces that captivate. She tackles complex problems with simple solutions. Clients value her ability to translate technical concepts into business outcomes, and her talent for collaboration and mentorship are what make an impact.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-80 h-80 bg-gray-300 rounded-lg overflow-hidden">
                            {/* Placeholder for about profile image */}
                            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600">
                                About Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
