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
        
        <main className="flex-grow">
          {/* Slide 1 - Title Slide */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6 sm:px-12">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-8 text-center lg:text-left">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <img src="/images/eco-icon.svg" alt="" className='scale-50' />
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary font-montserrat">
                      EcoWallet
                    </h1>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-poppins leading-relaxed">
                      Making sustainability accessible and rewarding.
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-poppins leading-relaxed">
                      Donate, shop green, and earn benefits.
                    </p>
                  </div>
                </div>
                
                {/* Right side - Images placeholder */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-[3/4] bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
                    <div className="text-center text-gray-400 font-poppins text-sm">
                      <img src="/images/eco-01.png" alt="" />
                    </div>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-green-100 to-green-200 rounded-3xl shadow-lg flex items-center justify-center">
                    <div className="text-center text-gray-400 font-poppins text-sm">
                      <img src="/images/eco-02.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 2 - Role and Tools */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text content */}
                <div className="space-y-8">
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                    Over the course of <span className="font-semibold text-text-primary">3 months</span>, I assumed the role of a <span className="font-semibold text-text-primary">product designer and researcher</span>, and utilized UX tools like user surveys, interviews, user persona, user flows to <span className="font-semibold text-text-primary">craft the visual design and prototype of the platform</span>.
                  </p>
                </div>
                
                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-md aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/about-04.svg" alt="" className='scale-125'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3 - Platform Description */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12">
            <div className="max-w-4xl space-y-10">
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
            <div className="max-w-5xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
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
                    <svg className="w-10 h-10 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
                    </svg>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins">
                      Current Landscape
                    </h3>
                  </div>
                  <div className="pl-14 space-y-3">
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
                    <svg className="w-10 h-10 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins">
                      The Gap
                    </h3>
                  </div>
                  <div className="pl-14 space-y-3">
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
                    <svg className="w-10 h-10 text-accent-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-accent-green font-poppins">
                      Bridging The Gap
                    </h3>
                  </div>
                  <div className="pl-14 space-y-3">
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
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Content */}
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                      Unpacking user eco-behaviour
                    </h2>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      To gain a deeper understanding of user motivations, behaviours, and pain points, I conducted a mixed-methods user research comprising a <span className="font-semibold text-text-primary">survey of 45 participants</span> and <span className="font-semibold text-text-primary">one-on-one interviews</span> with <span className="font-semibold text-text-primary">15 NGOs and local small business owners</span>.
                    </p>
                  </div>
                  
                  {/* Research questions */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                      Research questions for the survey
                    </h3>
                    <div className="space-y-4">
                      <div className="border-2 border-green-500 rounded-2xl p-4">
                        <p className="text-base text-text-secondary font-poppins">
                          How far people are willing to go to contribute toward sustainability.
                        </p>
                      </div>
                      <div className="border-2 border-green-500 rounded-2xl p-4">
                        <p className="text-base text-text-secondary font-poppins">
                          Are people motivated to shop sustainably and support small businesses.
                        </p>
                      </div>
                      <div className="border-2 border-green-500 rounded-2xl p-4">
                        <p className="text-base text-text-secondary font-poppins">
                          Finding if people are motivated to reuse, recycle, donate and support NGOs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Survey insights */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                      Survey data Insights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <p className="text-4xl text-green-500 sm:text-5xl font-bold text-accent-green font-montserrat">
                          59.5%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins">
                          people are not motivated to go the extra mile
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-4xl text-green-500 sm:text-5xl font-bold text-accent-green font-montserrat">
                          34.2%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins">
                          people are unaware about ways to recycle and donate
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-4xl text-green-500 sm:text-5xl font-bold text-accent-green font-montserrat">
                          23.7%
                        </p>
                        <p className="text-sm text-text-secondary font-poppins">
                          people are aware about climate change and make eco-friendly choices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-sm aspect-[3/4] bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/about-03.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6 - Interview Framework */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center order-2 lg:order-1">
                  <div className="w-full max-w-md aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/about-05.svg" alt="" className='scale-125' />
                    </div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="space-y-12 order-1 lg:order-2">
                  <div className="space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                      The 'tell me more' framework for interviews
                    </h2>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      To <span className="font-semibold text-text-primary">elicit richer insights</span> into their experiences, I followed the TEDW framework (<span className="font-semibold text-text-primary">Tell me more, Explain, Describe, Walk me through</span>) for the one-on-one interviews.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                      What NGOs and business owners had to say
                    </h3>
                    
                    {/* Word cloud effect with text */}
                    <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">expensive</span>
                        <span className="text-4xl font-bold text-text-primary font-poppins">struggles</span>
                        <span className="text-lg text-gray-400 font-poppins">impact</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-3xl font-bold text-text-primary font-poppins">sustainability</span>
                        <span className="text-lg text-gray-400 font-poppins">cruelty-free</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-3xl font-bold text-text-primary font-poppins">donation</span>
                        <span className="text-5xl font-bold text-text-primary font-poppins">visibility</span>
                        <span className="text-lg text-gray-400 font-poppins">customers</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">marketing</span>
                        <span className="text-3xl font-bold text-text-primary font-poppins">challenges</span>
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">money</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-lg text-gray-400 font-poppins">underprivileged</span>
                        <span className="text-4xl font-bold text-text-primary font-poppins">awareness</span>
                        <span className="text-lg text-gray-400 font-poppins">care</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">environment</span>
                        <span className="text-3xl font-bold text-text-primary font-poppins">organic</span>
                        <span className="text-lg text-gray-400 font-poppins">scaling</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">underfunded</span>
                        <span className="text-2xl font-semibold text-gray-300 font-poppins">budget</span>
                        <span className="text-lg text-gray-400 font-poppins">support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 7 - Dissecting the Problem & User Persona */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              {/* Dissecting the problem */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Dissecting the problem
                </h2>
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed max-w-5xl">
                  Individuals are often discouraged from consistently making sustainable choices (supporting eco-businesses, donating) due to a lack of immediate rewards and a higher cost/ inconvenience compared to unsustainable alternatives. This prevents the widespread adoption of environmentally responsible behavior.
                </p>
              </div>

              {/* User Persona */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-montserrat">
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
                      <h3 className="text-2xl font-bold text-text-primary font-poppins">
                        User persona: Rashika Sarkar
                      </h3>
                      
                      {/* Bio */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins">Bio</h4>
                        <p className="text-sm text-text-secondary font-poppins leading-relaxed">
                          Rashika is a 24 year old photographer living in Durgapur, Bengal. She has to constantly travel for work and prefers to shop online to save money and time. She is a nature lover and is passionate about sustainability and hence makes sure to recycle, shop local, and eco-friendly products.
                        </p>
                      </div>

                      {/* Challenges and Pain points */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins">Challenges and Pain points</h4>
                        <p className="text-sm text-text-secondary font-poppins leading-relaxed">
                          It is difficult to find local stores in a new city which provide good quality products, most of the good stores are expensive and do not provide coupons or discounts, difficult to look for NGOs looking for donations
                        </p>
                      </div>

                      {/* Goals and motivations */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-text-primary font-poppins">Goals and motivations</h4>
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
                  <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
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
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
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
                        <p className="text-base text-text-secondary font-poppins leading-relaxed">
                          A reward or monetary incentive system to encourage them in the desired direction along with providing relevant information about stores and NGOs nearby in an accessible way.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-accent-green">
                    <p className="text-base text-text-secondary font-poppins leading-relaxed">
                      I decided to move forward with <span className="font-bold text-text-primary">extrinsic motivation</span> as it would directly counter the cost barrier by making sustainable options more financially appealing and accessible for a wider user base. The system would be more effective and be easier to scale.
                    </p>
                  </div>
                </div>

                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-md aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/about-02.svg" alt="" />
                    </div>
                  </div>
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
                
                <div className="space-y-6 max-w-4xl">
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    To make sustainable shopping and supporting local causes easier and more pocket-friendly, online users could be made aware of and connected with nearby businesses selling organic products and relevant non-profit organizations to make sustainable choices accessible.
                  </p>
                  
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Every sustainable choice like shopping green or making a donation would be rewarded in the form of monetary benefits.
                  </p>
                </div>
              </div>

              {/* Flow diagram */}
              <div className="flex items-center justify-center py-12">
                <div className="w-full max-w-5xl">
                  {/* Diagram placeholder */}
                  <div className="relative bg-white rounded-2xl p-12 shadow-lg">
                    <img src="/images/eco-04.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10 - Constructing the Solution (Second Version with Ideation) */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Constructing the solution
                </h2>
                
                <div className="space-y-6 max-w-4xl">
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    To make sustainable shopping and supporting local causes easier and more pocket-friendly, online users could be made aware of and connected with nearby businesses selling organic products and relevant non-profit organizations to make sustainable choices accessible.
                  </p>
                  
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Every sustainable choice like shopping green or making a donation would be rewarded in the form of monetary benefits.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Simplified flow diagram */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    {/* App */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-24 h-24 rounded-full bg-text-primary flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-text-primary font-poppins">App</p>
                      <div className="text-xs text-center space-y-1">
                        <p className="text-text-secondary">↑ NGOs</p>
                        <p className="text-text-secondary">↓ Small businesses</p>
                      </div>
                    </div>

                    <svg className="w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>

                    {/* Users */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-24 h-24 rounded-full bg-text-primary flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-text-primary font-poppins">Users</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <svg className="w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      <svg className="w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>

                    {/* Shop & Donate */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-20 h-20 rounded-full bg-text-primary flex items-center justify-center shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </div>
                        <p className="text-xs font-semibold text-text-primary font-poppins">Shop</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-20 h-20 rounded-full bg-text-primary flex items-center justify-center shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <p className="text-xs font-semibold text-text-primary font-poppins">Donate</p>
                      </div>
                    </div>

                    <svg className="w-8 h-8 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>

                    {/* Benefits */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-24 h-24 rounded-full bg-text-primary flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-text-primary font-poppins">Benefits</p>
                    </div>
                  </div>
                </div>

                {/* Right side - Ideation sticky notes */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <p className="text-lg font-medium">Sticky Notes Image</p>
                      <p className="text-sm mt-2">Feature ideation brainstorm</p>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <svg className="w-12 h-12 text-accent-green mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 13l5 5m0 0l5-5m-5 5V6"/>
                    </svg>
                    <p className="text-base text-text-secondary font-poppins">
                      Ideating on relevant features that can be a part of EcoWallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 11 - User Flows - Task 1: Collecting Points */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
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
                <div className="w-full aspect-[16/10] bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400 font-poppins space-y-3 p-6">
                    <p className="text-lg font-medium">User Flow Diagram</p>
                    <p className="text-sm max-w-md">Task 1: Collecting Points</p>
                    <p className="text-xs text-gray-500">
                      Flow showing: Begin → Sign in/Sign up → Home page → Collect points → 
                      Check available points → Donate (with NGO options) → Buy sustainable item → 
                      Apply offer → Make purchase → Credit points
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-accent-green">
                <p className="text-base text-text-secondary font-poppins leading-relaxed">
                  <span className="font-semibold text-text-primary">Key steps:</span> Users begin by signing in/signing up → Navigate to home page → Choose to collect points through either donating to NGOs or purchasing sustainable items → Browse and select options → Complete the transaction → Earn credit points that are automatically added to their EcoWallet balance.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 12 - User Flows - Task 2: Redeeming Points */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  User flows
                </h2>
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Task 2: Redeeming points
                </h3>
              </div>

              {/* Flow diagram placeholder */}
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg">
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-400 font-poppins space-y-3 p-6">
                    <p className="text-lg font-medium">User Flow Diagram</p>
                    <p className="text-sm max-w-md">Task 2: Redeeming Points</p>
                    <p className="text-xs text-gray-500">
                      Flow showing: Begin → Sign in → Enter details → Home page → Redeem points → 
                      List of stores with best offers → Choose an offer → Copy coupon code to use the offer
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-accent-green">
                  <p className="text-base text-text-secondary font-poppins leading-relaxed">
                    <span className="font-semibold text-text-primary">Task flow:</span> Users sign in → Navigate to home page → Select "Redeem points" option → View list of stores with offers based on available credits → Choose preferred offer → Receive coupon code to apply during purchase.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                  <p className="text-base text-text-secondary font-poppins leading-relaxed">
                    <span className="font-semibold text-text-primary">Value proposition:</span> The redemption system directly addresses the cost barrier by providing tangible monetary benefits, making sustainable shopping financially rewarding and encouraging repeated engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 13 - Prototyping EcoWallet - Home Screen */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
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
