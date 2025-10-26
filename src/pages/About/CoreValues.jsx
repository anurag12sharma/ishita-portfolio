import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Staying curious and asking the right questions",
      description: "My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published.",
      icon: "/images/img_streamline_plum.svg"
    },
    {
      title: "Challenging myself and choosing growth over comfort",
      description: "My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published.",
      icon: "/images/img_streamline_plum.svg"
    },
    {
      title: "Listening and empathising over assuming and speaking",
      description: "My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published.",
      icon: "/images/img_streamline_plum.svg"
    },
    {
      title: "Lastly, having fun through it all (obviously!)",
      description: "My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published.",
      icon: "/images/img_streamline_plum.svg"
    }
  ];

  return (
    <section className="w-full animate-fade-in">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-[70px] sm:mt-[100px] md:mt-[120px] lg:mt-[140px] mx-4 sm:mx-8 md:mx-16 lg:mx-[108px]">
          <div className="flex flex-col gap-[40px]">
            {/* Section Title */}
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-2xl font-medium leading-[30px] sm:leading-[33px] md:leading-[36px] lg:leading-4xl text-text-light font-poppins animate-slide-in-left">
              My core values that define me as a researcher and designer
            </h2>

            {/* Values List */}
            <div className="flex flex-col gap-[42px] sm:gap-[60px] md:gap-[70px] lg:gap-[84px] mr-0 sm:mr-8 md:mr-16 lg:mr-[134px]">
              {values?.map((value, index) => (
                <div key={index} className="flex flex-col w-full group animate-slide-up hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 cursor-default" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 w-full">
                    {/* Icon and Title Row */}
                    <div className="flex items-start gap-[10px] w-full">
                      <img 
                        src={value?.icon} 
                        alt="Value icon" 
                        className={`w-[38px] h-[38px] flex-shrink-0 ${index === 2 ? 'mt-[4px]' : 'mt-[6px] sm:mt-[4px]'} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                      />
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-medium leading-[24px] sm:leading-[27px] md:leading-[30px] lg:leading-xl text-primary-dark font-poppins flex-1 transition-colors duration-300 group-hover:text-primary-light">
                        {value?.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="ml-[48px] mt-2 sm:mt-1">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[24px] sm:leading-[27px] md:leading-[28px] lg:leading-lg text-text-light font-poppins w-full sm:w-[95%] md:w-[96%] transition-colors duration-300 group-hover:text-text-primary">
                      {value?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;