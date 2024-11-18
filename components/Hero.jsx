import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto py-6 lg:px-16 px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Leva strana (naslov, tekst i dugme) */}
        <div className="w-full text-left">
          <h1 className="font-medium text-[48px] pb-4">
            Navigating the digital landscape for success
          </h1>

          {/* Slika ispod naslova (prikazana samo na mobilnim uređajima) */}
          <div className="w-full lg:hidden justify-center">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={800}
              height={600}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          <p className="text-[16px] md:text-[18px] pb-4">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="py-[15px] px-[25px] rounded-2xl border border-white bg-[#191A23] text-white">
            Book a consultation
          </button>
        </div>

        {/* Desna strana (slika za tablet i desktop uređaje) */}
        <div className="w-full hidden lg:flex justify-center lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={800}
            height={600}
            className="w-full  lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
