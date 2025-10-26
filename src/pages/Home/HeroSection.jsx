import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-background-card animate-fade-in">
      <div className="w-full max-w-[1440px] mx-auto px-[6px] pt-[90px]">
        <div className="flex flex-col lg:flex-row justify-start items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-[46px] justify-start items-start w-full lg:w-[60%] px-4 lg:px-0 animate-slide-in-left">
            {/* Title with Background Elements */}
            <div className="relative w-full lg:w-[78%]">
              {/* Background decorative elements */}
              <div className="flex flex-col gap-[26px] justify-start items-start w-full mb-[14px]">
                <div className="w-full sm:w-[48%] h-[42px] bg-accent-yellow transition-all duration-500 hover:w-[52%] animate-slide-in-left"></div>
                <div className="w-full sm:w-[48%] h-[44px] bg-accent-purpleLight ml-0 sm:ml-[130px] transition-all duration-500 hover:w-[52%] animate-slide-in-right" style={{animationDelay: '0.2s'}}></div>
              </div>
              
              {/* Main Title */}
              <h1 className="text-[29px] sm:text-[40px] md:text-[50px] lg:text-[58px] font-semibold leading-[35px] sm:leading-[48px] md:leading-[60px] lg:leading-[70px] text-left text-text-primary font-montserrat w-full animate-slide-up" style={{animationDelay: '0.3s'}}>
                Human-Computer Interaction Researcher and Designer
              </h1>
            </div>

            {/* Description */}
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[25px] sm:leading-[28px] md:leading-[30px] text-left text-text-light font-poppins w-full lg:w-[84%] animate-slide-up" style={{animationDelay: '0.4s'}}>
              <span className="text-text-light">Hey, I am </span>
              <span className="text-[#6c3ce5] font-medium transition-all duration-300 hover:text-[#814eff]">Ishita Gupta</span>
              <span className="text-text-light">, a </span>
              <span className="text-[#6c3ce5] font-medium transition-all duration-300 hover:text-[#814eff]">self-taught</span>
              <span className="text-text-light">, independent researcher and designer who loves understanding people to inform </span>
              <span className="text-[#6c3ce5] font-medium transition-all duration-300 hover:text-[#814eff]">intuitive interactions</span>
              <span className="text-text-light"> and experiences with technology.</span>
            </p>
          </div>

          {/* Right Content - Image Stack */}
          <div className="relative w-full lg:w-[32%] mt-8 lg:mt-0 animate-slide-in-right" style={{animationDelay: '0.5s'}}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[558px]">
              {/* Main Profile Image */}
              <img 
                src="/images/img_rectangle_1322.png" 
                alt="Ishita Gupta - HCI Researcher and Designer" 
                className="w-full lg:w-[92%] h-[90%] object-cover rounded-lg shadow-medium transition-all duration-500 hover:shadow-hover hover:scale-105"
              />
              
              {/* Decorative Sunflower */}
              <img 
                src="/images/img_fxemoji_sunflower.svg" 
                alt="Decorative sunflower" 
                className="absolute bottom-0 right-0 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;