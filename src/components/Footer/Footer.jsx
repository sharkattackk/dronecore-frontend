const Footer = () => {
    return(
        <div className="h-[30vh] bg-med-gray flex flex-row">
            <div className="h-full">
                <img src="/drone.png" className="h-full"/>
                
            </div>
            <div className="flex flex-col h-full py-10">
                <div className="text-xl mb-4">DroneCore</div>
                <div className="text-sm">Contact us</div>
                <div className="text-sm">Testimonials</div>
                <div className="text-sm">Previous Work</div>
            </div>
        </div>
    )
}

export default Footer