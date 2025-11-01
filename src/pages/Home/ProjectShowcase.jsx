import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const [currentResearchIndex, setCurrentResearchIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const designProjects = [
    {
      id: 1,
      image: '/images/img_rectangle_1356.png',
      title: 'EcoWallet: Making sustainability accessible',
      organization: 'Shiv Nadar University',
      organizationColor: 'text-accent-greenText',
      buttonColor: 'bg-accent-green',
      chips: ['Internship', 'Mobile App', 'UX Case Study'],
      alignment: 'left',
      route: '/ecowallet'
    },
    {
      id: 2,
      image: '/images/img_rectangle_1359.png',
      title: 'Represent Bihar: Redesigning the storytelling and listening experience',
      organization: 'Cornell Tech',
      organizationColor: 'text-accent-brown',
      buttonColor: 'bg-accent-brown',
      chips: ['Internship', 'Website', 'Redesign'],
      alignment: 'right',
      route: '/represent-bihar'
    },
    {
      id: 3,
      image: '/images/img_rectangle_1354.png',
      title: 'Delhi Metro: Assessing accessibility and commuter experience',
      organization: 'Independent Project',
      organizationColor: 'text-primary-light',
      buttonColor: 'bg-primary-background',
      chips: ['Self-initiated', 'User research'],
      alignment: 'left',
      route: '/delhi-metro'
    }
  ];

  const researchProject = {
    image: '/images/img_rectangle_1355.png',
    description: 'My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published in the proceedings of the ACM Conference on Fairness, Accountability, and Transparency, 2025. Check out the paper overview slides to know more.',
    buttonColor: 'bg-secondary-dark'
  };

  const researchProjects = [
    {
      id: 1,
      image: '/images/img_rectangle_1355.png',
      title: 'Gender Bias in Hindi Language LLMs',
      organization: 'Cornell Tech',
      description: 'My work at Cornell Tech on gender bias in Hindi language in LLM text generation was accepted and published in the proceedings of the ACM Conference on Fairness, Accountability, and Transparency, 2025.',
      buttonColor: 'bg-secondary-dark',
      route: '/gender-bias-research'
    },
    {
      id: 2,
      image: '/images/img_rectangle_1355.png',
      title: 'AI Ethics & Fairness in Multilingual Systems',
      organization: 'Cornell Tech',
      description: 'Research exploring the intersection of artificial intelligence, ethics, and linguistic diversity. Investigating how AI systems can be designed to serve diverse global communities with fairness and accountability.',
      buttonColor: 'bg-secondary-dark',
      route: null
    }
  ];

  // Auto-scroll functionality - infinite loop right to left
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResearchIndex((prevIndex) => prevIndex + 1);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentResearchIndex === researchProjects.length) {
      // Wait for transition to complete
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Use requestAnimationFrame to ensure transition is disabled before resetting
        requestAnimationFrame(() => {
          setCurrentResearchIndex(0);
          // Re-enable transition after a brief moment
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 700); // Match transition duration
      
      return () => clearTimeout(timer);
    }
  }, [currentResearchIndex, researchProjects.length]);

  const handlePrevResearch = () => {
    if (currentResearchIndex === 0) {
      setIsTransitioning(false);
      setCurrentResearchIndex(researchProjects.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentResearchIndex(researchProjects.length - 1);
      }, 50);
    } else {
      setCurrentResearchIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextResearch = () => {
    setCurrentResearchIndex((prevIndex) => prevIndex + 1);
  };

  const currentResearch = researchProjects[currentResearchIndex];

  return (
    <div className="w-full bg-background-card">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Design Case Studies Section */}
        <section id="design" className="px-4 sm:px-8 lg:px-[108px] pt-[216px] animate-fade-in">
          <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-[30px] sm:leading-[35px] md:leading-[39px] text-left text-text-light font-poppins mb-[66px] animate-slide-in-left">
            <span className="text-primary-background font-semibold">01\ </span>
            <span className="text-text-light">Design Case Studies</span>
          </h2>

          <div className="flex flex-col gap-[186px]">
            {designProjects?.map((project, index) => (
              <div key={project?.id} className={`flex flex-col ${project?.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-[50px] items-center group`}>
                {/* Project Image */}
                <div className="relative w-full lg:flex-1 overflow-hidden rounded-lg">
                  <img 
                    src={project?.image} 
                    alt={project?.title}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[474px] object-cover rounded-lg transition-all duration-500 group-hover:scale-110 shadow-medium group-hover:shadow-hover"
                  />
                  <div className={`absolute ${project?.alignment === 'right' ? 'bottom-6 left-6' : 'bottom-6 right-6'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <Button 
                      text="Read More"
                      text_font_size="text-xs"
                      text_color="text-text-bright"
                      fill_background_color={project?.buttonColor}
                      padding="10px 18px"
                      layout_width="auto"
                      margin=""
                      position="relative"
                      variant="primary"
                      size="medium"
                      className="shadow-large"
                      onClick={() => project?.route && navigate(project.route)}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`flex flex-col gap-3 justify-start items-start w-full lg:w-[44%] ${project?.alignment === 'right' ? 'lg:items-end lg:text-right' : ''} transition-all duration-500 group-hover:translate-x-2`}>
                  <h3 className={`text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[30px] sm:leading-[34px] md:leading-[36px] ${project?.organizationColor} font-poppins transition-all duration-300 group-hover:tracking-wide`}>
                    {project?.organization}
                  </h3>
                  
                  <h4 className={`text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[30px] sm:leading-[34px] md:leading-[36px] text-text-light font-poppins ${project?.alignment === 'right' ? 'lg:text-right' : ''} transition-all duration-300 group-hover:text-text-primary`}>
                    {project?.title}
                  </h4>

                  <ChipView 
                    className={`flex flex-wrap gap-3 ${project?.alignment === 'right' ? 'lg:justify-end' : 'lg:justify-start'} mt-3`}
                    layout_width="auto"
                    position="relative"
                    variant="default"
                    size="medium"
                    onClick={() => {}}
                  >
                    {project?.chips?.map((chip, chipIndex) => (
                      <span 
                        key={chipIndex}
                        className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px] transition-all duration-300 hover:bg-chip-border hover:text-white hover:scale-105 cursor-default"
                      >
                        {chip}
                      </span>
                    ))}
                  </ChipView>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Projects Section */}
        <section id="research" className="px-4 sm:px-8 lg:px-[108px] pt-[262px] pb-8 animate-fade-in">
          <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-[30px] sm:leading-[35px] md:leading-[39px] text-left text-text-light font-poppins mb-[54px] animate-slide-in-left">
            <span className="text-primary-background font-semibold">02\ </span>
            <span className="text-text-light">Research projects</span>
          </h2>

          {/* Research Project Carousel - Added padding for arrows */}
          <div className="relative px-0 lg:px-24">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrevResearch}
              className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-100 rounded-full shadow-medium hover:shadow-hover transition-colors duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Previous research project"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-dark transform -rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={handleNextResearch}
              className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-100 rounded-full shadow-medium hover:shadow-hover transition-colors duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Next research project"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-dark transform rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="w-full bg-background-overlay rounded-2xl shadow-medium hover:shadow-hover transition-shadow duration-500 group">
                <div className="relative overflow-hidden">
                  {/* Carousel wrapper with sliding effect */}
                  <div 
                    className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                    style={{ transform: `translateX(-${currentResearchIndex * 100}%)` }}
                  >
                    {/* Render all research projects */}
                    {researchProjects.map((research, index) => (
                      <div 
                        key={`${research.id}-${index}`}
                        className="w-full flex-shrink-0 py-[80px] sm:py-[100px] lg:py-[134px] px-4 sm:px-8 lg:px-[40px]"
                      >
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[46px] items-center">
                          {/* Research Image */}
                          <div className="w-full lg:w-[50%] overflow-hidden rounded-xl flex-shrink-0">
                            <img 
                              src={research.image} 
                              alt={research.title}
                              className="w-full h-[300px] sm:h-[400px] lg:h-[466px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          {/* Research Details */}
                          <div className="flex flex-col gap-8 lg:gap-[52px] justify-start items-start w-full lg:w-[50%] flex-shrink-0">
                            <div className="space-y-4 w-full">
                              <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold leading-[1.3] text-text-dark font-poppins transition-colors duration-300 group-hover:text-primary-background">
                                {research.title}
                              </h3>
                              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[1.4] text-primary-light font-poppins">
                                {research.organization}
                              </p>
                              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[28px] sm:leading-[30px] md:leading-[32px] text-left text-[#4c4c4c] font-poppins transition-colors duration-300 group-hover:text-text-primary">
                                {research.description}
                              </p>
                            </div>
                            
                            {/* Carousel Indicators and Button */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full">
                              {/* Carousel Indicators */}
                              <div className="flex gap-3 items-center">
                                {researchProjects.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setCurrentResearchIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                      idx === (currentResearchIndex % researchProjects.length)
                                        ? 'w-12 bg-secondary-dark' 
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to research project ${idx + 1}`}
                                  />
                                ))}
                              </div>

                              {/* Read More Button */}
                              {research.route && (
                                <Button 
                                  text="Read More"
                                  text_font_size="text-xs"
                                  text_color="text-text-white"
                                  fill_background_color={research.buttonColor}
                                  border_border_radius="rounded-2xl"
                                  padding="10px 20px"
                                  layout_width="auto"
                                  margin=""
                                  position="relative"
                                  variant="primary"
                                  size="medium"
                                  className="shadow-large hover:shadow-hover transition-colors duration-300 hover:scale-105 active:scale-95"
                                  onClick={() => navigate(research.route)}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate first slide for infinite loop */}
                    <div 
                      key={`${researchProjects[0].id}-duplicate`}
                      className="w-full flex-shrink-0 py-[80px] sm:py-[100px] lg:py-[134px] px-4 sm:px-8 lg:px-[40px]"
                    >
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[46px] items-center">
                        {/* Research Image */}
                        <div className="w-full lg:w-[50%] overflow-hidden rounded-xl flex-shrink-0">
                          <img 
                            src={researchProjects[0].image} 
                            alt={researchProjects[0].title}
                            className="w-full h-[300px] sm:h-[400px] lg:h-[466px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Research Details */}
                        <div className="flex flex-col gap-8 lg:gap-[52px] justify-start items-start w-full lg:w-[50%] flex-shrink-0">
                          <div className="space-y-4 w-full">
                            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold leading-[1.3] text-text-dark font-poppins transition-colors duration-300 group-hover:text-primary-background">
                              {researchProjects[0].title}
                            </h3>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[1.4] text-primary-light font-poppins">
                              {researchProjects[0].organization}
                            </p>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[28px] sm:leading-[30px] md:leading-[32px] text-left text-[#4c4c4c] font-poppins transition-colors duration-300 group-hover:text-text-primary">
                              {researchProjects[0].description}
                            </p>
                          </div>
                          
                          {/* Carousel Indicators and Button */}
                          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full">
                            {/* Carousel Indicators */}
                            <div className="flex gap-3 items-center">
                              {researchProjects.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentResearchIndex(idx)}
                                  className={`h-2 rounded-full transition-all duration-500 ${
                                    idx === 0
                                      ? 'w-12 bg-secondary-dark' 
                                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                                  }`}
                                  aria-label={`Go to research project ${idx + 1}`}
                                />
                              ))}
                            </div>

                            {/* Read More Button */}
                            {researchProjects[0].route && (
                              <Button 
                                text="Read More"
                                text_font_size="text-xs"
                                text_color="text-text-white"
                                fill_background_color={researchProjects[0].buttonColor}
                                border_border_radius="rounded-2xl"
                                padding="10px 20px"
                                layout_width="auto"
                                margin=""
                                position="relative"
                                variant="primary"
                                size="medium"
                                className="shadow-large hover:shadow-hover transition-colors duration-300 hover:scale-105 active:scale-95"
                                onClick={() => navigate(researchProjects[0].route)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Talk Section */}
        <section className="flex flex-col justify-start items-center w-full pt-[262px] animate-fade-in">
          <h2 className="text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-black leading-[80px] sm:leading-[110px] md:leading-[140px] lg:leading-[159px] text-left bg-gradient-to-r from-[#e4d9ff] via-[#d5c5ff] to-[#c2aaff] bg-clip-text text-transparent font-montserrat transition-all duration-500 hover:scale-105 cursor-default animate-pulse-slow">
            LET'S TALK
          </h2>
        </section>
      </div>
    </div>
  );
};

export default ProjectShowcase;