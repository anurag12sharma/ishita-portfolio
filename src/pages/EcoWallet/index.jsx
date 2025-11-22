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

      <div className="w-full bg-white min-h-screen">
        <Header />
        
        <main className="flex-grow eco-section">
          {/* Slide 1 - Title Slide */}
          {/* Heading and Description */}
          <section className="min-h-screen relative flex items-start justify-center px-6 sm:px-12 pt-16" style={{ backgroundColor: '#D5FFE1' }}>
            <div className="max-w-6xl w-full h-full flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 justify-center -mt-16">
                  <img src="/images/eco-icon.svg" alt="" className='scale-50 -mr-6' />
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-montserrat" style={{ color: '#3C3C3C' }}>
                    EcoWallet
                  </h1>
                </div>

                <div
                  className="-mt-12 ml-12"
                  style={{
                    width: '1856px',
                    height: '139px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: '24px',
                    fontStyle: 'normal',
                    letterSpacing: '0.03em',
                    textAlign: 'center',
                    color: 'rgba(60,60,60,0.6)',
                    lineHeight: '1.1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ margin: 0 }}>Making sustainability accessible and rewarding.</p>
                  <p style={{ margin: 0 }}>Donate, shop green, and earn benefits.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 justify-center pb-12 mx-auto">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/eco-01.png" alt="" className="w-52 sm:w-80" />
                  </div>
                
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/eco-02.png" alt="" className="w-52 sm:w-80" />
                  </div>
              </div>
              {/* Bottom-right date label */}
              <div
                className="absolute right-20 bottom-20"
                style={{
                  width: '419px',
                  height: '66px',
                  fontSize: '20px',
                  opacity: 0.6,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '1.2',
                  letterSpacing: '0.03em',
                  textAlign: 'center',
                  color: '#3C3C3C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span>May-July 2022</span>
              </div>
            </div>
          </section>

          {/* Slide 2 - Role and Tools */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
                <div className="max-w-6xl w-full" style={{ color: '#000000B2' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text content */}
                <div className="space-y-8">
                  <p className="w-[105%] text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                    Over the course of <span className="font-semibold" style={{ color: '#3C3C3C' }}>3 months</span>, I assumed the role of a <span className="font-semibold" style={{ color: '#3C3C3C' }}>product designer and researcher</span>, and utilized UX tools like user surveys, interviews, user persona, user flows to <span className="font-semibold" style={{ color: '#3C3C3C' }}>craft the visual design and prototype of the platform</span>.
                  </p>
                </div>
                
                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center">
                  <img src="/images/about-04.svg" alt="" className="scale-125" />
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3 - Platform Description */}
          <section
            className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12"
            style={{
              backgroundImage: 'url("/images/eco-bg-01.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              backgroundSize: 'contain',
            }}
          >
            {/* Visible SVG overlay for debugging (always shown) */}
            <img
              src="/images/eco-bg-01.svg"
              alt="decor"
              className="pointer-events-none absolute right-0 top-0 h-full max-h-[720px] opacity-95"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15)) contrast(1.15) saturate(1.1)' }}
            />

            <div className="max-w-5xl space-y-10 relative z-10 w-[120%]" style={{ color: '#000000B2' }}>
              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                EcoWallet is a platform designed to motivate people to make sustainable choices by rewarding them for every choice they make.
              </p>
              
              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                The platform is designed to connect users to small businesses selling eco-friendly and organic items and non-profit organisations in order to make choices like shopping green and donating more accessible, intuitive, and financially beneficial.
              </p>
              
              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                For businesses, the platform highlights their value beyond just environmental benefits, reaching and attracting consumers who are looking for extra savings while shopping green.
              </p>
            </div>
          </section>

          {/* Slide 4 - The Context */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-12" style={{ color: '#000000B2' }}>
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat" style={{ color: '#3C3C3C' }}>
                  The Context
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed">
                  It is imperative to understand the ecosystem where this platform would be situated and to identify a gap that lies in that ecosystem.
                </p>
              </div>
              
              <div className="space-y-10">
                {/* Current Landscape */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10" src="./images/eco-icon-01.svg" alt="" />
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins" style={{ color: '#3C3C3C' }}>
                      Current Landscape
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      The allure of lower prices and accessibility to mass-produced goods contribute to a cycle of overconsumption.
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      This happens often at the expense of environmental well-being and ethical production.
                    </p>
                  </div>
                </div>
                
                {/* The Gap */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10" src="./images/eco-icon-02.svg" alt="" />
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins" style={{ color: '#3C3C3C' }}>
                      The Gap
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      The lack of extrinsic rewards for choosing the more responsible path.
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Higher cost and lower convenience of sustainable alternatives makes it challenging to shift widespread consumer behaviour.
                    </p>
                  </div>
                </div>
                
                {/* Bridging The Gap */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8" src="./images/eco-icon-03.svg" alt="" />
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins" style={{ color: '#3C3C3C' }}>
                      Bridging The Gap
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Bridging this gap could be possible if people feel motivated by instantly gratifying outcomes.
                    </p>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      A system that makes sustainable choices more economically appealing and every choice provides benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 5 - Unpacking User Eco-Behaviour */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full" style={{ color: '#000000B2' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Content */}
                <div className="space-y-12">
                  <div className="space-y-6 w-[120%]">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat" style={{ color: '#3C3C3C' }}>
                      Unpacking user eco-behaviour
                    </h2>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      To gain a deeper understanding of user motivations, behaviours, and pain points, I conducted a mixed-methods user research comprising a <span className="font-semibold text-text-primary">survey of 45 participants</span> and <span className="font-semibold text-text-primary">one-on-one interviews</span> with <span className="font-semibold text-text-primary">15 NGOs and local small business owners</span>.
                    </p>
                  </div>
                  
                  {/* Research questions */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>
                      Research questions for the survey
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4 w-[210%] max-w-[230%]">
                      <div className="border-2 border-[#0C9F1A] rounded-2xl p-4 flex-1">
                        <p className="text-base text-text-secondary font-poppins">
                          How far people are willing to go to contribute toward sustainability.
                        </p>
                      </div>
                      <div className="border-2 border-[#0C9F1A] rounded-2xl p-4 flex-1">
                        <p className="text-base text-text-secondary font-poppins">
                          Are people motivated to shop sustainably and support small businesses.
                        </p>
                      </div>
                      <div className="border-2 border-[#0C9F1A] rounded-2xl p-4 flex-1">
                        <p className="text-base text-text-secondary font-poppins">
                          Finding if people are motivated to reuse, recycle, donate and support NGOs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Survey insights */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>
                      Survey data Insights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-[220%] max-w-[200%]">
                      <div className="space-y-2">
                        <p className="text-4xl sm:text-5xl font-poppins" style={{ width: '785px', height: '116px', opacity: 1, fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: '98px', letterSpacing: '0.01em', color: '#0C9F1A', margin: 0 }}>
                          59.5%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins max-w-[60%] -mt-6">
                          people are not motivated to go the extra mile
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-4xl sm:text-5xl font-poppins" style={{ width: '785px', height: '116px', opacity: 1, fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: '98px', letterSpacing: '0.01em', color: '#0C9F1A', margin: 0 }}>
                          34.2%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins max-w-[60%] -mt-6">
                          people are unaware about ways to recycle and donate
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-4xl sm:text-5xl font-poppins" style={{ width: '785px', height: '116px', opacity: 1, fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: '98px', letterSpacing: '0.01em', color: '#0C9F1A', margin: 0 }}>
                          23.7%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins max-w-[60%] -mt-6">
                          people are aware about climate change and make eco-friendly choices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center lg:justify-end">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/about-03.svg" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6 - Interview Framework */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-10">
            <div className="max-w-6xl w-full">
              <div className="flex flex-col gap-8 items-center w-full">
                {/* Content on top */}
                <div className="space-y-6 w-full">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-montserrat text-left" style={{ color: '#3C3C3C' }}>
                      The 'tell me more' framework for interviews
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed w-[80%] mt-12" style={{ color: '#000000B2' }}>
                      To <span className="font-semibold text-text-primary">elicit richer insights</span> into their experiences, I followed the TEDW framework (<span className="font-semibold text-text-primary">Tell me more, Explain, Describe, Walk me through</span>) for the one-on-one interviews.
                    </p>
                  </div>

                  <div className="space-y-6 mt-24">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>
                      What NGOs and business owners had to say
                    </h3>
                  </div>
                </div>

                {/* Bottom: two images side-by-side on sm+ */}
                <div className="w-full relative mt-6">
                      <img src="/images/about-05.svg" alt="illustration" className="w-[110%] h-[110%] absolute -left-120 bottom-0" />
                   
                  {/* Second image: enlarged and centered */}
                  <div className="w-full relative flex items-center justify-center -mt-10">
                  
                      <img src="./images/eco-05.png" alt="" className='w-[70%] h-[70%] '/>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 7 - Dissecting the Problem & User Persona */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16" style={{ color: '#000000B2' }}>
              {/* Dissecting the problem */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat" style={{ color: '#3C3C3C' }}>
                  Dissecting the problem
                </h2>
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed max-w-5xl">
                  Individuals are often discouraged from consistently making sustainable choices (supporting eco-businesses, donating) due to a lack of immediate rewards and a higher cost/ inconvenience compared to unsustainable alternatives. This prevents the widespread adoption of environmentally responsible behavior.
                </p>
              </div>

              {/* User Persona */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-montserrat" style={{ color: '#3C3C3C' }}>
                  Understanding the sustainable user
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Image and basic info */}
                    <div className="space-y-6">
                      <div className="aspect-[6/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                        <div className="text-center text-gray-400 font-poppins text-sm">
                          <img src="/images/eco-03.png" alt="" />
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm font-poppins">
                        <p className="font-semibold text-text-primary">Age: 24 years</p>
                        <p className="font-semibold text-text-primary">Gender: Woman</p>
                        <p className="font-semibold text-text-primary">Location: Durgapur</p>
                        <p className="font-semibold text-text-primary">Job title: Photographer</p>
                        <p className="font-semibold text-text-primary">Education: MA, Fine Arts</p>
                      </div>
                    </div>

                    {/* Right - Persona details */}
                    <div className="lg:col-span-2 space-y-8">
                      <h3 className="text-2xl font-bold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>
                        User persona: Rashika Sarkar
                      </h3>
                      
                      {/* Bio */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>Bio</h4>
                        <p className="text-sm text-text-secondary font-poppins leading-relaxed">
                          Rashika is a 24 year old photographer living in Durgapur, Bengal. She has to constantly travel for work and prefers to shop online to save money and time. She is a nature lover and is passionate about sustainability and hence makes sure to recycle, shop local, and eco-friendly products.
                        </p>
                      </div>

                      {/* Challenges and Pain points */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>Challenges and Pain points</h4>
                        <p className="text-sm text-text-secondary font-poppins leading-relaxed">
                          It is difficult to find local stores in a new city which provide good quality products, most of the good stores are expensive and do not provide coupons or discounts, difficult to look for NGOs looking for donations
                        </p>
                      </div>

                      {/* Goals and motivations */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins" style={{ color: '#3C3C3C' }}>Goals and motivations</h4>
                        <p className="text-sm text-text-secondary font-poppins leading-relaxed">
                          Promises to reuse to keep her essentials travel friendly, explore local stores and shop consciously, explore and capture the beauty in nature, be mindful of the environment, being able to save money and travel
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-green">
                        <p className="text-sm italic text-text-secondary font-poppins leading-relaxed">
                          "It deeply pains me to see that we are destroying the Earth that we live on and along with it the beautiful, varied species of animals and plants."
                        </p>
                        <p className="text-xs font-semibold text-text-primary font-poppins mt-3">
                          Quotes from the Persona
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 8 - Ideating Potential Paths */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="space-y-12">
                  <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat w-[120%]">
                    Ideating potential paths
                  </h2>
                  
                  {/* Path 1 - Intrinsic Motivation */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-text-primary flex items-center justify-center">
                        <span className="text-lg font-bold text-text-primary font-poppins">1</span>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h3 className="text-2xl font-bold text-text-primary font-poppins">
                          Intrinsic Motivation
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed w-[105%]">
                          An intervention or an awareness drive could be conducted to provide relevant information to people and persuade them to be more responsible toward the environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Path 2 - Extrinsic Motivation */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-text-primary flex items-center justify-center">
                        <span className="text-lg font-bold text-text-primary font-poppins">2</span>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h3 className="text-2xl font-bold text-text-primary font-poppins">
                          Extrinsic Motivation
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed w-[105%]">
                          A reward or monetary incentive system to encourage them in the desired direction along with providing relevant information about stores and NGOs nearby in an accessible way.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-accent-green w-[105%]">
                    <p className="text-base text-text-secondary font-poppins leading-relaxed">
                      I decided to move forward with <span className="font-bold text-text-primary">extrinsic motivation</span> as it would directly counter the cost barrier by making sustainable options more financially appealing and accessible for a wider user base. The system would be more effective and be easier to scale.
                    </p>
                  </div>
                </div>

                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center relative -right-20">
                      <img src="/images/about-02.svg" alt="" className='scale-150'/>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 9 - Constructing the Solution (First Version) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Constructing the solution
                </h2>
                
                <div className="space-y-6 max-w-6xl w-[110%]">
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    To make sustainable shopping and supporting local causes easier and more pocket-friendly, online users could be made aware of and connected with nearby businesses selling organic products and relevant non-profit organizations to make sustainable choices accessible.
                  </p>
                  
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Every sustainable choice like shopping green or making a donation would be rewarded in the form of monetary benefits.
                  </p>
                </div>
              </div>

              {/* Flow diagram */}
              <div className="flex relative -left-30">
                <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Diagram placeholder - left image */}
                  <div className="w-full md:w-1/2 flex relative left-30">
                    <img src="/images/eco-04.svg" alt="" className="scale-90 md:scale-110 max-w-full" />
                  </div>

                  {/* Diagram placeholder - right image with callout text + curved arrow */}
                  <div className="w-full md:w-1/2 flex items-center justify-end space-x-6 relative">
                    <img src="/images/eco-06.png" alt="" className="scale-50 md:scale-[60%] max-w-full relative left-120" />

                    {/* Callout: text with a curved SVG arrow pointing from the image */}
                    <div className="hidden md:flex flex-col items-start ml-4 relative">
                      <svg className="scale-50 absolute -left-15 top-1/2 transform -translate-y-1/2" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <defs>
                          <marker id="ecoArrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                            <path d="M0,0 L10,5 L0,10 z" fill="#0C9F1A" />
                          </marker>
                        </defs>
                        <path d="M150 60 C120 20 60 20 10 40" stroke="#0C9F1A" strokeWidth="3" fill="none" markerEnd="url(#ecoArrow)" />
                      </svg>

                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed w-[250%] relative -left-50 -bottom-10">
                        Ideating on relevant features that can be a part of EcoWallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10 - User Flows - Task 1: Collecting Points */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12">
            <div className="max-w-7xl w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  User flows
                </h2>
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Task 1: Collecting points
                </h3>
              </div>

              {/* Flow diagram placeholder */}
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <img src="/images/eco-07.svg" alt="" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Task 2: Redeeming points
                </h3>
              </div>
              {/* Flow diagram placeholder */}
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg scale-75 -mt-30">
              <img src="/images/eco-08.svg" alt="" />
              </div>
            </div>
          </section>

          

          {/* Slide 13 - Prototyping EcoWallet - Home Screen */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12">
            <div className="max-w-6xl w-full">
              <div className="mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Prototyping EcoWallet
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Phone mockup */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Home Screen Mockup</p>
                      <p className="text-sm">EcoWallet app interface</p>
                      <p className="text-xs text-gray-500">
                        Shows: Points tracker, Explore EcoWallet menu, Local stores, Nearby NGOs, Exclusive offers, Your wallet
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Feature descriptions */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">
                          Track Points & Progress
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          Users can easily track their points and see how far they are from their next reward.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">
                          The Endowed Progress Effect
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          Due to 'The Endowed Progress' effect, users will also feel motivated to shop more if they can see their points progress.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">
                          Easy Navigation
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          To make the platform easy to navigate, options like exploring local stores, nearby NGOs, exclusive offers, or checking out your wallet have been given up front.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 14 - Prototyping - Store Discovery */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Phone mockup 1 */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Local Stores Screen</p>
                      <p className="text-sm">Best deals & categories</p>
                      <p className="text-xs text-gray-500">
                        Shows: Search bar, Best deals carousel, Top rated stores, Cheapest deals, Featured stores
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins">
                    Discover Best Deals & Featured Stores
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Users can check out best deals on different products and categories, explore top rated and featured stores, and cheapest deals.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Description */}
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins">
                    Smart Filtering & Easy Access
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The filtering and sorting options are highlighted and made easily accessible.
                  </p>
                </div>

                {/* Right side - Phone mockup 2 */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Selected Stores Screen</p>
                      <p className="text-sm">Category filtering</p>
                      <p className="text-xs text-gray-500">
                        Shows: Category filters (Veggies, Fashion, Bakery, etc.), Featured stores with images, Filter & sort buttons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 15 - Prototyping - Product Details */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Phone mockup 1 */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Store Catalogue</p>
                      <p className="text-sm">Product browsing</p>
                      <p className="text-xs text-gray-500">
                        Shows: Featured product card, Search bar, Product grid with images, Points display on each product
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins">
                    Clear Points Display
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The number of points users will receive on buying a product is clearly mentioned and highlighted
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Description */}
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins">
                    Complete Product Experience
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Users can save the product, share it, add it to cart, or go to buy now
                  </p>
                </div>

                {/* Right side - Phone mockup 2 */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Product Details</p>
                      <p className="text-sm">Product page</p>
                      <p className="text-xs text-gray-500">
                        Shows: Product image, Title, Price with points, Specifications dropdown, Add to cart & Buy now buttons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 16 - Prototyping - Checkout & Wallet */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Phone mockup 1 */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">Review Order</p>
                      <p className="text-sm">Checkout screen</p>
                      <p className="text-xs text-gray-500">
                        Shows: Delivery address, Expected delivery date, Redeem points section, Available coupons, Price details, Payment method, Confirm button
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-poppins">
                    Best Coupon Recommendations
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Users will be able to see the best coupon that they can redeem for a particular order based on the points they have.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Description */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">
                          Track Your Discount Journey
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          On 'my wallet', users can track their points and see what is the best coupon available to them and continue shopping to avail that discount
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary font-poppins mb-2">
                          Points Collection Summary
                        </h3>
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          Users can also see the summary of the points they have collected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Phone mockup 2 */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm aspect-[9/19] bg-gray-100 rounded-3xl shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center text-gray-400 font-poppins space-y-3">
                      <p className="text-lg font-medium">My Wallet</p>
                      <p className="text-sm">Points dashboard</p>
                      <p className="text-xs text-gray-500">
                        Shows: Current points (240), Best coupon recommendation, Points summary by store, Timeline view
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 17 - Evaluating Usability */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Evaluating usability
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                    Guerilla Testing
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed max-w-4xl">
                    I conducted <span className="font-semibold text-text-primary">4 in-depth interviews</span> with potential users to evaluate EcoWallet and get insights on the features and interactions that I had included in the application.
                  </p>
                </div>

                {/* User testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
                  {/* Left testimonial */}
                  <div className="flex flex-col items-center lg:items-end space-y-6">
                    <div className="w-64 h-64 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-sm">User Testing Photo</p>
                        <p className="text-xs mt-2">Person using app</p>
                      </div>
                    </div>
                    <div className="max-w-md">
                      <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-green">
                        <p className="text-base italic text-text-secondary font-poppins leading-relaxed">
                          "A very useful platform as everything is in one place. I see myself using something like this"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right testimonial */}
                  <div className="flex flex-col items-center lg:items-start space-y-6">
                    <div className="max-w-md">
                      <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-400">
                        <p className="text-base italic text-text-secondary font-poppins leading-relaxed">
                          "The buttons and fonts are legible and easy on the eyes. All colors look nice"
                        </p>
                      </div>
                    </div>
                    <div className="w-64 h-64 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-sm">User Testing Photo</p>
                        <p className="text-xs mt-2">Person reviewing app</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 18 - Improving EcoWallet */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Improving EcoWallet
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left side - User feedback */}
                <div className="space-y-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    User feedback
                  </h3>

                  <div className="space-y-8">
                    {/* Feedback 1 */}
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-text-primary flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                          Did not know how many points will be earned for each action/ choice made
                        </p>
                      </div>
                    </div>

                    {/* Feedback 2 */}
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-text-primary flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                          Difficulty filtering/sorting specific products effectively
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Design improvements */}
                <div className="space-y-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Design improvements
                  </h3>

                  <div className="space-y-6">
                    {/* Improvement 1 */}
                    <div className="bg-purple-100 rounded-2xl p-6 shadow-md">
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        A dedicated, easily accessible FAQ section outlining the point earning rules for different actions
                      </p>
                    </div>

                    {/* Improvement 2 */}
                    <div className="bg-purple-100 rounded-2xl p-6 shadow-md">
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        A more exhaustive and accessible list of filters to help find specific products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional slides can be added here following the same pattern */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EcoWallet;
