import { FaStar, FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      {/* Day Image */}
        <img
        src="/toronto-day.jpg"
        alt="Toronto Harbour Day"
        className="absolute inset-0 w-full h-full object-cover blur-[5px] dark:hidden"
        />

        {/* Evening Image */}
        <img
        src="/toronto.jpg"
        alt="Toronto Harbour Night"
        className="absolute inset-0 w-full h-full object-cover blur-[3px] hidden dark:block"
        />


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-gray/30 backdrop-blur-sm dark:hidden" />

      {/* Content */}
      <div className="relative z-10 flex mt-24 md:mt-0 flex-col justify-end pb-48 h-full px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* Google Rating Badge */}
        <div className="flex items-center space-x-3 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit mb-6 shadow-lg">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-sm md:text-base">
            <span className="font-semibold">4.9/5</span> on Google • 120+ Reviews
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-3xl text-dark-gray dark:text-white">
          Harbour Heat
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl">
          Premium sauna and cold plunges with a breathtaking waterfront view in Toronto.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-xl">
            Book Now
          </button>
          <button className="border hidden md:block border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-row w-full items-center justify-center">
      <a
        href="#services"
        className="absolute bottom-8 flex flex-col items-center text-sm text-gray-200 animate-bounce"
      >
        <span>Scroll</span>
        <FaChevronDown className="mt-1" />
      </a>
      </div>
    </section>
  );
};

export default HeroSection;
