import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Google Scholar',
      src: '/images/img_academicons_google_scholar.svg',
      width: '30px',
      height: '40px',
      href: '#'
    },
    {
      name: 'Behance',
      src: '/images/img_ri_behance_line.svg',
      width: '42px',
      height: '42px',
      href: '#'
    },
    {
      name: 'LinkedIn',
      src: '/images/img_mdi_linkedin.svg',
      width: '40px',
      height: '40px',
      href: '#'
    },
    {
      name: 'Portfolio',
      src: '/images/img_group.png',
      width: '32px',
      height: '32px',
      href: '#'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('ms.ishitagupta@gmail.com');
  };

  return (
    <footer className="w-full bg-footer-background shadow-large rounded-t-[100px] animate-fade-in mt-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[42px] pt-[42px]">
          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[12px] w-full sm:w-auto justify-center group">
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src="/images/img_mingcute_mail_fill.svg" 
                alt="Email icon" 
                className="w-[58px] h-[50px]"
              />
            </div>
            <div className="flex flex-col items-start sm:items-center">
              <p className="text-xs font-normal leading-xs text-text-light font-poppins text-center sm:text-left transition-colors duration-300 group-hover:text-primary-background">
                Drop a message. I promise I am super nice!
              </p>
              <div className="flex items-center gap-2 mt-[-2px]">
                <span className="text-xl font-semibold leading-3xl text-text-secondary font-poppins transition-colors duration-300 group-hover:text-primary-dark">
                  ms.ishitagupta@gmail.com
                </span>
                <button 
                  onClick={handleCopyEmail}
                  className="hover:opacity-80 transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Copy email address"
                >
                  <img 
                    src="/images/img_si_copy_duotone.svg" 
                    alt="Copy email" 
                    className="w-[22px] h-[22px]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="w-full bg-accent-yellowLight shadow-hover rounded-lg p-2 transition-all duration-500 hover:shadow-large">
            <div className="flex flex-col gap-[56px] items-center py-[10px] px-4 sm:px-6 lg:px-8">
              {/* Footer Info and Social Links */}
              <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1364px] gap-6 lg:gap-0">
                {/* Left Side - Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-0 group">
                  <img 
                    src="/images/img_fluent_bow_tie_20_filled.svg" 
                    alt="Bow tie icon" 
                    className="w-[44px] h-[44px] flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  />
                  <p className="text-sm font-medium leading-sm text-text-muted font-poppins mt-0 sm:mt-1 ml-0 sm:ml-[10px] text-center sm:text-left transition-colors duration-300 group-hover:text-text-primary">
                    Let's chat about HCI, Design, Cinnamon Lattes, or The Office :)
                  </p>
                </div>

                {/* Right Side - Social Links */}
                <div className="flex items-center gap-4 sm:gap-6">
                  {socialLinks?.map((link, index) => (
                    <a
                      key={index}
                      href={link?.href}
                      className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-2 active:scale-95"
                      aria-label={link?.name}
                    >
                      <img 
                        src={link?.src} 
                        alt={link?.name}
                        className={`w-[${link?.width}] h-[${link?.height}]`}
                        style={{ width: link?.width, height: link?.height }}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-[6px] group cursor-default">
                <span className="text-sm font-normal leading-sm text-text-secondary font-poppins transition-colors duration-300 group-hover:text-text-primary">
                  @2025 Made with
                </span>
                <img 
                  src="/images/img_typcn_heart.svg" 
                  alt="Heart icon" 
                  className="w-[34px] h-[34px] animate-pulse-slow transition-transform duration-300 group-hover:scale-125"
                />
                <span className="text-sm font-normal leading-sm text-text-secondary font-poppins transition-colors duration-300 group-hover:text-text-primary">
                  by Ishita.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;