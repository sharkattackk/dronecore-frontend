const ServicesSection = ({}) => {
    return(
        <div className="bg-med-gray px-4 lg:px-24 flex flex-col h-64 py-4 mt-24">
            <div className="text-2xl w-full text-center">Services</div>
            <div className="flex flex-wrap lg:flex-row h-full items-center justify-between">
                <div className="w-full flex flex-col items-center">Transport Canada Certified Pilots</div>
                <div className="w-full flex flex-col items-center">Real Estate Marketing</div>
                <div className="w-full flex flex-col items-center">Hotel Marketing</div>
                <div className="w-full flex flex-col items-center">Airbnb Marketing</div>
            </div>
        </div>
    )
}

export default ServicesSection