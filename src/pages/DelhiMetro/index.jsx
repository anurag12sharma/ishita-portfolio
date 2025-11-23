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
          {/* Slide 1 - Title Slide */}
          <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
              <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-08.svg" alt=""/>
              </div>
          </section>
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
            <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-08.svg" alt=""/>
              </div>
            <div className="max-w-4xl text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-background font-poppins leading-tight">
                Delhi Metro: An Experience
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-poppins font-light">
                Enhancing accessibility and the commuter experience
              </p>
              <div className="pt-8">
                <p className="text-lg text-primary-background font-medium font-poppins">
                  February 2024
                </p>
              </div>
            </div>
          </section>

          {/* Slide 2 - The Overview */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12">
            <div className="max-w-4xl space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                The overview
              </h2>
              <div className="space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  The Delhi Metro is the lifeline of the National Capital, serving millions of commuters daily.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  Its extensive network spans across Delhi, Gurgaon, Noida, and Ghaziabad, making it a crucial mode of transport in one of the world's most densely populated urban areas. The Delhi Metro Rail Corporation (DMRC) has been credited with revolutionizing public transport in India.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 3 - Metro Map */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left side - Image placeholder */}
                <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-gray-400 font-poppins">
                    <img src="/images/delhi-metro-map 2.png" alt="" />
                  </div>
                </div>
                
                {/* Right side - Text content */}
                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed">
                    This is the map of all the metro lines in Delhi which are represented by different colors.
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl text-text-secondary font-poppins">
                      There are 10 lines in total:
                    </p>
                    <div className="space-y-1 pl-4">
                      <p className="text-lg font-semibold text-red-600 font-poppins">Red</p>
                      <p className="text-lg font-semibold text-yellow-500 font-poppins">Yellow</p>
                      <p className="text-lg font-semibold text-blue-600 font-poppins">Blue</p>
                      <p className="text-lg font-semibold text-green-600 font-poppins">Green</p>
                      <p className="text-lg font-semibold text-purple-600 font-poppins">Violet</p>
                      <p className="text-lg font-semibold text-orange-500 font-poppins">Orange</p>
                      <p className="text-lg font-semibold text-pink-600 font-poppins">Magenta</p>
                      <p className="text-lg font-semibold text-pink-400 font-poppins">Pink</p>
                      <p className="text-lg font-semibold text-gray-500 font-poppins">Grey</p>
                      <p className="text-lg font-semibold text-cyan-500 font-poppins">Aqua</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 - The Motivation */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12">
            <div className="max-w-4xl space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                The motivation
              </h2>
              <div className="space-y-8">
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  As someone deeply interested in user experience, I have always been fascinated by how people interact with public systems.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  During my visit to Delhi, I saw an opportunity to explore the Delhi Metro through a <span className="font-semibold text-text-primary">UX lens</span>. It was a personal project driven by <span className="font-semibold text-text-primary">curiosity</span> and a desire to understand the <span className="font-semibold text-text-primary">challenges and successes</span> of such a critical infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 5 - The Goal */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12">
            <div className="max-w-5xl space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                The goal
              </h2>
              <div className="space-y-8">
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  This case study documents my exploratory journey through the Delhi Metro system. It aims to analyze the user experience from a first-hand perspective through <span className="font-semibold text-text-primary">observational research and user interviews</span>, highlighting <span className="font-semibold text-text-primary">key pain points</span> and areas where the system excels, with a focus on <span className="font-semibold text-text-primary">accessibility, intuitiveness, and overall commuter satisfaction</span>.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-poppins leading-relaxed">
                  The goal is to provide <span className="font-semibold text-text-primary">insights</span> that could contribute to enhancing the daily commute for millions.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 6 - The System */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                The system
              </h2>
              
              {/* Flow diagram */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {/* Step 1 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">1</div>
                    <p className="text-sm font-semibold leading-tight">get to the nearest metro station</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">2</div>
                    <p className="text-sm font-semibold leading-tight">buy ticket</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">3</div>
                    <p className="text-sm font-semibold leading-tight">go to the correct gate/ line by following signs</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">4</div>
                    <p className="text-sm font-semibold leading-tight">board the metro</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-red-400 to-red-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">5</div>
                    <p className="text-sm font-semibold leading-tight">refer to the line map inside the metro</p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">6</div>
                    <p className="text-sm font-semibold leading-tight">check if your station will arrive on the current line</p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">7</div>
                    <p className="text-sm font-semibold leading-tight">if not, check at which station you will need to change lines</p>
                  </div>
                </div>

                {/* Step 8 */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-3xl rotate-45 shadow-lg flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <div className="-rotate-45 text-center text-white p-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-sm font-semibold">8</div>
                    <p className="text-sm font-semibold leading-tight">change lines until you are on the one with your station</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 7 - The Groundwork (Part 1) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left side - Text content */}
                <div className="space-y-8">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                    The groundwork
                  </h2>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                      a. Ethnographic research
                    </h3>
                    
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      My primary research method involved <span className="font-semibold text-text-primary">extensive travel on the Delhi Metro</span> across various lines (Red, Yellow, Blue, etc.) and stations, including major hubs like Rajiv Chowk, Central Secretariat, Airport Express Line and smaller, less crowded stations.
                    </p>
                    
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Over a period of <span className="font-semibold text-text-primary">five days</span>, I meticulously observed commuter behavior, interactions with the system, and the physical environment.
                    </p>
                  </div>
                </div>
                
                {/* Right side - Illustration placeholder */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-md aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-gray-400 font-poppins">
                      <img src="/images/SVG-12.svg" alt="" className='scale-[2.5] w-full h-full object-contain'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 8 - The Groundwork (Part 2) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12">
            <div className="max-w-5xl space-y-12">
              <p className="text-xl sm:text-2xl text-text-secondary font-poppins">
                My observations focused on:
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-primary-background text-2xl font-bold mt-1">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Passenger flow and <span className="font-semibold text-text-primary">crowd management</span>, particularly during peak hours.
                  </p>
                </li>
                
                <li className="flex items-start gap-4">
                  <span className="text-primary-background text-2xl font-bold mt-1">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The effectiveness of <span className="font-semibold text-text-primary">signage</span> and <span className="font-semibold text-text-primary">wayfinding</span> systems.
                  </p>
                </li>
                
                <li className="flex items-start gap-4">
                  <span className="text-primary-background text-2xl font-bold mt-1">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The availability and usability of <span className="font-semibold text-text-primary">accessibility features</span> (ramps, elevators, tactile paving, reserved seats and coaches for women and elderly).
                  </p>
                </li>
                
                <li className="flex items-start gap-4">
                  <span className="text-primary-background text-2xl font-bold mt-1">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The <span className="font-semibold text-text-primary">general ambiance</span> of stations, including cleanliness, lighting, and noise levels.
                  </p>
                </li>
                
                <li className="flex items-start gap-4">
                  <span className="text-primary-background text-2xl font-bold mt-1">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The presence and usage of <span className="font-semibold text-text-primary">amenities</span> like charging points and food stalls.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Slide 9 - Signage and Instructions (Part 1) */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  There were instructions and signs regarding the correct exit gate and platforms, reserved coach and seats for women and people with disabilities, social distancing stickers around the platform.
                </p>
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  All instructions were both in Hindi and English.
                </p>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Image 1 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-01.png" alt="" className='scale-125'/>
                  </div>
                </div>
                
                {/* Image 2 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-02.png" alt="" className='scale-125'/>
                  </div>
                </div>
                
                {/* Image 3 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-03.png" alt="" className='scale-125'/>
                  </div>
                </div>
                
                {/* Image 4 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-04.png" alt="" className='scale-125'/>
                  </div>
                </div>
                
                {/* Image 5 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-05.png" alt="" className=''/>
                  </div>
                </div>
                
                {/* Image 6 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="/images/metro-06.png" alt="" className=''/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10 - Maps and Wayfinding (Part 2) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  There were detailed maps of different lines and platforms around the station and inside the train, along with footprint and directional stickers to ease the changing of lines.
                </p>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Image 1 */}
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-07.png" alt="" />
                  </div>
                </div>
                
                {/* Image 2 - wider */}
                <div className="aspect-[16/9] lg:col-span-2 bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-08.png" alt="" />
                  </div>
                </div>
                
                {/* Image 3 - wider */}
                <div className="aspect-[16/9] md:col-span-2 bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-09.png" alt="" />
                  </div>
                </div>
                
                {/* Image 4 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-10.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10 - Maps and Wayfinding (Part 2) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  Other accessibility and usability features included tactile pathways, wide elevators to fit wheelchairs, customer care booths, and food stalls. 
                </p>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Image 1 */}
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-11.png" alt="" />
                  </div>
                </div>
                
                {/* Image 2 - wider */}
                <div className="aspect-[16/9] lg:col-span-2 bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-12.png" alt="" />
                  </div>
                </div>
                
                {/* Image 3 - wider */}
                <div className="aspect-[16/9] md:col-span-2 bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-13.png" alt="" />
                  </div>
                </div>
                
                {/* Image 4 */}
                <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-sm">
                    <img src="images/metro-14.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 11 - User Research */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12">
            <div className="max-w-5xl space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                The groundwork
              </h2>
              
              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                  b. User research
                </h3>
                
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  To complement my observations, I conducted informal, <span className="font-semibold text-text-primary">on-the-go interviews with 12 commuters</span> at different stations. These were short, conversational interactions aimed at gathering <span className="font-semibold text-text-primary">immediate feedback on their experiences</span>.
                </p>
                
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  I approached people who seemed open to a quick chat, ensuring a <span className="font-semibold text-text-primary">mix of demographics</span> (age, gender, perceived commute frequency).
                </p>
              </div>
            </div>
          </section>

          {/* Slide 12 - Interview Questions */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                Some questions I asked
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-5xl sm:text-6xl font-bold text-primary-background/30 font-poppins flex-shrink-0">1.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-2">
                    How often do you use the metro?
                  </p>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="text-5xl sm:text-6xl font-bold text-primary-background/30 font-poppins flex-shrink-0">2.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-2">
                    What do you like the most about the metro?
                  </p>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="text-5xl sm:text-6xl font-bold text-primary-background/30 font-poppins flex-shrink-0">3.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-2">
                    What have been some of the challenges that you have faced while commuting by the metro?
                  </p>
                </div>
              </div>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-xs">
                    <img src="/images/metro-q1.png" alt="" />
                  </div>
                </div>
                
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-xs">
                    <img src="/images/metro-q2.png" alt="" />
                  </div>
                </div>
                
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-xs">
                    <img src="/images/metro-q3.png" alt="" />
                  </div>
                </div>
                
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center text-gray-400 font-poppins text-xs">
                    <img src="/images/metro-q4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 13 - User Quotes */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12">
            <div className="max-w-4xl space-y-16">
              {/* Quote 1 */}
              <div className="flex items-start gap-6">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-primary-background/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="text-xl sm:text-2xl md:text-3xl text-text-primary font-poppins leading-relaxed">
                  Beating the traffic is the best!
                </p>
              </div>
              
              {/* Quote 2 */}
              <div className="flex items-start gap-6">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-primary-background/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="text-xl sm:text-2xl md:text-3xl text-text-primary font-poppins leading-relaxed">
                  It is pretty safe and clean for women, especially the reserved coach.
                </p>
              </div>
              
              {/* Quote 3 */}
              <div className="flex items-start gap-6">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-primary-background/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="text-xl sm:text-2xl md:text-3xl text-text-primary font-poppins leading-relaxed">
                  Crazy crowd on platforms and stations during peak hours.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 14 - User Pain Points */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                User pain points
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Pain Point 1 */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-primary-background/10 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary-background/20 rounded-full flex items-center justify-center">
                      <img src="images/user-pain-01.svg" alt="" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                    Accessibility
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Difficulty navigating crowded platforms and trains for people with disabilities
                  </p>
                </div>
                
                {/* Pain Point 2 */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-primary-background/10 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary-background/20 rounded-full flex items-center justify-center">
                      <img src="images/user-pain-02.svg" alt="" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                    Navigation
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Confusion at interchange stations and lines, especially for new users
                  </p>
                </div>
                
                {/* Pain Point 3 */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-primary-background/10 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary-background/20 rounded-full flex items-center justify-center">
                      <img src="images/user-pain-03.svg" alt="" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                    Convenience
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Severe overcrowding during peak hours
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 15 - Recommendations */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-background font-poppins">
                Recommendations
              </h2>
              
              <div className="space-y-12">
                {/* Recommendation 1 - Accessibility */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="images/user-pain-03.svg" alt="" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                      Accessibility
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed pl-20">
                    Explore design solutions to mitigate the impact of crowding on accessibility, such as priority boarding areas or designated accessible routes within stations and increase staff presence to assist passengers with disabilities.
                  </p>
                </div>
                
                {/* Recommendation 2 - Navigation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="images/user-pain-02.svg" alt="" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                      Navigation
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed pl-20">
                    Using interactive digital displays to provide personalized navigation assistance might help with decreasing confusion and boarding right trains.
                  </p>
                </div>
                
                {/* Recommendation 3 - Convenience */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="images/user-pain-03.svg" alt="" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary font-poppins">
                      Convenience
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed pl-20">
                    Provide more real-time information about train capacity on approaching trains, allowing passengers to make informed decisions about which train to board.
                  </p>
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

export default DelhiMetroPage;
