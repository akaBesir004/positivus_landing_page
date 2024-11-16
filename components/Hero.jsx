import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 lg:px-16 px-8   '>

        <h1 className='font-medium '>Navigating the digital landscape for success</h1>
        {/* <Image src="/images/speaker.jpg" alt='Speaker' width={200} height={200} className='md:float-right'/> */}
        <p>
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="py-[15px] px-[25px] rounded-2xl border border-white bg-[#191A23] text-white">
          Book a consultation
        </button>
        
        
    </div>
  )
}

export default Hero