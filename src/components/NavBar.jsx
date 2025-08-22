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
        <div className={`fixed z-50 w-full h-16 flex flex-row items-center px-4 lg:space-x-10 ${isScrolled ? "bg-dark-gray" : "bg-transparent"}`}>

            {/* Nav Content */}
            <div className={`hidden relative z-10 lg:flex flex-row items-center justify-between w-full transition-all duration-300 rounded-md bg-dark-gray/80 backdrop-blur-md}`}>
                <div className="flex flex-row space-x-24 pr-8 px-4 ">
                    <a href="#home" className="flex flex-row items-center space-x-5 h-8">
                        <div>
                            <img src="/drone.png" className="w-15 h-7" />
                        </div>
                        <div className={`font-normal hover:text-accent-blue text-white`}>
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
            <div className="flex flex-row justify-between lg:hidden w-full bg-dark-gray/80 rounded-md px-4 py-1 items-center">
                <div className="w-full flex flex-col items-start">
                    <div>Yes</div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <img src="/drone.png" className="w-15 h-7" />
                </div>
                <div className="w-full flex flex-col items-end">
                    <div>Yes</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
