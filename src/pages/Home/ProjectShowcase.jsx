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
      organizationColor: 'text-[#1A9B44]',
      description: 'End-to-end interactive design of a platform aimed at promoting sustainable choices',
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
      organizationColor: 'text-[#9E733C]',
      description: 'Redesign of the website user interface and user experience of the digital storytelling platform',
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
      organizationColor: 'text-[#814FFF]',
      description: 'Analysis of the transport system through a user experience lens and subsequent observations',
      buttonColor: 'bg-primary-background',
      chips: ['Self-initiated', 'User research'],
      alignment: 'left',
      route: '/delhi-metro'
    }
  ];

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
      image: '/images/rp-instaEffect.png',
      title: 'Impact of Social Media on Body Image Satisfaction',
      organization: 'IIIT-Delhi',
      description: 'My work at IIIT-Delhi, undertaken at the MIDAS Lab with guidance by Dr. Maitreyi Redkar of IIT-Bombay is under review at Springer Nature Scientific Reports. The study evaluates the real-time effect of social media interaction on body image satisfaction and eating habits of young adults. Check out the overview slides to read in detail about the study.',
      buttonColor: 'bg-secondary-dark',
      route: '/insta-effect'
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
    <div className="w-full bg-gradient-to-b from-background-card to-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Design Case Studies Section */}
        <section id="design" className="px-6 sm:px-8 lg:px-12 pt-20 lg:pt-24 pb-16 animate-fade-in">
          <div className="mb-16 lg:mb-20">
            <h2 className="flex items-center gap-4 text-[26px] font-medium font-poppins mb-3 animate-slide-in-left leading-[48px] h-[48px] tracking-normal -ml-8 lg:-ml-20">
              <span className="inline-block w-16 h-1 bg-primary-background mr-0 align-middle"></span>
              <span className="text-[#673fcc]">01 \</span>
              <span className="text-[#808080] block max-w-[380px] lg:max-w-[520px]">Design Case Studies</span>
            </h2>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {designProjects?.map((project, index) => (
              <div
                key={project?.id}
                className={`flex flex-col ${project?.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center group`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project Image */}
                <div className="relative w-full lg:flex-1 overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-large transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project?.image}
                      alt={project?.title}
                      className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Hover button */}
                  <div className={`absolute ${project?.alignment === 'right' ? 'bottom-6 left-6' : 'bottom-6 right-6'} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                    <Button
                      text="View Project"
                      text_font_size="text-sm"
                      text_color="text-white"
                      fill_background_color={project?.buttonColor}
                      padding="12px 24px"
                      layout_width="auto"
                      margin=""
                      position="relative"
                      variant="primary"
                      size="medium"
                      className="shadow-large hover:scale-105 active:scale-95 transition-transform duration-200"
                      onClick={() => project?.route && navigate(project.route)}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`flex flex-col gap-5 justify-center items-start w-full lg:w-[45%] ${project?.alignment === 'right' ? 'lg:items-end lg:text-right' : ''} px-2 lg:px-4 mt-12 lg:mt-38`}>
                  <div className="space-y-1">
                    <p className={`w-[575px] h-[36px] opacity-100 font-poppins text-[24px] font-medium leading-[100%] tracking-normal mb-6 ${project?.organizationColor ? project.organizationColor : 'text-[#1A9B44]'}`}>
                      {project?.organization}
                    </p>
                    <h3 className={`w-[577px] h-[36px] opacity-100 font-poppins font-medium text-[24px] leading-[100%] tracking-normal text-[#666666] ${project?.alignment === 'right' ? 'lg:text-right' : ''} transition-all duration-300`}>
                      {project?.title}
                    </h3>

                    {project?.description && (
                      <p className={`w-[577px] opacity-100 font-poppins font-normal text-[20px] tracking-normal text-[#666666] ${project?.title?.includes('Represent Bihar') || project?.title?.includes('Delhi Metro') ? 'mt-9' : 'mt-6'}`} style={{ lineHeight: '22px' }}>
                        {project.description}
                      </p>
                    )}
                  </div>

                  <ChipView
                    className={`flex flex-wrap gap-2.5 border-0 hover:shadow-none hover:border-0 hover:translate-y-0 hover:text-text-primary ${project?.alignment === 'right' ? 'lg:justify-end -mr-[3.5%]' : 'lg:justify-start -ml-[3.5%]'}`}
                    layout_width="auto"
                    position="relative"
                    variant="default"
                    size="medium"
                    onClick={() => { }}
                  >
                    {project?.chips?.map((chip, chipIndex) => (
                      <span
                        key={chipIndex}
                        className="text-sm font-medium text-text-primary font-poppins border border-text-primary rounded-md px-4 py-2 transition-all duration-300 hover:border-primary-background hover:text-primary-background hover:shadow-md hover:-translate-y-0.5 cursor-default"
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
        <section id="research" className="px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 animate-fade-in">
          <div className="mb-16 lg:mb-20">
            <h2 className="flex items-center gap-4 text-[26px] font-medium font-poppins mb-3 animate-slide-in-left leading-[48px] h-[48px] tracking-normal -ml-8 lg:-ml-20">
              <span className="inline-block w-16 h-1 bg-primary-background mr-0 align-middle"></span>
              <span className="text-[#673fcc]">02 \</span>
              <span className="text-[#808080] block max-w-[380px] lg:max-w-[520px]">Research Projects</span>
            </h2>
          </div>

          {/* Research Project Carousel */}
          <div className="relative px-0 lg:px-16">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrevResearch}
              className="absolute top-1/2 -translate-y-1/2 -left-4 lg:left-0 z-30 w-12 h-12 bg-white hover:bg-secondary-dark rounded-full shadow-medium hover:shadow-large transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-gray-200 hover:border-secondary-dark group"
              aria-label="Previous research project"
            >
              <svg
                className="w-6 h-6 text-secondary-dark group-hover:text-white transform -rotate-90 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={handleNextResearch}
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:right-0 z-30 w-12 h-12 bg-white hover:bg-secondary-dark rounded-full shadow-medium hover:shadow-large transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 border border-gray-200 hover:border-secondary-dark group"
              aria-label="Next research project"
            >
              <svg
                className="w-6 h-6 text-secondary-dark group-hover:text-white transform rotate-90 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 group border border-gray-100">
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
                        className="w-full flex-shrink-0 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-12"
                      >
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                          {/* Research Image */}
                          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl flex-shrink-0 bg-white shadow-soft">
                            <img
                              src={research.image}
                              alt={research.title}
                              className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>

                          {/* Research Details */}
                          <div className="flex flex-col gap-6 lg:gap-8 justify-center items-start w-full lg:w-1/2 flex-shrink-0">
                            <div className="space-y-4 w-full">
                              <p className="text-sm font-semibold tracking-wider text-primary-light font-poppins">
                                {research.organization}
                              </p>
                              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-text-primary font-montserrat transition-colors duration-300 group-hover:text-primary-background">
                                {research.title}
                              </h3>
                              <p className="text-base sm:text-lg leading-relaxed text-text-secondary font-poppins transition-colors duration-300">
                                {research.description}
                              </p>
                            </div>

                            {/* Read More Button */}
                            {research.route && (
                              <div className="pt-2">
                                <Button
                                  text="Read More"
                                  variant="secondary"
                                  size="small"
                                  className="shadow-medium hover:shadow-large"
                                  onClick={() => navigate(research.route)}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate first slide for infinite loop */}
                    <div
                      key={`${researchProjects[0].id}-duplicate`}
                      className="w-full flex-shrink-0 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-12"
                    >
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* Research Image */}
                        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl flex-shrink-0 bg-white shadow-soft">
                          <img
                            src={researchProjects[0].image}
                            alt={researchProjects[0].title}
                            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Research Details */}
                        <div className="flex flex-col gap-6 lg:gap-8 justify-center items-start w-full lg:w-1/2 flex-shrink-0">
                          <div className="space-y-4 w-full">
                            <p className="text-sm font-semibold tracking-wider text-primary-light font-poppins">
                              {researchProjects[0].organization}
                            </p>
                            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-text-primary font-montserrat transition-colors duration-300 group-hover:text-primary-background">
                              {researchProjects[0].title}
                            </h3>
                            <p className="text-base sm:text-lg leading-relaxed text-text-secondary font-poppins transition-colors duration-300">
                              {researchProjects[0].description}
                            </p>
                          </div>

                          {/* Read More Button */}
                          {researchProjects[0].route && (
                            <div className="pt-2">
                              <Button
                                text="Read More"
                                variant="secondary"
                                size="small"
                                className="shadow-medium hover:shadow-large"
                                onClick={() => navigate(researchProjects[0].route)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectShowcase;