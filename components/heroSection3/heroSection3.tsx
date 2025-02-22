import React from 'react'
import{Search,Calendar,Heart} from 'lucide-react'
const HeroSection3 = () => {
    return (
        <section className='text-white py-16 px-5 bg-cover bg-center h-[590px] [@media(width>=1500px)]:h-[725px]' style={{ backgroundImage: `url('/sky.png')` }}>
            <h2 className="text-start md:text-center text-2xl font-normal mb-8 font-primary">How it works</h2>
            <div className="container mx-auto relative">
            <div className="flex flex-col space-y-12 items-start mx-auto max-w-xl">

      <div className="flex items-start space-x-6 relative">
        <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
          <Search className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="text-[18px] font-lato font-semibold mb-1">Browse</h3>
          <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
            Discover activities from our partner <br className="block md:hidden" /> booking providers.
          </p>
        </div>
      </div>


      <div className="flex items-start space-x-6 relative">
        <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
          <Calendar className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="text-[18px] font-lato font-semibold mb-1">Build</h3>
          <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
            Share your child’s interests,<br className="block md:hidden" /> schedule, and preferences. Watch as
            JustLiv creates the perfect calendar filled with activities.
          </p>
        </div>
        <img
          src="/downArrow.png"
          alt="Arrow"
          className="absolute -top-11 left-14 w-[42px] h-[45px]"
        />
      </div>

   
      <div className="flex items-start space-x-6 relative">
        <div className="flex-shrink-0 p-4 w-[60px] h-[60px] bg-[#51658E] bg-opacity-100 rounded-lg">
          <Heart className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="text-[18px] font-lato font-semibold mb-1">Book</h3>
          <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">
            Finalize your selections with one <br className="block md:hidden" /> click and enjoy peace of mind.
          </p>
        </div>
        <img
          src="/twistedArrow.png"
          alt="Arrow"
          className="absolute -top-12 md:-top-10 left-28 w-[48px] h-[61px]"
        />
      </div>
    </div>
            </div>
        </section>
    )
}

export default HeroSection3