import React from 'react';

const PersonalIntro = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-[69px] sm:mt-[100px] md:mt-[120px] lg:mt-[138px]">
          {/* Hero Title Section */}
          <div className="flex flex-col items-center w-full sm:w-[90%] md:w-[70%] lg:w-[38%] mb-[47px] sm:mb-[70px] md:mb-[80px] lg:mb-[94px]">
            <div className="relative flex justify-center items-center w-full mb-4 sm:mb-6 md:mb-4 lg:mb-4">
              <div className="absolute w-[82px] sm:w-[120px] md:w-[140px] lg:w-[164px] h-[22px] sm:h-[32px] md:h-[38px] lg:h-[44px] bg-accent-purpleLight rounded-full top-[5px] sm:top-[7px] md:top-[8px] lg:top-[10px] right-[18px] sm:right-[26px] md:right-[30px] lg:right-[36px]"></div>
              <h1 className="relative z-10 text-[29px] sm:text-[40px] md:text-[50px] lg:text-3xl font-semibold leading-[35px] sm:leading-[48px] md:leading-[60px] lg:leading-6xl text-text-primary font-[Montserrat] text-center">
                <span>Who's </span>
                <span className="italic">ishita?</span>
              </h1>
            </div>
            
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] lg:leading-xl text-text-light font-[Poppins] text-center mb-[20px] sm:mb-[30px] md:mb-[35px] lg:mb-[40px]">
              I am so excited you want to know more about me!
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] lg:leading-xl text-primary-light font-[Poppins] underline">
                View my resume
              </span>
              <img 
                src="/images/img_ic_round_download.svg" 
                alt="Download resume" 
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>

          {/* Illustration Gallery */}
          <div className="w-full overflow-x-auto mb-[45px] sm:mb-[65px] md:mb-[80px] lg:mb-[90px]">
            <div className="flex gap-[24px] min-w-max px-4 sm:px-0">
              {/* Illustration 1 */}
              <div className="flex-shrink-0 w-[184px] bg-background-accent rounded-sm shadow-[2px_4px_10px_#6666661e] overflow-hidden">
                <div className="pt-[30px] flex justify-center">
                  <img 
                    src="/images/img_svg_4.png" 
                    alt="Character illustration 1" 
                    className="w-[184px] h-[268px] object-cover"
                  />
                </div>
              </div>

              {/* Illustration 2 */}
              <div className="flex-shrink-0 bg-secondary-background rounded-sm shadow-[2px_4px_10px_#6666661e] overflow-hidden">
                <img 
                  src="/images/img_svg_9.png" 
                  alt="Character illustration 2" 
                  className="w-[324px] h-[300px] object-cover rounded-sm"
                />
              </div>

              {/* Illustration 3 */}
              <div className="flex-shrink-0 bg-secondary-background rounded-sm shadow-[2px_4px_10px_#6666661e] overflow-hidden">
                <img 
                  src="/images/img_svg_8.png" 
                  alt="Character illustration 3" 
                  className="w-[324px] h-[300px] object-cover rounded-sm"
                />
              </div>

              {/* Illustration 4 - Complex Stack */}
              <div className="flex-shrink-0 relative w-[324px] h-[300px] bg-secondary-background rounded-sm shadow-[2px_4px_10px_#6666661e] overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-center items-center px-[58px]">
                  <div className="relative w-full h-full flex flex-col justify-center items-center">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/images/img_group_black_900_237x194.svg')" }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center gap-[60px] mt-[44px]">
                      <img 
                        src="/images/img_group_black_900.svg" 
                        alt="Design element" 
                        className="w-[64px] h-[40px] ml-[32px]"
                      />
                      <img 
                        src="/images/img_group_gray_200.svg" 
                        alt="Design pattern" 
                        className="w-[140px] h-[88px]"
                      />
                    </div>
                    <img 
                      src="/images/img_group_black_900_6x142.svg" 
                      alt="Design line" 
                      className="absolute bottom-[6px] w-[142px] h-[6px]"
                    />
                  </div>
                  <img 
                    src="/images/img_laptop_1_1.png" 
                    alt="Laptop illustration" 
                    className="absolute bottom-[110px] w-[154px] h-[110px]"
                  />
                </div>
              </div>

              {/* Illustration 5 */}
              <div className="flex-shrink-0 w-[264px] bg-secondary-background rounded-sm shadow-[2px_4px_10px_#6666661e] overflow-hidden">
                <div className="pt-[50px] flex justify-center">
                  <img 
                    src="/images/img_group_1343.png" 
                    alt="Character illustration 5" 
                    className="w-[106px] h-[248px] object-cover"
                  />
                </div>
              </div>

              {/* Illustration 6 */}
              <div className="flex-shrink-0 bg-secondary-background rounded-sm shadow-[2px_4px_10px_#66666614] overflow-hidden">
                <img 
                  src="/images/img_group_1338.png" 
                  alt="Character illustration 6" 
                  className="w-[324px] h-[300px] object-cover rounded-sm"
                />
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