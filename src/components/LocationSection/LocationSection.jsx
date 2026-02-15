const LocationSection = () => {
  return (
    <section className="bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-white px-6 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Where To Find Us
          </h2>
          <p className="text-dark-gray dark:text-gray-400 mt-4">
            Located directly on Toronto’s waterfront with access from both the Harbour and the Islands.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Map */}
          <div className="w-full lg:w-2/3 h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Harbour Heat Location"
              src="https://www.google.com/maps?q=Toronto+Harbour&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Location Info */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            
            {/* Toronto Harbour */}
            <div className="bg-neutral-gray dark:bg-white/5 cursor-pointer border border-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-medium mb-2">
                Toronto Harbour
              </h3>
              <p className="text-dark-gray/80 dark:text-gray-400 text-sm">
                Board directly from the downtown waterfront with skyline views and easy access.
              </p>
            </div>

            {/* Toronto Island */}
            <div className="bg-neutral-gray cursor-pointer dark:bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-medium mb-2">
                Toronto Islands
              </h3>
              <p className="text-dark-gray/80 dark:text-gray-400 text-sm">
                Enjoy a private retreat experience surrounded by nature just minutes from the city.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
