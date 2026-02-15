const ServicesSection = () => {
  return (
    <section className="bg-neutral-gray dark:bg-med-gray text-dark-gray dark:text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Sessions
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose between a fully private waterfront experience or join a curated community session.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Private Session */}
          <div className="group bg-light-gray dark:bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-xl">
            
            <div className="mb-6">
              <h3 className="text-2xl font-medium mb-2">
                Private Session
              </h3>
              <p className="text-dark-gray/70 dark:text-gray-400 text-sm">
                Exclusive access to the sauna and cold plunge. Perfect for couples, small groups, or solo reset time.
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-semibold">$65</span>
              <span className="text-dark-gray/70 dark:text-gray-400 ml-2">per hour</span>
            </div>

            <ul className="space-y-3 text-dark-gray/70 dark:text-gray-300 text-sm mb-8">
              <li>• Private waterfront setting</li>
              <li>• Full sauna + cold plunge access</li>
              <li>• Flexible booking times</li>
            </ul>

            <a
              href="#book"
              className="inline-block bg-neutral-gray dark:bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              Book Private Session
            </a>
          </div>

          {/* Community Session */}
          <div className="group bg-light-gray dark:bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-xl">
            
            <div className="mb-6">
              <h3 className="text-2xl font-medium mb-2">
                Community Session
              </h3>
              <p className="text-dark-gray/70 dark:text-gray-400 text-sm">
                Join a guided group experience. Connect, recharge, and experience contrast therapy together.
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-semibold">$475</span>
              <span className="text-dark-gray/70 dark:text-gray-400 ml-2">per hour</span>
            </div>

            <ul className="space-y-3 text-dark-gray/70 dark:text-gray-300 text-sm mb-8">
              <li>• Hosted group experience</li>
              <li>• Ideal for events or team sessions</li>
              <li>• Waterfront skyline views</li>
            </ul>

            <a
              href="#book"
              className="inline-block bg-neutral-gray dark:bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              Book Community Session
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
