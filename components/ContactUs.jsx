"use client";

import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <h1 className="text-3xl font-medium bg-[#B9FF66] max-w-fit p-2 ">
          Contact Us
        </h1>
        <p className="text-[16px] md:text-[18px] md:max-w-md max-w-sm text-center md:text-left mb-8 md:mb-0">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="px-12 py-6 bg-[#F3F3F3] text-black mt-8 rounded-3xl gap-12">
        <div className="flex flex-row my-4">
          <label className="mr-4 text-[18px]">
            <input
              type="radio"
              name="Greeting"
              value="Say Hi"
              checked={selectedOption === "Say Hi"}
              onChange={handleChange}
              className="mr-2 w-6 h-6 border-2 border-green-500 rounded-full bg-green-500"
            />
            Say Hi
          </label>

          <label className="text-[18px]">
            <input
              type="radio"
              name="Greeting"
              value="Get a quote"
              checked={selectedOption === "Get a quote"}
              onChange={handleChange}
              className="mr-2 w-6 h-6 border-2 border-green-500 rounded-full checked:bg-green-500"
            />
            Get a quote
          </label>
        </div>

        {/* Forma */}
        <div className="mt-8 max-w-[500px]">

        
          <form className="flex flex-col gap-6 justify-between">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="5"
                className="w-full p-3 border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#191A23] text-white py-3 rounded-xl font-medium  transition duration-200"
            >
              Send Message
            </button>

            {/* <Image src="/images/contactUs.jpg" alt="Illustration" width={300} height={300} className="float-right" /> */}
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
