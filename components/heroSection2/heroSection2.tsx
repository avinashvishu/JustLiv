import React from 'react'
import { Sparkles } from 'lucide-react'
const heroSection2 = () => {
    const features = [
        {
          title: "Custom Calendar",
          description:
            "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
          image:"./laptop.png",
          alt:"Calendar"
        },
        {
          title: "Tailored to Your Interests",
          description:
            "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they're attending.",
          image:"./child.png",
          alt:"caleInterestsndar"
        },
        {
          title: "Stress-Free Bulk Booking",
          description:
            "Book all your child's activities in just a few clicks. Our platform handles the details so you don't have to.",
          image:"./mother1.png",
          alt:"Booking"
        },
      ]
  return (
    <section className='container mx-auto px-5 py-20 md:px-20'>
        <h2 className="text-start md:text-center text-2xl text-black font-normal mb-8 font-primary">Why JustLiv?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map(({title, description, image,alt},index)=>{
                return (
                    <div key={index} className='bg-white rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col'>
                        <Sparkles height={24} width={24} className='text-black mb-2'/>
                        <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-primary">{title}</h3>
                        <p className='text-[16px] font-lato font-normal text-[#959AA2] mb-4'>{description}</p>
                        <img src={image} alt={alt}  className='mt-auto rounded-lg'/>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default heroSection2