import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const DelhiMetroPage = () => {
  return (
    <>
      <Helmet>
        <title>Delhi Metro Accessibility Study - Ishita Gupta</title>
        <meta name="description" content="A comprehensive user research study assessing accessibility and commuter experience in Delhi Metro, focusing on improving public transportation design." />
        <meta property="og:title" content="Delhi Metro Accessibility Study - Ishita Gupta" />
        <meta property="og:description" content="A comprehensive user research study assessing accessibility and commuter experience in Delhi Metro, focusing on improving public transportation design." />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
            {/* Hero Section */}
            <section className="pt-[120px] pb-[60px] animate-fade-in">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] text-text-dark font-poppins mb-6 animate-slide-in-left">
                Delhi Metro: Assessing accessibility and commuter experience
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px]">
                  Self-initiated
                </span>
                <span className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px]">
                  User research
                </span>
              </div>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.6] text-[#4c4c4c] font-poppins mb-8">
                Independent Project
              </p>
            </section>

            {/* Project Image */}
            <section className="mb-[80px]">
              <div className="w-full overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/images/img_rectangle_1354.png" 
                  alt="Delhi Metro Study"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Project Overview */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Project Overview
              </h2>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins mb-4">
                This self-initiated research project explores the accessibility challenges and overall commuter experience 
                in the Delhi Metro system. Through comprehensive user research, I investigated how different user groups 
                navigate the metro, identifying pain points and opportunities for improvement.
              </p>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                The study focuses on understanding the needs of diverse commuters, including elderly passengers, 
                people with disabilities, and first-time users, to recommend design solutions that enhance 
                accessibility and improve the overall travel experience.
              </p>
            </section>

            {/* Research Goals */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Research Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Assess Accessibility
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Evaluate current accessibility features and identify barriers faced by users with different abilities.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Understand User Experience
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Document the end-to-end commuter journey to understand pain points and moments of delight.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Identify Design Opportunities
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Discover areas where design interventions could significantly improve the commuter experience.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Propose Solutions
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Develop evidence-based recommendations for enhancing accessibility and usability.
                  </p>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Methodology
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-background pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    User Interviews
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Conducted in-depth interviews with diverse commuters to understand their experiences, 
                    challenges, and needs while using the Delhi Metro.
                  </p>
                </div>
                <div className="border-l-4 border-primary-background pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    Observational Research
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Observed commuter behavior at various metro stations to identify patterns, 
                    pain points, and areas of confusion in the user journey.
                  </p>
                </div>
                <div className="border-l-4 border-primary-background pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    Accessibility Audit
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Evaluated existing accessibility features against best practices and universal 
                    design principles to identify gaps and opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Findings */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Key Findings
              </h2>
              <div className="bg-background-overlay p-8 rounded-lg shadow-medium">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary-background font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Wayfinding challenges for first-time users and elderly passengers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-background font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Limited accessibility features for passengers with mobility challenges
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-background font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Information overload at major interchange stations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-background font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Opportunities for digital wayfinding and real-time assistance
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Impact & Learnings */}
            <section className="mb-[120px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Impact & Learnings
              </h2>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins mb-4">
                This research project deepened my understanding of inclusive design and the importance of 
                conducting user research in real-world contexts. It highlighted how seemingly small design 
                decisions can significantly impact the daily experience of millions of commuters.
              </p>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                The findings from this study have informed my approach to designing for accessibility 
                and have reinforced the value of empathy-driven research in creating inclusive public 
                infrastructure and services.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DelhiMetroPage;
