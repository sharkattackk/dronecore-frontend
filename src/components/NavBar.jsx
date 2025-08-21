const NavBar = () => {
    return (
        <div className="fixed z-50 w-full h-16 flex flex-row items-center px-4 space-x-10">
            {/* Blurred Gradient Background */}
            <div
                className="absolute inset-0 pointer-events-none"
            />

            {/* Nav Content */}
            <div className="relative z-10 flex flex-row items-center justify-between w-full text-light-gray bg-dark-gray/50 backdrop-blur-md rounded-md ">
                <div className="flex flex-row space-x-24 pr-8 px-4 ">
                    <a href="#home" className="flex flex-row items-center space-x-5  h-8">
                        <div>
                            <img src="/drone.png" className="w-15 h-7"/>
                        </div>
                        <div className="font-normal text-gray-100 hover:text-gray-100">DroneCore</div>
                    </a>
                    <div className="flex flex-row items-center space-x-4 h-8 transition-all duration-300 ">
                        <a href="#about" className="font-normal text-gray-100 hover:text-gray-100 cursor-pointer hover:bg-dark-gray/80 rounded-md px-2  transition-all duration-300">
                            About
                        </a>
                        <a href="#services" className=" font-normal text-gray-100 hover:text-gray-100 cursor-pointer hover:bg-dark-gray/80 rounded-md px-2 transition-all duration-300">
                            Testimonials
                        </a>
                        <a href="#contact" className=" font-normal text-gray-100 hover:text-gray-100 cursor-pointer hover:bg-dark-gray/80 rounded-md px-2 transition-all duration-300">
                            Footage
                        </a>
                        <a href="#contact" className="font-normal text-gray-100 hover:text-gray-100 cursor-pointer hover:bg-dark-gray/80 rounded-md px-2 transition-all duration-300">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="flex flex-row rounded-md px-4 h-8 items-center">
                    <div>
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
