import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/governor.png')] bg-cover">
      {/* Overlay Background */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      {/* Main Container */}
      <div className="z-40 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
        {/* Text Section */}
        <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
          <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 text-[#044e83] tracking-wider sm:text-4xl md:text-left lg:text-5xl">
            Governor Sindh
          </h1>
          <h2 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] text-[#044e83] tracking-wider sm:text-3xl md:text-left lg:text-4xl">
            Kamran Khan Tessori
          </h2>
          <h3 className="mt-5 whitespace-nowrap text-center text-[#56b9f3] text-[1.25rem] font-extrabold leading-[1.75rem] tracking-wider sm:text-2xl md:text-left lg:text-3xl">
            Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)
          </h3>
          <p className="my-5 text-center text-[1.1rem] font-extrabold text-[#044e83] sm:text-xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 w-full text-center text-[1.1rem] font-bold text-[#044e83] tracking-wider sm:text-xl md:w-[80%] md:text-left">
            Now admissions are open in Hyderabad
          </p>

          {/* Call to Action */}
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
            <a href="/apply" className="w-full md:w-auto">
              <button className="w-[150px] p-3 text-xl font-bold text-white rounded-lg bg-[#044e83] transition duration-200 ease-out hover:scale-105">
                Apply Now
              </button>
            </a>
            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
              <div className="flex-col text-center text-xl tracking-widest sm:text-2xl">
                <div className="w-40 font-extrabold text-[#044e83]">562,143</div>
              </div>
              <div className="text-xs text-center text-[#044e83] tracking-wider sm:text-sm">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-6 flex w-full items-end justify-center md:justify-end">
          <img
            src="/kamran.png"
            alt="Governor Kamran Khan Tessori"
            loading="lazy"
            className="h-auto max-w-[80%] md:max-w-[60%] lg:max-w-[80%]"
            style={{ color: 'transparent' }}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
