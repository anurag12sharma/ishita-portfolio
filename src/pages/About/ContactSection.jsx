import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full animate-fade-in">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mt-[302px] sm:mt-[450px] md:mt-[550px] lg:mt-[604px]">
          <h2 
            className="text-[65px] sm:text-[90px] md:text-[110px] lg:text-4xl font-black leading-[80px] sm:leading-[110px] md:leading-[135px] lg:leading-7xl text-transparent bg-gradient-to-r from-[#e4d9ff] via-[#d5c5ff] to-[#c2aaff] bg-clip-text font-montserrat text-center transition-all duration-500 hover:scale-105 cursor-default animate-pulse-slow"
            style={{
              background: 'linear-gradient(177deg, #e4d9ff 0%, #d5c5ff 50%, #c2aaff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            LET'S TALK
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;