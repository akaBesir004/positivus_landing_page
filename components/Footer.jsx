import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="px-12 py-12   bg-[#191A23] text-white mt-8 rounded-t-3xl flex-wrap lg:flex-nowrap gap-12 ">
        <div className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-10  mb-12">
          <p className="text-3xl">Positivus</p>

          <ul className="flex lg:flex-row flex-col gap-10 underline text-center">
            <li>About Us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>

          <ul className="lg:flex flex-row gap-6 underline hidden">
            <Link href="https://x.com/" target="_blank">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={40}
              height={40}
              className="rounded-3xl "
             
            />
            </Link>
           
            <Link href="https://facebook.com/" target="_blank">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={45}
              height={50}
              className="rounded-3xl "
            />
            </Link>

            <Link href="https://instagram.com/" target="_blank">
            <Image
              src="/images/instagram.jpg"
              alt="Instagram"
              width={40}
              height={40}
              className="rounded-3xl "
            />
           </Link>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="">
            <h1 className="text-sm  lg:mx-0 mx-auto font-medium rounded-md text-black bg-[#B9FF66] max-w-fit px-2 mb-6">
              Contact Us:
            </h1>
            <p className="mb-4 text-center lg:text-left">
              Email: info@positivus.com
            </p>
            <p className="mb-4 text-center lg:text-left">Phone: 555-567-8901</p>
            <p className="text-center lg:text-left">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* 292A32 */}

          <div className="max-w-screen-xl mx-auto px-2 md:px-12 py-12 flex justify-center md:justify-start items-center bg-[#292A32] text-white mt-8 rounded-3xl flex-wrap lg:flex-nowrap gap-6">
            <div className="w-full md:w-auto">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border-2 placeholder:text-white border-white rounded-lg bg-[#292A32] focus:ring-2 focus:outline-none"
              />
            </div>

            <div className="w-full md:w-auto">
              <input
                id="subscribe"
                type="text"
                placeholder="Subscribe to news"
                className="w-full p-3 border-2 placeholder:text-center placeholder:text-black rounded-lg bg-[#B9FF66] focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <ul className="lg:hidden flex-row gap-6 justify-center underline flex mt-6">
            <Link href="https://x.com/" target="_blank">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={30}
              height={30}
              className="rounded-3xl "
            />
            </Link>

            <Link href="https://facebook.com/" target="_blank">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={30}
              height={30}
              className="rounded-3xl "
            />
            </Link>
           

            <Link href="https://instagram.com/" target="_blank">
            <Image
              src="/images/instagram.jpg"
              alt="Instagram"
              width={30}
              height={30}
              className="rounded-3xl "
            />
            </Link>
          </ul>
        </div>

        <div className="block  border-t border-white w-full mb-10 mt-8 "></div>
        <div className="lg:flex lg:justify-start  gap-12  block text-center">
          <p className="text-[18px] mb-2">
            © 2023 Positivus. All Rights Reserved.
          </p>

          <a href="/" className="text-[18px] underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
