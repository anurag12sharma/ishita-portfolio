import React from 'react';

const PersonalIntro = () => {
  const illustrations = [
    { src: "/images/about-01.svg", alt: "Character illustration 1" },
    { src: "/images/about-02.svg", alt: "Character illustration 2" },
    { src: "/images/about-03.svg", alt: "Character illustration 3" },
    { src: "/images/about-04.svg", alt: "Character illustration 4" },
    { src: "/images/about-05.svg", alt: "Character illustration 5" }
  ];

  return (
    <section className="w-full animate-fade-in relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]">
          {/* Hero Title Section */}
          <div className="flex flex-col items-center w-full max-w-3xl mb-[20px] sm:mb-[25px] md:mb-[30px] lg:mb-[35px]">

            {/* Main heading with enhanced design */}
            <div className="relative flex justify-center items-center w-full mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* Multiple decorative elements */}
              <div className="absolute w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[28px] sm:h-[38px] md:h-[44px] lg:h-[50px] bg-gradient-to-r from-purple-200 to-pink-200 rounded-full top-[8px] sm:top-[10px] md:top-[12px] lg:top-[14px] right-[170px] sm:right-[170px] md:right-[230px] lg:right-[200px] transition-all duration-500 hover:scale-110 blur-sm"></div>
              <div className="absolute w-[90px] sm:w-[130px] md:w-[150px] lg:w-[170px] h-[24px] sm:h-[34px] md:h-[40px] lg:h-[46px] bg-accent-purpleLight rounded-full top-[6px] sm:top-[8px] md:top-[10px] lg:top-[12px] right-[12px] sm:right-[22px] md:right-[27px] lg:right-[32px] transition-all duration-300 hover:scale-110"></div>

              <h1 className="relative z-10 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[42px] sm:leading-[56px] md:leading-[64px] lg:leading-[72px] text-text-primary font-montserrat text-center">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Who's </span>
                <span className="italic bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">ishita</span>
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">?</span>
              </h1>
            </div>

            {/* Subtitle with better styling */}
            <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] font-normal leading-[26px] sm:leading-[29px] md:leading-[32px] lg:leading-[34px] text-text-light font-poppins text-center mb-3 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I am so excited you want to know more about me! Let's dive into my journey.
            </p>

            {/* Enhanced CTA button */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-medium hover:shadow-hover transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative text-[16px] sm:text-[17px] md:text-[18px] font-poppins">
                  View my resume
                </span>
                <svg
                  className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enhanced Illustration Gallery */}
          <div className="w-full mb-[60px] sm:mb-[80px] md:mb-[100px] lg:mb-[120px] animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Section label */}
            <div className="text-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Scrolling gallery with enhanced styling */}
            <div className="relative">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

              <div className="overflow-hidden rounded-2xl">
                <div className="flex gap-6 animate-scroll hover:animation-play-state-paused">
                  {/* First set */}
                  <div className="flex gap-6 flex-shrink-0">
                    {illustrations.map((img, index) => (
                      <div
                        key={`first-${index}`}
                        className="group relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] rounded-2xl overflow-hidden shadow-medium hover:shadow-hover transition-all duration-500 hover:scale-105 cursor-pointer bg-white"
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                        {/* Image */}
                        <div className="relative h-[320px] sm:h-[340px] md:h-[360px] overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-6 flex-shrink-0">
                    {illustrations.map((img, index) => (
                      <div
                        key={`second-${index}`}
                        className="group relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] rounded-2xl overflow-hidden shadow-medium hover:shadow-hover transition-all duration-500 hover:scale-105 cursor-pointer bg-white"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                        <div className="relative h-[320px] sm:h-[340px] md:h-[360px] overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[84%] px-4 sm:px-0">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[27px] sm:leading-[30px] md:leading-[33px] lg:leading-3xl text-text-light font-[Poppins] text-left">
              <span>Hey, I am Ishita Gupta,</span>
              <span> a </span>
              <span>researcher and </span>
              <span>a self-taught </span>
              <span>designer who loves understanding people to </span>
              <span>evaluate and </span>
              <span>inform intuitive interactions and experiences with technology. </span>
              <span>I primarily work in the domain of Human-Computer Interaction, although lately I have been thoroughly enjoying exploring a more focused area of Human-AI Interactions. I have been diving into studying bias in Gen AI and working on building a taxonomy and auditing framework.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;