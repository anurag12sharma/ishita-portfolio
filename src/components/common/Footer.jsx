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
    <footer className="w-full bg-white border-t border-gray-200 mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Contact Section */}
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 bg-primary-background/10 rounded-lg transition-all duration-300 group-hover:bg-primary-background/20">
                <img 
                  src="/images/img_mingcute_mail_fill.svg" 
                  alt="Email icon" 
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-text-muted font-poppins">
                  Drop a message. I promise I am super nice!
                </p>
                <div className="flex items-center gap-2">
                  <a 
                    href="mailto:ms.ishitagupta@gmail.com"
                    className="text-base font-semibold text-primary-dark hover:text-primary-background transition-colors duration-300 font-poppins"
                  >
                    ms.ishitagupta@gmail.com
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Copy email address"
                  >
                    <img 
                      src="/images/img_si_copy_duotone.svg" 
                      alt="Copy email" 
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.href}
                  className="p-2.5 bg-gray-50 rounded-lg hover:bg-primary-background hover:shadow-md transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 group"
                  aria-label={link?.name}
                >
                  <img 
                    src={link?.src} 
                    alt={link?.name}
                    style={{ width: link?.width, height: link?.height }}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-sm text-text-secondary font-poppins">
              © 2025 Made with
            </span>
            <img 
              src="/images/img_typcn_heart.svg" 
              alt="Heart" 
              className="w-5 h-5 animate-pulse-slow"
            />
            <span className="text-sm text-text-secondary font-poppins">
              by Ishita
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;