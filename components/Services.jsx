import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <h1 className="text-3xl   font-medium bg-[#B9FF66] max-w-fit p-2 ">
          Services
        </h1>
        <p className="text-[16px] md:text-[18px] max-w-xl text-center md:text-left mb-8 md:mb-0">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="py-12 grid grid-cols-1  lg:grid-cols-2 gap-8 ">
        <div className=" border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#F3F3F3] rounded-3xl border-black">
          <div >
            <h1 className="text-left text-2xl font-medium bg-[#B9FF66] inline-block max-w-[200px] break-words">
              Search Engine Optimization
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <p>Learn More</p>
              </span>

              <Image
                src="/images/one.png"
                alt="First service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#B9FF66] rounded-3xl border-black">
          <div className="">
            <h1 className="text-left text-2xl font-medium bg-white text-black inline-block max-w-[200px] break-words">
              Social Media Marketing
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <p>Learn More</p>
              </span>

              <Image
                src="/images/two.png"
                alt="First service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className=" border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#191A23] rounded-3xl border-black">
          <div className="">
            <h1 className="text-left text-2xl font-medium bg-white text-black inline-block max-w-[200px] break-words">
              Pay-Per-Click Advertising
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="black"
                  />
                </svg>

                <p className="text-white">Learn More</p>
              </span>

              <Image
                src="/images/three.png"
                alt="third service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className=" border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#F3F3F3] rounded-3xl border-black">
          <div className="">
            <h1 className="text-left text-2xl font-medium bg-[#B9FF66] inline-block max-w-[200px] break-words">
              Email Marketing
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <p>Learn More</p>
              </span>

              <Image
                src="/images/four.png"
                alt="First service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className=" border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#B9FF66] rounded-3xl border-black">
          <div className="">
            <h1 className="text-left text-2xl font-medium bg-white text-black inline-block max-w-[200px] break-words">
              Content Creation
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <p>Learn More</p>
              </span>

              <Image
                src="/images/five.png"
                alt="Fifth service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className=" border-t-2 border-l-2 border-r-2 border-b-4 p-10 bg-[#191A23] rounded-3xl border-black">
          <div className="">
            <h1 className="text-left text-2xl font-medium bg-[#B9FF66] inline-block max-w-[200px] break-words">
              Analytics And Tracking
            </h1>
          </div>

          <div>
            <div className="flex justify-between flex-row flex-nowrap items-end  gap-24">
              <span className="flex items-center gap-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="black"
                  />
                </svg>

                <p className="text-white">Learn More</p>
              </span>

              <Image
                src="/images/six.png"
                alt="Last service"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
