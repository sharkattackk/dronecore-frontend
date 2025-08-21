import { FaChevronDown, FaChevronRight } from "react-icons/fa";
const HeroSection = () => {
    return (
        <div className="relative h-[80vh] overflow-hidden shadow-2xl">
            <video
                src="/placeholder.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Optional overlay content */}
            <div className="relative z-10 flex items-center justify-center space-y-4 h-full flex-col px-24">
                    <div className="flex flex-row justify-between items-center w-full relative bg-dark-gray/50 backdrop-blur-md rounded-md p-8">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center w-1/3 text-center">
                            <div className="text-2xl font-semibold mb-2">Submit Request</div>
                            <p className="text-sm text-gray-300 max-w-xs">
                                Make your account and have quick access to drone footage anytime you need.
                            </p>
                        </div>

                        {/* Connector Line 1 */}
                        <FaChevronRight />
                        {/* Step 2 */}
                        <div className="flex flex-col items-center w-1/3 text-center">
                            <div className="text-2xl font-semibold mb-2">Organize Logistics</div>
                            <p className="text-sm text-gray-300 max-w-xs">
                                We'll work out what we need from you to get exactly what you need.
                            </p>
                        </div>

                        <FaChevronRight />
                        {/* Step 3 */}
                        <div className="flex flex-col items-center w-1/3 text-center">
                            <div className="text-2xl font-semibold mb-2">Download Your Footage</div>
                            <p className="text-sm text-gray-300 max-w-xs">
                                We'll take it from there. Once ready, the footage will show up in your files.
                            </p>
                        </div>
                </div>
                <div className="bg-dark-gray/50 text-xs backdrop-blur-sm px-10 py-2 rounded-md flex flex-row items-center">
                   We'll do all the work.
                </div>
            </div>

            {/* See More Button */}
            <a href="#about" className="absolute bottom-0 w-full flex justify-center z-20 cursor-pointer">
                <div className="flex flex-col w-24 h-14 pb-2 bg-dark-gray/50 backdrop-blur-sm rounded-t-full items-center justify-end text-white text-sm shadow-md">
                    <div>See More</div>
                    <FaChevronDown />
                </div>
            </a>
        </div>
    );
};

export default HeroSection;
