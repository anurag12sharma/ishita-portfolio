import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Scroll to footer or open email
    window.location.href = 'mailto:your-email@example.com';
  };

  return (
    <section className="w-full animate-fade-in">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mt-[302px] sm:mt-[450px] md:mt-[550px] lg:mt-[604px] mb-[100px] sm:mb-[150px] md:mb-[180px] lg:mb-[200px]">
          <div className="text-center">
            <h2 
              onClick={handleContactClick}
              className="text-[65px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-black leading-[80px] sm:leading-[110px] md:leading-[135px] lg:leading-[159px] text-transparent bg-gradient-to-r from-[#e4d9ff] via-[#d5c5ff] to-[#c2aaff] bg-clip-text font-montserrat text-center transition-all duration-500 hover:scale-110 cursor-pointer animate-pulse-slow"
              style={{
                background: 'linear-gradient(177deg, #e4d9ff 0%, #d5c5ff 50%, #c2aaff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              LET'S TALK
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-lg font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] lg:leading-xl text-text-light font-poppins mt-6 opacity-0 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              I'd love to hear from you! Let's discuss ideas, projects, or opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;