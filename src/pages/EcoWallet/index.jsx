import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const EcoWallet = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>EcoWallet Case Study | Ishita Gupta Portfolio</title>
        <meta name="description" content="EcoWallet case study - Making sustainability accessible through UX design. A mobile app project at Shiv Nadar University." />
      </Helmet>

      <div className="w-full bg-background-card min-h-screen">
        <Header />
        
        <main className="w-full">
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-b from-[#DAF5E8] to-[#F0FDF4] py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-accent-green hover:text-accent-greenText transition-colors duration-300 mb-8 group"
              >
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-poppins font-medium">Back to Home</span>
              </button>

              <div className="flex flex-col items-center text-center animate-slide-up">
                <div className="mb-6">
                  <img 
                    src="/images/eco_wallet_logo.png" 
                    alt="EcoWallet Logo" 
                    className="h-16 sm:h-20 w-auto mx-auto"
                  />
                </div>
                <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-text-primary font-montserrat mb-4">
                  EcoWallet
                </h1>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-accent-green font-poppins mb-6 max-w-3xl">
                  Making sustainability accessible and rewarding.<br />
                  Donate, shop green, and earn benefits.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-white rounded-full text-accent-green font-poppins font-medium shadow-soft">
                    Internship
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-accent-green font-poppins font-medium shadow-soft">
                    Mobile App
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-accent-green font-poppins font-medium shadow-soft">
                    UX Case Study
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="w-full py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-semibold text-accent-green font-poppins mb-4">Organization</h3>
                  <p className="text-lg text-text-light font-poppins">Shiv Nadar University</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-green font-poppins mb-4">My Role</h3>
                  <p className="text-lg text-text-light font-poppins">UX Designer & Researcher</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-green font-poppins mb-4">Duration</h3>
                  <p className="text-lg text-text-light font-poppins">3 months</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-green font-poppins mb-4">Tools</h3>
                  <p className="text-lg text-text-light font-poppins">Figma, User Research, Prototyping</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6 animate-slide-up">
                  Project Overview
                </h2>
                <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed mb-6 animate-slide-up">
                  EcoWallet is a mobile application designed to make sustainable living more accessible and rewarding. 
                  The app enables users to donate to environmental causes, shop for eco-friendly products, and earn 
                  benefits for their sustainable choices.
                </p>
                <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed animate-slide-up">
                  This project was undertaken during my internship at Shiv Nadar University, where I focused on 
                  understanding user behaviors around sustainability and creating an intuitive interface that 
                  encourages eco-conscious decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Main Images Placeholder */}
          <section className="w-full py-16 bg-gray-50 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-12 text-center">
                Design Showcase
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-hover transition-all duration-300 min-h-[400px] flex items-center justify-center">
                  <p className="text-text-muted font-poppins">App Screenshots Coming Soon</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-hover transition-all duration-300 min-h-[400px] flex items-center justify-center">
                  <p className="text-text-muted font-poppins">User Flow Diagrams Coming Soon</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="w-full py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6">
                The Challenge
              </h2>
              <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed mb-6">
                Many people want to live more sustainably but find it difficult to know where to start or how to 
                maintain eco-friendly habits. There's a need for a platform that not only makes sustainable options 
                accessible but also motivates users through rewards and community engagement.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="w-full py-16 bg-gradient-to-b from-[#F0FDF4] to-white animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6">
                The Solution
              </h2>
              <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed mb-8">
                EcoWallet provides a comprehensive platform where users can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Donate</h3>
                  <p className="text-text-light font-poppins">Support environmental causes and track your impact</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Shop Green</h3>
                  <p className="text-text-light font-poppins">Discover and purchase eco-friendly products</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Earn Rewards</h3>
                  <p className="text-text-light font-poppins">Get benefits for sustainable choices</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="w-full py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-8">
                Key Learnings
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">User-Centered Design</h3>
                    <p className="text-text-light font-poppins">Understanding user motivations and barriers was crucial in designing features that actually encourage sustainable behavior.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">Gamification</h3>
                    <p className="text-text-light font-poppins">Incorporating rewards and achievement systems significantly increased user engagement and retention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">Accessibility</h3>
                    <p className="text-text-light font-poppins">Making sustainable options easily accessible through clear navigation and intuitive design was key to the app's success.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EcoWallet;
