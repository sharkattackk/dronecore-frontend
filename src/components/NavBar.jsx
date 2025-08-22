import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed z-50 w-full h-16 flex flex-row items-center px-4 space-x-10 ${isScrolled ? "bg-dark-gray" : "bg-transparent"}`}>
            {/* Optional blurred overlay */}
            <div className="absolute inset-0 pointer-events-none" />

            {/* Nav Content */}
            <div className={`relative z-10 flex flex-row items-center justify-between w-full transition-all duration-300 rounded-md bg-dark-gray/80 backdrop-blur-md}
            `}>
                <div className="flex flex-row space-x-24 pr-8 px-4 ">
                    <a href="#home" className="flex flex-row items-center space-x-5 h-8">
                        <div>
                            <img src="/drone.png" className="w-15 h-7" />
                        </div>
                        <div className={`font-normal hover:text-accent-blue`}>
                            DroneCore
                        </div>
                    </a>
                    <div className="flex flex-row items-center space-x-4 h-8 transition-all duration-300">
                        {['About', 'Testimonials', 'Footage', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`font-normal px-2 rounded-md cursor-pointer transition-all duration-300 
                                    ${isScrolled ? 'text-dark-gray hover:text-accent-blue' : 'text-gray-100 hover:text-gray-100 hover:bg-accent-blue'}
                                `}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row rounded-md px-4 h-8 items-center">
                    <div className={`${isScrolled ? 'text-dark-gray' : 'text-gray-100'}`}>
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
