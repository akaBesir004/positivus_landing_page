import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="px-12 py-12   bg-[#191A23] text-white mt-8 rounded-t-3xl flex-wrap lg:flex-nowrap gap-12">
        
        <div className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-10 ">
            <p className="text-3xl">Positivus</p>

            <ul className="flex lg:flex-row flex-col gap-10 underline">
                <li>
                    About Us
                </li>
                <li>
                    Services
                </li>
                <li>Use Cases</li>
                <li>
                    Pricing
                </li>
                <li>Blog</li>
            </ul>

            <ul className="lg:flex flex-row gap-6 underline hidden">
                <Image src="/images/twitter.png" alt="Twitter" width={40} height={40} className="rounded-3xl "/>
              
           
                <Image src="/images/facebook.jpg" alt="Facebook" width={40} height={40} className="rounded-3xl "/>
                <Image src="/images/instagram.jpg" alt="Instagram" width={40} height={40} className="rounded-3xl "/>
              
            </ul>
        </div>    

        <div className="block  border-t border-white w-full mb-10 mt-8 "></div>
        <div className="lg:flex lg:justify-start  gap-12  block text-center">
          <p className="text-[18px] mb-2">© 2023 Positivus. All Rights Reserved.</p>

          <a href="/" className="text-[18px] underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
