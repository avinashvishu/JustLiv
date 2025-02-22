import { Sparkles } from 'lucide-react'
import React from 'react'

const HeroSection1 = () => {
    return (
        <section className='w-full min-h-screen relative'>
            <div className='absolute inset-0 z-0'>
                <img src="./hero.png" alt="Children playing" className='hidden md:block w-full h-full object-fill' />
                <img src="./heroMobile.png" alt="Children playing" className="block md:hidden w-full h-full object-fill"></img>
            </div>
            <div className='relative z-10 min-h-screen flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-20'>
                <div className="text-start md:text-center max-w-4xl mx-auto">
                    <h2 className="text-white font-primary text-[27px] md:text-[38px] font-normal mb-4 leading-tight">Your Child&apos;s Perfect Schedule&nbsp;  
                        <br className="md:block hidden" />
                         in Just a Few Clicks
                    </h2>
                    <p className="text-white text-[18px] sm:text-xl mb-8 font-normal font-lato">
                        Less Planning, More Living.
                    </p>
                    <div className="">
                        <button className="inline-flex cursor-pointer items-center px-8 py-4 rounded-full bg-[#FF97A8] hover:bg-[#FF97A8] transition-colors duration-200 text-white font-semibold text-lg"><Sparkles height={24} width={24} className='text-black' /><span className="text-black font-medium text-[18px] font-lato tracking-[-0.5px]">Join the waiting list</span></button></div></div>
            </div>
        </section>
    )
}

export default HeroSection1