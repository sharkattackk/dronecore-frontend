import { FaStar, FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Images */}
      <img
        src="/toronto-day.jpg"
        alt="Toronto Harbour Day"
        className="absolute inset-0 w-full h-full object-cover blur-[5px] dark:hidden"
      />
      <img
        src="/toronto.jpg"
        alt="Toronto Harbour Night"
        className="absolute inset-0 w-full h-full object-cover blur-[3px] hidden dark:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-end md:pb-64 h-full px-6 sm:px-10 md:px-20 max-w-7xl mx-auto">
        
        {/* Google Rating Badge */}
        <div className="flex flex-wrap sm:flex-nowrap items-center space-x-2 sm:space-x-3 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit mb-6 shadow-lg">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-0">
            <span className="font-semibold">4.9/5</span> on Google • 120+ Reviews
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight max-w-3xl text-white drop-shadow-lg">
          Harbour Heat
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
          Premium sauna and cold plunges with a breathtaking waterfront view in Toronto.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-xl w-full sm:w-auto">
            Book Now
          </button>
          <button className="border border-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-200 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-white/80 animate-bounce"
      >
        <span>Scroll</span>
        <FaChevronDown className="mt-1" />
      </a>
    </section>
  );
};

export default HeroSection;
