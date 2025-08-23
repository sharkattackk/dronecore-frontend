import React, { useState, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

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
        <div className={`fixed z-50 w-full h-16 flex flex-row items-center px-24 lg:space-x-10 ${isScrolled ? "bg-dark-gray" : "bg-transparent"} transition-all duration-300`}>

            {/* Nav Content */}
            <div className={`hidden relative z-10 lg:flex flex-row items-center justify-between w-full`}>
                <a href="#home" className="flex flex-row items-start w-1/3">
                    <div className="flex flex-row items-center space-x-4 bg-dark-gray/80 rounded-md px-4 h-8 hover:scale-[103%] transition-all duration-200">
                        <div>
                            <img src="/drone.png" className="w-15 h-7" />
                        </div>
                        <div className={`font-normal hover:text-gray-100 text-gray-100`}>
                            DroneCore
                        </div>
                    </div>
                </a>
                <div className="flex flex-col w-1/3 ">
                    <div className="w-auto flex flex-row items-center justify-between px-8 h-8 bg-dark-gray/80 rounded-md hover:scale-[103%] transition-all duration-200">
                        {['Services', 'Gallery', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-100 hover:text-gray-100 hover:bg-med-gray rounded-md p-1 transition-all duration-300 font-normal">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-row rounded-md px-4 w-1/3 justify-end items-center">
                    <div className="flex flex-row px-4 h-8 bg-dark-gray/80 hover:scale-[103%] transition-all duration-200 cursor-pointer items-center rounded-md space-x-4 ">
                        <div className=" flex flex-row items-center space-x-2 ">
                            <div>Get Content</div> <FaArrowUpRightFromSquare className="text-xs"/>
                        </div>
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
