import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-background-card animate-fade-in flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-7 justify-center items-start w-full lg:w-auto lg:max-w-[700px] animate-slide-in-left lg:-ml-16 lg:-mt-24">
            {/* Title with Background Elements */}
            <div className="relative w-full">
              {/* Background decorative elements */}
              <div className="absolute -top-10 left-0 flex flex-col gap-4 w-full pointer-events-none">
                <div className="w-[40%] max-w-[160px] h-7 bg-accent-yellow rounded-sm opacity-90 transition-all duration-500 hover:opacity-100 animate-slide-in-left"></div>
                <div className="w-[40%] max-w-[160px] h-7 bg-accent-purpleLight rounded-sm opacity-90 ml-16 sm:ml-20 transition-all duration-500 hover:opacity-100 animate-slide-in-right" style={{animationDelay: '0.2s'}}></div>
              </div>
              
              {/* Main Title */}
              <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-relaxed lg:leading-[1.4] text-text-primary font-montserrat animate-slide-up tracking-tight" style={{animationDelay: '0.3s', textShadow: '0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)'}}>
                Human-Computer<br/>
                <span style={{whiteSpace: 'nowrap'}}>
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-[25%] top-[20%] bg-[#FFE37F] -skew-y-1 -z-10 opacity-80"></span>
                    <span className="relative">Interaction</span>
                  </span> Researcher
                </span><br/>
                and <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-[25%] top-[20%] bg-[#CDB9FF] -skew-y-1 -z-10 opacity-80"></span>
                  <span className="relative">Designer</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-text-light font-poppins animate-slide-up max-w-full lg:max-w-[850px]" style={{animationDelay: '0.4s'}}>
              <span className="text-gray-600">Hey, I am </span>
              <span className="text-[#6c3ce5] font-semibold transition-all duration-300 hover:text-[#814eff] cursor-default">Ishita Gupta</span>
              <span className="text-gray-600">, a </span>
              <span className="text-[#6c3ce5] font-semibold transition-all duration-300 hover:text-[#814eff] cursor-default">self-taught</span>
              <span className="text-gray-600">, independent researcher and designer who loves understanding people to inform </span>
              <span className="text-[#6c3ce5] font-semibold transition-all duration-300 hover:text-[#814eff] cursor-default">intuitive interactions</span>
              <span className="text-gray-600"> and experiences with technology.</span>
            </p>
          </div>

          {/* Right Content - Image Stack */}
          <div className="relative w-full lg:w-[40%] max-w-sm lg:max-w-none animate-slide-in-right lg:-mt-32 lg:ml-16" style={{animationDelay: '0.5s'}}>
            <div className="relative w-[434px] h-[540px] max-w-full mx-auto lg:mx-0">
              {/* Main Profile Image */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-large group">
                <img 
                  src="/images/profilePic.png" 
                  alt="Ishita Gupta - HCI Researcher and Designer" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 scale-105 block"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Sunflower */}
              <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 animate-bounce-slow drop-shadow-lg z-10">
                <img 
                  src="/images/img_fxemoji_sunflower.svg" 
                  alt="Decorative sunflower" 
                  className="w-full h-full object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;