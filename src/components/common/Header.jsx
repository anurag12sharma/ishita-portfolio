import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Design', path: '/', scrollTo: 'design' },
    { label: 'Research', path: '/', scrollTo: 'research' },
    { label: 'About', path: '/about' }
  ];

  const handleNavClick = (item, e) => {
    if (item.scrollTo) {
      e.preventDefault();
      
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation and then scroll
        setTimeout(() => {
          const element = document.getElementById(item.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      
      setMenuOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === '/about') {
      return location?.pathname === '/about';
    }
    return location?.pathname === '/';
  };

  return (
    <header className="w-full bg-header-background shadow-soft backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-[14px] mx-[22px]">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link to="/" className="transform transition-transform duration-300 hover:scale-105 inline-block">
              <img 
                src="/images/img_header_logo.png" 
                alt="Ishita Gupta Portfolio Logo" 
                className="w-[150px] h-[34px]"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[64px] animate-fade-in">
            {menuItems?.map((item, index) => (
              <div key={index} className="relative group">
                {item?.label === 'About' && isActive('/about') ? (
                  <div className="relative flex justify-center items-center">
                    <div className="absolute w-[60px] h-[16px] bg-accent-yellow rounded-full top-[9px] transition-all duration-300 group-hover:w-[70px]"></div>
                    <Link
                      to={item?.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className="relative z-10 text-md font-medium leading-md text-text-primary font-poppins transition-all duration-300 hover:tracking-wide"
                      role="menuitem"
                    >
                      {item?.label}
                    </Link>
                  </div>
                ) : (
                  <Link
                    to={item?.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className="text-md font-medium leading-md font-poppins text-text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-background after:transition-all after:duration-300 hover:after:w-full hover:text-primary-background transition-colors duration-300"
                    role="menuitem"
                  >
                    {item?.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className={`${menuOpen ? 'block animate-slide-up' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-header-background shadow-large z-50 backdrop-blur-md`}>
            <div className="flex flex-col py-4 px-6 space-y-4">
              {menuItems?.map((item, index) => (
                <div key={index} className="relative transform transition-all duration-300 hover:translate-x-2">
                  {item?.label === 'About' && isActive('/about') ? (
                    <div className="relative flex justify-start items-center">
                      <div className="absolute w-[60px] h-[16px] bg-accent-yellow rounded-full top-[7px] transition-all duration-300"></div>
                      <Link
                        to={item?.path}
                        onClick={(e) => handleNavClick(item, e)}
                        className="relative z-10 text-md font-medium leading-md text-text-primary font-poppins py-2"
                        role="menuitem"
                      >
                        {item?.label}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={item?.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className="block text-md font-medium leading-md font-poppins py-2 text-text-primary transition-colors duration-300 hover:text-primary-background"
                      role="menuitem"
                    >
                      {item?.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;