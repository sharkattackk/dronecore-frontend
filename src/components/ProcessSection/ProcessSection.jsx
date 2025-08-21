const ProcessSection = () => {
    return (
        <div className="flex flex-col items-center h-[20vh] px-24 justify-center">
            <div className="flex flex-row justify-between items-center w-full max-w-6xl relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center w-1/3 text-center">
                    <div className="text-2xl font-semibold mb-2">Submit Request</div>
                    <p className="text-sm text-gray-300 max-w-xs">
                        Make your account and have quick access to drone footage anytime you need.
                    </p>
                </div>

                {/* Connector Line 1 */}
                <div className="w-8 h-1 bg-white absolute top-1/2 left-1/3 transform -translate-y-1/2" />

                {/* Step 2 */}
                <div className="flex flex-col items-center w-1/3 text-center">
                    <div className="text-2xl font-semibold mb-2">Organize Logistics</div>
                    <p className="text-sm text-gray-300 max-w-xs">
                        We'll work out what we need from you to get exactly what you need.
                    </p>
                </div>

                {/* Connector Line 2 */}
                <div className="w-8 h-1 bg-white absolute top-1/2 left-2/3 transform -translate-y-1/2" />

                {/* Step 3 */}
                <div className="flex flex-col items-center w-1/3 text-center">
                    <div className="text-2xl font-semibold mb-2">Wait for Your Footage</div>
                    <p className="text-sm text-gray-300 max-w-xs">
                        We'll take it from there. Once ready, the footage will show up in your files.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
