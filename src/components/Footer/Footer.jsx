import { FaInstagram, FaGoogle, FaGripfire } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-gray dark:bg-med-gray text-dark-gray dark:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
            <FaGripfire className="text-3xl"/>
              <span className="text-lg font-medium tracking-wide">
                Harbour Heat
              </span>
            </div>

            <p className="text-dark-gray/70 dark:text-gray-400 text-sm max-w-xs">
              Premium floating sauna and cold plunge experiences located on Toronto’s waterfront.
            </p>

            {/* Socials */}
            <div className="flex space-x-4 text-dark-gray/70 dark:text-gray-400">
              <a href="#" className="text-dark-gray/70 hover:text-black dark:text-light-gray dark:hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark-gray/70 hover:text-black dark:text-light-gray dark:hover:text-white transition">
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <div className="text-sm uppercase tracking-wider text-dark-gray/70 dark:text-gray-500">
              Explore
            </div>
 
            <a href="#availability" className="text-dark-gray/70 hover:text-black dark:text-gray-300 dark:hover:text-white transition text-sm">
              Availability
            </a>
            <a href="#passes" className=" text-dark-gray/70 hover:text-black dark:text-gray-300 dark:hover:text-white transition text-sm">
              Passes
            </a>
            <a href="#gift-cards" className="text-dark-gray/70 hover:text-black dark:text-gray-300 dark:hover:text-white transition text-sm">
              Gift Cards
            </a>
            <a href="#contact" className=" text-dark-gray/70 hover:text-black dark:text-gray-300 dark:hover:text-white transition text-sm">
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col space-y-6">
            <div className="text-sm uppercase tracking-wider text-dark-gray dark:text-gray-500">
              Ready to unwind?
            </div>

            <a
              href="#book"
              className="bg-white text-black px-6 py-3 rounded-full font-medium w-fit hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Your Session
            </a>

            <div className="text-gray-500 text-sm">
              4.9 ★ on Google • 120+ Reviews
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>© {new Date().getFullYear()} Harbour Heat. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-gray/70 dark:text-light-gray hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-dark-gray/70 dark:text-light-gray hover:text-white transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
