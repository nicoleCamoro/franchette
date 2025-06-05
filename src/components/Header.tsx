'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5DDD1] px-6 py-4">
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center space-x-8">
                    <button className="text-[#1A4A47] hover:text-gray-600 transition-colors font-inter font-medium">
                        ABOUT
                    </button>
                    <button className="text-[#1A4A47] hover:text-gray-600 transition-colors font-inter font-medium">
                        SKILLS
                    </button>
                    <button className="text-[#1A4A47] hover:text-gray-600 transition-colors font-inter font-medium">
                        CONTACT
                    </button>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-8 h-8 bg-[#1A4A47] hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                    <div className="space-y-1">
                        <div className="w-4 h-0.5 bg-white"></div>
                        <div className="w-4 h-0.5 bg-white"></div>
                        <div className="w-4 h-0.5 bg-white"></div>
                    </div>
                </button>
            </nav>
        </header>
    );
}
