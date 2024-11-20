import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <h1 className="text-3xl   font-medium bg-[#B9FF66] max-w-fit p-2 ">
          Testimonials
        </h1>
        <p className="text-[16px] md:text-[18px] max-w-xl text-center md:text-left mb-8 md:mb-0">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-12 py-12  flex flex-col justify-around items-center bg-[#191A23] text-white mt-8 rounded-3xl flex-wrap lg:flex-nowrap gap-12">
        <div className="flex justify-between gap-8 flex-wrap lg:flex-nowrap">
          {/* <div className="border-2  px-10 py-8 rounded-[2.25rem] border-[#B9FF66]">
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div> */}

          <div className="border-2 max-w-screen-3xl px-10 py-8 rounded-[2.25rem] border-[#B9FF66] items-center ">
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
            
          </div>
          

          <div className="border-2  px-10 py-8 rounded-[2.25rem] border-[#B9FF66]">
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
        </div>

        <div className="flex justify-between  w-full lg:max-w-lg items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>

          <div className="flex gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="#B9FF66"
              />
            </svg>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="white"
              />
            </svg>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="white"
              />
            </svg>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="white"
              />
            </svg>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill="white"
              />
            </svg>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
