const NavBar = () => {
    return (
        <div className="fixed z-50 w-full h-16 flex flex-row items-center px-4 space-x-10">
            {/* Blurred Gradient Background */}
            <div
                className="absolute inset-0 pointer-events-none"
            />

            {/* Nav Content */}
            <div className="relative z-10 flex flex-row items-center justify-between w-full text-light-gray">
                <div className="flex flex-row space-x-24 bg-dark-gray/50 backdrop-blur-sm pr-8 px-4 rounded-md">
                    <div className="flex flex-row items-center space-x-5  h-8">
                        <div>
                            <img src="/drone.png" className="w-15 h-7"/>
                        </div>
                        <div>DroneCore</div>
                    </div>
                    <div className="flex flex-row items-center space-x-10 h-8">
                        <div className="cursor-pointer">
                            About
                        </div>
                        <div className="cursor-pointer">
                            Testimonials
                        </div>
                        <div className="cursor-pointer">
                            Footage
                        </div>
                        <div className="cursor-pointer">
                            Contact
                        </div>
                    </div>
                </div>
                <div className="flex flex-row bg-dark-gray/50 backdrop-blur-sm rounded-md px-4 h-8 items-center">
                    <div>
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
