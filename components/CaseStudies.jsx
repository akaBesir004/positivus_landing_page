import React from "react";

const CaseStudies = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8">
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <h1 className="text-3xl   font-medium bg-[#B9FF66] max-w-fit p-2 ">
          Case Studies
        </h1>
        <p className="text-[16px] md:text-[18px] max-w-xl text-center md:text-left mb-8 md:mb-0">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-12 py-12  flex justify-around items-center bg-[#191A23] text-white mt-8 rounded-3xl flex-wrap lg:flex-nowrap gap-12">
        <div className="flex-1">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex just items-center cursor-pointer ">
            <p className="text-[#B9FF66] mt-2">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#B9FF66] mt-2"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block border-l border-white h-32"></div>

        {/* Mobitel */}
        <div className="block lg:hidden border-t border-white w-full "></div>

        <div className="flex-1">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.{" "}
          </p>
          <div className="flex just items-center cursor-pointer ">
            <p className="text-[#B9FF66] mt-2">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#B9FF66] mt-2"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block border-l border-white h-32"></div>

        {/* Mobitel */}
        <div className="block lg:hidden border-t border-white w-full "></div>

        <div className="flex-1">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.{" "}
          </p>
          <div className="flex just items-center cursor-pointer ">
            <p className="text-[#B9FF66] mt-2">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#B9FF66] mt-2"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
