import React, { useState } from 'react';
import Toast from '../ui/Toast';

const Footer = () => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard?.writeText('ms.ishitagupta@gmail.com');
      setToast({ show: true, message: 'Email copied to clipboard' });
    } catch (e) {
      setToast({ show: true, message: 'Could not copy email' });
    }
  };

  return (
    <footer className="w-full relative overflow-visible pt-72">
      {/* Background Text */}
      <h1
        className="select-none pointer-events-none text-center"
        style={{
          position: 'relative',
          top: '75%',
          left: '50%',
          width: 'min(786px, 90vw)',
          height: 'auto',
          opacity: 1,
          zIndex: 0,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 900,
          fontStyle: 'normal',
          fontSize: 'clamp(80px, 12vw, 130px)',
          lineHeight: '100%',
          letterSpacing: '0',
          transform: 'translate(-50%, -50%) rotate(0deg)',
          margin: 0,
          background: 'linear-gradient(134.82deg, #E4DAFF -9.23%, #D6C5FF 76.93%, #C3ABFF 162.76%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center'
        }}
      >
        LET'S TALK
      </h1>

      {/* Yellow Bottom Section */}
      <div className="bg-[#FFF6C3] w-full pb-8 relative mt-20">
        {/* Blurred top strip to visually merge the yellow section with the white card */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '28px',
            left: 0,
            right: 0,
            height: '72px',
            background: '#FFF6C3',
            filter: 'blur(18px)',
            WebkitFilter: 'blur(18px)',
            zIndex: 11,
            pointerEvents: 'none',
            borderTopLeftRadius: '2rem',
            borderTopRightRadius: '2rem',
            opacity: 0.95
          }}
        />
        {/* Floating White Card */}
        <div className="relative -top-16 sm:-top-24 w-full">  
          <div
            className="flex items-center justify-center bg-white rounded-[2rem] w-full p-8 sm:p-10 text-center relative z-10"
            style={{
              boxShadow: '0 -12px 24px rgba(0,0,0,0.08)',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: 'none',
              outline: 'none'
            }}
          >
            <div className="flex items-center gap-6">
              <img
                src="/images/img_mingcute_mail_fill.svg"
                alt="Mail"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />

              <div className="flex flex-col items-start gap-1">
                <p
                  className="font-poppins"
                  style={{
                    width: '360px',
                    height: '38px',
                    opacity: 1,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '38px',
                    marginBottom: '0px',
                    // 2% of 16px ≈ 0.32px
                    letterSpacing: '0.32px',
                    color: '#666666'
                  }}
                >
                  Drop a message. I promise I am super nice!
                </p>

                <div className="flex items-center gap-2">
                  <a
                    href="mailto:ms.ishitagupta@gmail.com"
                    className="font-poppins transition-colors"
                    style={{
                      display: 'inline-block',
                      width: '344px',
                      height: '36px',
                      opacity: 1,
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#4C4C4C',
                      textDecoration: 'none'
                    }}
                  >
                    ms.ishitagupta@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 hover:bg-gray-100 rounded-full transition-all group"
                    aria-label="Copy email"
                    style={{ marginTop: '-6px' }}
                  >
                    <img
                      src="/images/img_si_copy_duotone.svg"
                      alt="Copy"
                      className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8 -mt-8">
          {/* Left: Bow + Text */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <img
                  src="/images/img_fluent_bow_tie_20_filled.svg"
                  alt="Bow"
                  className="w-full h-full text-[#FF69B4] filter"
                  style={{ filter: 'invert(59%) sepia(94%) saturate(348%) hue-rotate(296deg) brightness(94%) contrast(99%)' }}
                />
              </div>
              <p
                className="font-poppins"
                style={{
                  display: 'inline-block',
                  width: '833px',
                  height: '45px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '19px',
                  lineHeight: '41px',
                  // 1% of 19px ≈ 0.19px
                  letterSpacing: '0.19px',
                  color: '#656565'
                }}
              >
                Let's chat about HCI, Design, Cinnamon Lattes, or The Office :)
              </p>
            </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://scholar.google.com/citations?hl=en&user=f9tIxwcAAAAJ&view_op=list_works&gmla=AElLoL2B6rnhopUEXunJEYlLI8yjVvTiWFNetu6uZu1GeGgzwuz1gvkKfmBVV32Djv9tiyvgk3sJnp27x9eKyxB5" className="hover:scale-110 transition-transform" target='_blank'>
              <img src="/images/img_academicons_google_scholar.svg" alt="Google Scholar" className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/ishita-gupta-a05083212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:scale-110 transition-transform" target='_blank'>
              <img src="/images/img_mdi_linkedin.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 hover:opacity-100" />
            </a>
            <a href="https://www.instagram.com/_i.s.h.i.t.a_15?igsh=MWV6aGxuODVvZTE3&utm_source=qr" target='_blank' className="hover:scale-110 transition-transform">
              <img src="/images/ig.svg" alt="" className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 hover:opacity-100"/>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <div
            className="font-poppins"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: 'auto',
              height: '41px',
              whiteSpace: 'nowrap',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '19px',
              lineHeight: '41px',
              // 1% of 19px ≈ 0.19px
              letterSpacing: '0.19px',
              color: '#4C4C4C'
            }}
          >
            <span>© 2025-Made with</span>
            <img src="/images/img_typcn_heart.svg" alt="Heart" className="w-4 h-4" />
            <span>by Ishita.</span>
          </div>
        </div>
      </div>
      <Toast show={toast.show} message={toast.message} onClose={() => setToast({ show: false, message: '' })} />
    </footer>
  );
};

export default Footer;