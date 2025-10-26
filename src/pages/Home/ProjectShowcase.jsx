import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';

const ProjectShowcase = () => {
  const navigate = useNavigate();

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
        <section id="research" className="px-4 sm:px-8 lg:px-[108px] pt-[262px] animate-fade-in">
          <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-[30px] sm:leading-[35px] md:leading-[39px] text-left text-text-light font-poppins mb-[54px] animate-slide-in-left">
            <span className="text-primary-background font-semibold">02\ </span>
            <span className="text-text-light">Research projects</span>
          </h2>

          {/* Research Project Card */}
          <div className="w-full bg-background-overlay rounded-2xl shadow-medium hover:shadow-hover transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[46px] items-center py-[134px] px-4 sm:px-8 lg:px-[40px]">
              {/* Research Image */}
              <div className="w-full lg:w-[50%] overflow-hidden rounded-xl">
                <img 
                  src={researchProject?.image} 
                  alt="ACM Conference Research Paper"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[466px] object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Research Details */}
              <div className="flex flex-col gap-[52px] justify-start items-start w-full lg:w-[46%] transition-all duration-500 group-hover:translate-x-2">
                <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[28px] sm:leading-[32px] md:leading-[34px] text-left text-[#4c4c4c] font-poppins w-full lg:w-[96%] transition-all duration-300 group-hover:text-text-primary">
                  {researchProject?.description}
                </p>
                
                <Button 
                  text="Read More"
                  text_font_size="text-xs"
                  text_color="text-text-white"
                  fill_background_color={researchProject?.buttonColor}
                  border_border_radius="rounded-2xl"
                  padding="10px 16px"
                  layout_width="auto"
                  margin=""
                  position="relative"
                  variant="primary"
                  size="medium"
                  className="shadow-medium"
                  onClick={() => navigate('/gender-bias-research')}
                />
              </div>

              {/* Arrow Icon */}
              <div className="hidden lg:flex justify-start items-end w-auto transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110">
                <img 
                  src="/images/img_vector.svg" 
                  alt="Arrow indicator" 
                  className="w-[44px] h-[44px]"
                />
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