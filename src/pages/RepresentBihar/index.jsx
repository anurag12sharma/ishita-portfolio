import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const RepresentBihar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Represent Bihar Case Study | Ishita Gupta Portfolio</title>
        <meta name="description" content="Represent Bihar case study - Redesigning the storytelling and listening experience. A website redesign project at Cornell Tech." />
      </Helmet>

      <div className="w-full bg-background-card min-h-screen">
        <Header />
        
        <main className="w-full">
          {/* Hero Section */}
          <section className="w-full bg-gradient-to-b from-[#FFF4E6] to-[#FFF9F0] py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-accent-brown hover:opacity-80 transition-all duration-300 mb-8 group"
              >
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-poppins font-medium">Back to Home</span>
              </button>

              <div className="flex flex-col items-center text-center animate-slide-up">
                <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-text-primary font-montserrat mb-4">
                  Represent Bihar
                </h1>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-accent-brown font-poppins mb-6 max-w-3xl">
                  Redesigning the storytelling and listening experience for authentic voices from Bihar
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-white rounded-full text-accent-brown font-poppins font-medium shadow-soft">
                    Internship
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-accent-brown font-poppins font-medium shadow-soft">
                    Website
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-accent-brown font-poppins font-medium shadow-soft">
                    Redesign
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
                  <h3 className="text-xl font-semibold text-accent-brown font-poppins mb-4">Organization</h3>
                  <p className="text-lg text-text-light font-poppins">Cornell Tech</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-brown font-poppins mb-4">My Role</h3>
                  <p className="text-lg text-text-light font-poppins">UX Designer & Researcher</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-brown font-poppins mb-4">Duration</h3>
                  <p className="text-lg text-text-light font-poppins">4 months</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-brown font-poppins mb-4">Tools</h3>
                  <p className="text-lg text-text-light font-poppins">Figma, User Research, A/B Testing, Webflow</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6 animate-slide-up">
                  Project Overview
                </h2>
                <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed mb-6 animate-slide-up">
                  Represent Bihar is a platform dedicated to amplifying authentic voices and stories from Bihar, India. 
                  The project focused on redesigning the website to create a more engaging and accessible experience 
                  for both storytellers and listeners.
                </p>
                <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed animate-slide-up">
                  During my internship at Cornell Tech, I worked on reimagining how stories are shared and consumed, 
                  ensuring that the cultural richness and diversity of Bihar are represented with authenticity and respect.
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
                  <p className="text-text-muted font-poppins">Website Mockups Coming Soon</p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-hover transition-all duration-300 min-h-[400px] flex items-center justify-center">
                  <p className="text-text-muted font-poppins">User Interface Designs Coming Soon</p>
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
                The original platform had accessibility and engagement challenges. Users found it difficult to discover 
                relevant stories, and the storytelling interface didn't effectively capture the emotional depth and 
                cultural context of the narratives. There was a need to create a more intuitive and immersive experience 
                that honors the voices being shared.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="w-full py-16 bg-gradient-to-b from-[#FFF9F0] to-white animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6">
                The Solution
              </h2>
              <p className="text-[18px] sm:text-[20px] text-text-light font-poppins leading-relaxed mb-8">
                The redesigned platform focuses on three core pillars:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-brown rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Story Discovery</h3>
                  <p className="text-text-light font-poppins">Intuitive navigation and categorization for easy story exploration</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-brown rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Immersive Experience</h3>
                  <p className="text-text-light font-poppins">Rich multimedia integration for engaging storytelling</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent-brown rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Community Building</h3>
                  <p className="text-text-light font-poppins">Features that connect storytellers and listeners</p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="w-full py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-8">
                Design Process
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-accent-brown pl-6">
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Research & Discovery</h3>
                  <p className="text-text-light font-poppins">Conducted user interviews and analyzed usage patterns to understand both storyteller and listener needs.</p>
                </div>
                <div className="border-l-4 border-accent-brown pl-6">
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Ideation & Wireframing</h3>
                  <p className="text-text-light font-poppins">Created multiple design iterations focusing on accessibility and cultural sensitivity.</p>
                </div>
                <div className="border-l-4 border-accent-brown pl-6">
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Prototyping & Testing</h3>
                  <p className="text-text-light font-poppins">Developed interactive prototypes and conducted A/B testing to validate design decisions.</p>
                </div>
                <div className="border-l-4 border-accent-brown pl-6">
                  <h3 className="text-xl font-semibold text-text-primary font-poppins mb-3">Implementation</h3>
                  <p className="text-text-light font-poppins">Collaborated with developers to ensure faithful implementation of the design vision.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="w-full py-16 bg-gray-50 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-8">
                Key Learnings
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-brown rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">Cultural Sensitivity</h3>
                    <p className="text-text-light font-poppins">Designing for diverse cultural contexts requires deep empathy and continuous collaboration with community members.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-brown rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">Accessibility First</h3>
                    <p className="text-text-light font-poppins">Ensuring the platform is accessible to users with varying digital literacy levels was paramount to the project's success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-brown rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">Iterative Design</h3>
                    <p className="text-text-light font-poppins">Regular feedback loops with users and stakeholders led to significant improvements in the final design.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="w-full py-16 sm:py-24 animate-fade-in">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-text-primary font-montserrat mb-6">
                Impact & Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-[48px] font-bold text-accent-brown font-montserrat mb-2">40%</div>
                  <p className="text-text-light font-poppins">Increase in user engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-[48px] font-bold text-accent-brown font-montserrat mb-2">60%</div>
                  <p className="text-text-light font-poppins">Improved story discovery</p>
                </div>
                <div className="text-center">
                  <div className="text-[48px] font-bold text-accent-brown font-montserrat mb-2">2x</div>
                  <p className="text-text-light font-poppins">Growth in storyteller submissions</p>
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

export default RepresentBihar;
