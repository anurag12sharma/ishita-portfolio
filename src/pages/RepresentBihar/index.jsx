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

      <div className="w-full bg-white min-h-screen">
        <Header />

        <main className="flex-grow">
          {/* Slide 1 - Title Slide */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 px-6 sm:px-12 py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-amber-200 to-transparent"></div>
            </div>

            <div className="max-w-6xl w-full relative z-10">
              <div className="text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary font-montserrat leading-tight">
                  Represent
                  <br />
                  <span className="text-amber-800">Bihar</span>
                </h1>

                <p className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-poppins italic">
                  Everyone has a story to tell..
                </p>

                {/* Image collage placeholder */}
                <div className="grid grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 1</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 2</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 3</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 4</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 5</p>
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Photo 6</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 2 - What is Represent Bihar? */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                What is Represent Bihar?
              </h2>

              <div className="space-y-8">
                <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                  A <span className="font-semibold text-amber-800">digital storytelling platform</span> designed to connect individuals with the rich cultural heritage of Bihar by providing access to local stories, including myths, poems, songs, and folk tales
                </p>

                <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                  This initiative leverages digital storytelling to safeguard a vital cultural heritage, empower local voices, and bridge the gap for a dispersed diaspora, fostering a deeper connection to their roots.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 3 - What we did & What we asked ourselves */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              {/* What we did */}
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                  What we did
                </h2>

                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Evaluate</span>
                  <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Research</span>
                  <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Reimagine</span>
                  <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Redesign</span>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  The work was done in collaboration with Professor Tapan Parikh and the Represent team. Our work is available to read on <a href="#" className="text-amber-800 underline hover:text-amber-900">ResearchGate</a>.
                </p>
              </div>

              {/* What we asked ourselves */}
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  What we asked ourselves
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                      How might we redesign to create an authentic, <span className="font-semibold text-amber-800">immersive digital experience</span> that preserves cultural heritage, resonates emotionally, and engages modern users across geographies?
                    </p>

                    <div className="mt-8 space-y-4">
                      <h3 className="text-xl font-semibold text-text-primary font-poppins">
                        Defining the goals
                      </h3>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        We conducted <span className="font-semibold text-amber-800">cognitive walk-throughs</span> within the team to jot down some initial thoughts and observations about the existing interface. We followed a simple, semi-structured script while prompting each other for deeper insights on interactive elements of the interface.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-sm aspect-square bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-lg font-medium">Illustration</p>
                        <p className="text-sm mt-2">Person thinking/working</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 - Analysing the existing interface */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Analysing the existing interface
              </h2>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  A cognitive walkthrough exercise
                </h3>

                <div className="space-y-6 text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  <p>
                    We conducted <span className="font-semibold text-amber-800">cognitive walk-throughs</span> within the team to jot down some initial thoughts and observations about the existing interface. We followed a simple, semi-structured script while prompting each other for deeper insights on interactive elements of the interface.
                  </p>

                  <p>
                    The exercise revealed several key usability issues which affected the immersive-ness of the story streaming experience and the navigability of the website. The overall experience felt static that failed to capture the vibrancy of the orations.
                  </p>
                </div>

                {/* Image placeholder with annotations - to be replaced later */}
                <div className="mt-12 space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {/* Main website screenshot placeholder */}
                    <div className="relative bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg overflow-hidden">
                      <div className="aspect-video flex items-center justify-center">
                        <div className="text-center text-gray-500 font-poppins p-8">
                          <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm font-medium">Website Screenshot Placeholder</p>
                          <p className="text-xs mt-2 text-gray-400">Will include annotated screenshot of existing interface</p>
                          <p className="text-xs text-gray-400">with handwritten notes pointing to usability issues</p>
                        </div>
                      </div>
                    </div>

                    {/* Key findings - styled like the image */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-6 text-sm text-text-secondary font-poppins">
                      <div className="space-y-2">
                        <p className="font-semibold text-text-primary">More Points</p>
                        <ul className="space-y-1 list-decimal list-inside">
                          <li>Loading Page</li>
                          <li>Intro to websites functionalities</li>
                          <li>Story like elements on the first page itself</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 5 - Interface Mockups (Two Views) */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-20">

              {/* First Interface View - Video Presentation & Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Image Placeholder - Video Presentation with Map */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <div className="aspect-video flex items-center justify-center bg-white rounded-lg">
                      <div className="text-center text-gray-500 font-poppins p-8">
                        <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium">Interface Screenshot 1</p>
                        <p className="text-xs mt-2 text-gray-400">Video presentation + Map view with markers</p>
                        <p className="text-xs text-gray-400">Will include handwritten annotations</p>
                      </div>
                    </div>
                  </div>

                  {/* Annotation hints */}
                  <div className="text-xs text-gray-500 font-poppins italic space-y-1 ml-4">
                    <p>• Labels to add: "video presentation", "Highlights", "Bihar"</p>
                    <p>• Annotations: "Markers Bar", "Add Instructions", "Legends"</p>
                  </div>
                </div>

                {/* Right - Key Points */}
                <div className="space-y-4">
                  <p className="font-semibold text-lg text-text-primary font-poppins">More Points</p>
                  <ul className="space-y-2 text-base text-text-secondary font-poppins list-decimal list-inside">
                    <li>Add images in the markers</li>
                    <li>Add instructions</li>
                    <li>Add legends</li>
                    <li>Language Filtering</li>
                    <li>Navigation</li>
                  </ul>
                </div>
              </div>

              {/* Second Interface View - Story Page */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Image Placeholder - Story Content Page */}
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 font-poppins italic">Relevant Images</p>
                  <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6 shadow-lg">
                    <div className="aspect-[3/4] flex items-center justify-center bg-white rounded-lg">
                      <div className="text-center text-gray-500 font-poppins p-8">
                        <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium">Interface Screenshot 2</p>
                        <p className="text-xs mt-2 text-gray-400">Story page: "Sarahi Aur Bihadhori: A Love Story in Song"</p>
                        <p className="text-xs text-gray-400">Will include handwritten annotations</p>
                      </div>
                    </div>
                  </div>

                  {/* Annotation hints */}
                  <div className="text-xs text-gray-500 font-poppins italic space-y-1 ml-4">
                    <p>• Annotations: "immerse", "transition bar", "functionality bar"</p>
                    <p>• Note: "Add Content"</p>
                  </div>
                </div>

                {/* Right - Key Points */}
                <div className="space-y-4">
                  <p className="font-semibold text-lg text-text-primary font-poppins">More Points</p>
                  <ul className="space-y-2 text-base text-text-secondary font-poppins list-decimal list-inside">
                    <li>Work on immersion</li>
                    <li>Add elements to enhance audio streaming experience</li>
                    <li>Make interaction elements descriptive</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>


          {/* Slide 6 - Groundwork */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Groundwork
              </h2>

              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                To understand the potential user group, we conducted <span className="font-semibold text-amber-800">4 semi-structured telephonic interviews</span>. The insights guided us in creating <span className="font-semibold text-amber-800">personas</span> and <span className="font-semibold text-amber-800">end-to-end user journey flowcharts</span>.
              </p>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Common themes that emerged in user research
                </h3>

                {/* Word Cloud Display */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-sm">
                  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 leading-relaxed">
                    {/* Large keywords */}
                    <span className="text-4xl sm:text-5xl font-bold text-gray-800 font-poppins">storytelling</span>
                    <span className="text-4xl sm:text-5xl font-bold text-gray-800 font-poppins">usability</span>

                    {/* Medium-large keywords */}
                    <span className="text-3xl sm:text-4xl font-semibold text-amber-700 font-poppins">experience</span>
                    <span className="text-3xl sm:text-4xl font-semibold text-gray-700 font-poppins">connection</span>
                    <span className="text-3xl sm:text-4xl font-semibold text-amber-600 font-poppins">immersion</span>
                    <span className="text-3xl sm:text-4xl font-semibold text-orange-600 font-poppins">guidance</span>

                    {/* Medium keywords */}
                    <span className="text-2xl sm:text-3xl font-medium text-green-700 font-poppins">intuitive</span>
                    <span className="text-2xl sm:text-3xl font-medium text-amber-800 font-poppins">heritage</span>
                    <span className="text-2xl sm:text-3xl font-medium text-gray-600 font-poppins">features</span>
                    <span className="text-2xl sm:text-3xl font-medium text-blue-600 font-poppins">exploration</span>
                    <span className="text-2xl sm:text-3xl font-medium text-orange-700 font-poppins">navigation</span>
                    <span className="text-2xl sm:text-3xl font-medium text-amber-700 font-poppins">clarity</span>
                    <span className="text-2xl sm:text-3xl font-medium text-gray-700 font-poppins">discoverability</span>
                    <span className="text-2xl sm:text-3xl font-medium text-green-600 font-poppins">flow</span>
                    <span className="text-2xl sm:text-3xl font-medium text-red-600 font-poppins">refinement</span>

                    {/* Smaller keywords */}
                    <span className="text-xl sm:text-2xl font-normal text-green-600 font-poppins">aesthetic</span>
                    <span className="text-xl sm:text-2xl font-normal text-gray-600 font-poppins">accessibility</span>
                    <span className="text-xl sm:text-2xl font-normal text-amber-600 font-poppins">interface</span>
                    <span className="text-xl sm:text-2xl font-normal text-orange-500 font-poppins">design</span>
                    <span className="text-xl sm:text-2xl font-normal text-green-700 font-poppins">engagement</span>
                    <span className="text-xl sm:text-2xl font-normal text-gray-500 font-poppins">authenticity</span>
                    <span className="text-xl sm:text-2xl font-normal text-blue-500 font-poppins">immersive</span>
                    <span className="text-xl sm:text-2xl font-normal text-amber-600 font-poppins">belonging</span>
                    <span className="text-xl sm:text-2xl font-normal text-gray-600 font-poppins">representation</span>
                    <span className="text-xl sm:text-2xl font-normal text-orange-600 font-poppins">functionality</span>
                    <span className="text-xl sm:text-2xl font-normal text-red-500 font-poppins">disconnected</span>
                    <span className="text-xl sm:text-2xl font-normal text-gray-500 font-poppins">interaction</span>

                    {/* Small keywords */}
                    <span className="text-lg sm:text-xl font-normal text-orange-500 font-poppins">emotion</span>
                    <span className="text-lg sm:text-xl font-normal text-green-500 font-poppins">community</span>
                    <span className="text-lg sm:text-xl font-normal text-amber-500 font-poppins">unclear</span>
                    <span className="text-lg sm:text-xl font-normal text-gray-500 font-poppins">bihar</span>
                    <span className="text-lg sm:text-xl font-normal text-blue-500 font-poppins">map</span>
                    <span className="text-lg sm:text-xl font-normal text-orange-400 font-poppins">sharing</span>
                    <span className="text-lg sm:text-xl font-normal text-gray-500 font-poppins">confusion</span>
                    <span className="text-lg sm:text-xl font-normal text-amber-500 font-poppins">roots</span>
                    <span className="text-lg sm:text-xl font-normal text-green-500 font-poppins">culture</span>
                    <span className="text-lg sm:text-xl font-normal text-red-400 font-poppins">missing</span>
                    <span className="text-lg sm:text-xl font-normal text-gray-400 font-poppins">visual</span>
                    <span className="text-lg sm:text-xl font-normal text-blue-400 font-poppins">nostalgia</span>
                    <span className="text-lg sm:text-xl font-normal text-orange-400 font-poppins">voices</span>
                    <span className="text-lg sm:text-xl font-normal text-gray-400 font-poppins">emotional</span>
                    <span className="text-lg sm:text-xl font-normal text-amber-400 font-poppins">local</span>
                    <span className="text-lg sm:text-xl font-normal text-green-400 font-poppins">saving</span>
                    <span className="text-lg sm:text-xl font-normal text-gray-400 font-poppins">filters</span>
                    <span className="text-lg sm:text-xl font-normal text-red-400 font-poppins">emotionless</span>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 7 - User Categories (Part 1) */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                We divided the potential users in <span className="font-semibold text-amber-800">4 broad categories</span> and created personas for each of those categories.
              </p>

              {/* User Categories Diagram */}
              <div className="flex items-center justify-center py-8">
                <div className="relative w-full max-w-4xl">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-amber-200 border-2 border-amber-400 rounded-lg px-8 py-6 shadow-md">
                      <p className="text-lg font-semibold text-gray-800 font-poppins text-center whitespace-nowrap">
                        User Categories
                      </p>
                    </div>
                  </div>

                  {/* Grid Layout for Category Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-8">
                    {/* Top Left - Pink/Magenta */}
                    <div className="flex justify-end items-end">
                      <div className="bg-pink-200 border-2 border-pink-400 rounded-lg px-6 py-4 shadow-md max-w-xs">
                        <p className="text-base font-medium text-gray-800 font-poppins">
                          Middle Aged Adult: A person not from Bihar
                        </p>
                      </div>
                    </div>

                    {/* Top Right - Purple */}
                    <div className="flex justify-start items-end">
                      <div className="bg-purple-200 border-2 border-purple-400 rounded-lg px-6 py-4 shadow-md max-w-xs">
                        <p className="text-base font-medium text-gray-800 font-poppins">
                          Young Adult: A person not from Bihar
                        </p>
                      </div>
                    </div>

                    {/* Bottom Left - Cyan */}
                    <div className="flex justify-end items-start">
                      <div className="bg-cyan-200 border-2 border-cyan-400 rounded-lg px-6 py-4 shadow-md max-w-xs">
                        <p className="text-base font-medium text-gray-800 font-poppins">
                          Middle Aged Adult: A person from Bihar but away
                        </p>
                      </div>
                    </div>

                    {/* Bottom Right - Green */}
                    <div className="flex justify-start items-start">
                      <div className="bg-green-200 border-2 border-green-400 rounded-lg px-6 py-4 shadow-md max-w-xs">
                        <p className="text-base font-medium text-gray-800 font-poppins">
                          Young Adult: A person from Bihar but away
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 7 - User Persona (Part 2) */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                A sample user persona for the young adult category
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Basic Information & Bio */}
                <div className="space-y-6">
                  {/* Basic Information Card */}
                  <div>
                    <div className="inline-block bg-purple-200 border-2 border-purple-400 rounded-lg px-4 py-2 mb-4">
                      <p className="text-sm font-semibold text-gray-800 font-poppins">Basic Information</p>
                    </div>

                    <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-6 space-y-4">
                      {/* Profile Image Placeholder */}
                      <div className="flex items-start gap-6">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg border-2 border-gray-300 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <div className="text-center text-gray-400 text-xs">
                            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <p className="mt-1">Photo</p>
                          </div>
                        </div>

                        {/* Basic Details */}
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 font-poppins mb-2">Prakhar</h4>
                          <p className="text-sm text-gray-700 font-poppins mb-3">
                            Born in Patna, living in New Delhi since the age of 4
                          </p>
                          <ul className="text-sm text-gray-700 font-poppins space-y-1 list-disc list-inside">
                            <li>25</li>
                            <li>Digital Marketing Manager</li>
                            <li>Delhi</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 font-poppins mb-3">Bio</h5>
                    <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-6">
                      <p className="text-sm text-gray-800 font-poppins leading-relaxed">
                        Prakhar (he/him/his) is a digital marketing manager in a startup in Delhi and is 25 years old. He was born in Patna and lived there for 4 years until he moved to Delhi with his family. He visits Bihar twice a year for various festivals as his parents' families live there. On growing up, Prakhar has started to pay more attention and care to his identity of being a Bihari. While growing up, he came across various believes about his native place that sometimes made him feel frustrated for being misinterpreted. Now, he wishes to know more about the authentic culture of his place and its stories that he can share among his peers to debunk myths and stereotypes and speak for its beauty and culture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - More About Prakhar */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block bg-purple-300 border-2 border-purple-500 rounded-lg px-4 py-2 mb-4">
                      <p className="text-sm font-semibold text-gray-900 font-poppins">Young Adult: A person from Bihar but away</p>
                    </div>
                  </div>

                  <div className="inline-block bg-purple-200 border-2 border-purple-400 rounded-lg px-4 py-2 mb-4">
                    <p className="text-sm font-semibold text-gray-800 font-poppins">More about Prakhar</p>
                  </div>

                  <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-6 space-y-8">
                    {/* Interests & Goals Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Interests */}
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 font-poppins mb-3">Interests</h5>
                        <div className="space-y-2">
                          <div className="bg-orange-300 border border-orange-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Talking with his parents about their past</p>
                          </div>
                          <div className="bg-orange-300 border border-orange-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Building creative Instagram strategies</p>
                          </div>
                          <div className="bg-orange-200 border border-orange-300 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Binge-watching short documentary films</p>
                          </div>
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 font-poppins mb-3">Goals</h5>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-cyan-300 border border-cyan-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Find authentic and true stories about Bihar to share among his peers</p>
                          </div>
                          <div className="bg-cyan-300 border border-cyan-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Share the videos with all their non-Bihari friends</p>
                          </div>
                          <div className="bg-cyan-400 border border-cyan-500 rounded p-2 col-span-2">
                            <p className="text-xs text-gray-800 font-poppins">Does he identify and speak for it enough?</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Needs & Pain Points Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Needs and expectations */}
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 font-poppins mb-3">Needs and expectations</h5>
                        <div className="space-y-2">
                          <div className="bg-orange-300 border border-orange-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Need of educational and informative content he did not know</p>
                          </div>
                          <div className="bg-orange-200 border border-orange-300 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Need to share how significant places and stories of Bihar</p>
                          </div>
                          <div className="bg-orange-200 border border-orange-300 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Discover unheard of story covering various aspects of Bihar</p>
                          </div>
                        </div>
                      </div>

                      {/* Pain points and frustrations */}
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 font-poppins mb-3">Pain points and frustrations</h5>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-lime-300 border border-lime-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Biased information and stories about Bihar in media space</p>
                          </div>
                          <div className="bg-yellow-300 border border-yellow-400 rounded p-2">
                            <p className="text-xs text-gray-800 font-poppins">Stereotypes towards him and his culture</p>
                          </div>
                          <div className="bg-yellow-200 border border-yellow-300 rounded p-2 col-span-2">
                            <p className="text-xs text-gray-800 font-poppins">Lack of authentic and accessible information about Bihar from where he can educate his peers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 8 - User Journey Flowchart */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-montserrat">
                  User Journey Flowchart
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary font-poppins">
                  A detailed end-to-end user journey mapping Ritika's experience navigating through the website, highlighting key interactions, pain points, and usability issues discovered during the cognitive walkthrough.
                </p>
              </div>

              {/* Flowchart Image Placeholder */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-white rounded-xl p-8 min-h-[600px] flex items-center justify-center">
                  <div className="text-center text-gray-500 font-poppins max-w-2xl">
                    <svg className="w-32 h-32 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-lg font-semibold mb-3">User Journey Flowchart Placeholder</p>
                    <p className="text-sm text-gray-400 mb-2">This will include the complete user journey flowchart showing:</p>
                    <ul className="text-sm text-gray-400 text-left space-y-1 inline-block">
                      <li>• User profile: Ritika (21, Bihari living in Kolkata)</li>
                      <li>• Navigation flow: Home → About → Back to Home → Enter → Map/Story paths</li>
                      <li>• Key interaction points highlighted in purple (Explore Map, Story Page, Explore Button)</li>
                      <li>• Pink annotation boxes showing user feedback and pain points</li>
                      <li>• Blue navigation nodes showing the user's path</li>
                      <li>• Yellow ENTER decision point</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Insights Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-gray-900 font-poppins mb-2">Navigation Issues</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Users found story navigation buttons confusing, with the map not reflecting location changes
                  </p>
                </div>

                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-gray-900 font-poppins mb-2">Visual Feedback</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Graphics and pictures were not contextualised; audio quality needed enhancement
                  </p>
                </div>

                <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-gray-900 font-poppins mb-2">Content Clarity</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Lack of back button, confusing red dots, and unclear interaction elements
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 9 - Visually decoding the soul of Bihar */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat leading-tight">
                  Visually decoding the soul of Bihar
                </h2>

                <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                  We <span className="font-semibold text-amber-800">mood-boarded</span> and gathered inspiration for colors, textures, typography, and traditional motifs to bring out the <span className="font-semibold text-amber-800">true feel of Bihar's culture</span> in the interface in a way that could do justice to Bihar, it's stories, and the people.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Its people and culture
                </h3>

                {/* Moodboard Image Placeholder */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                    <div className="text-center text-gray-500 font-poppins max-w-2xl p-8">
                      <svg className="w-32 h-32 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-semibold mb-3">Moodboard Image Collage Placeholder</p>
                      <p className="text-sm text-gray-400 mb-2">This will include a large inspirational moodboard collage featuring:</p>
                      <ul className="text-sm text-gray-400 text-left space-y-1 inline-block">
                        <li>• Traditional Bihar art and Madhubani paintings</li>
                        <li>• Cultural festivals and people in traditional attire</li>
                        <li>• Local cuisine and food photography</li>
                        <li>• Architectural landmarks and temples</li>
                        <li>• Street scenes and daily life</li>
                        <li>• Cultural performances and dances</li>
                        <li>• Textures, patterns, and traditional motifs</li>
                      </ul>
                      <p className="text-xs text-gray-400 mt-4 italic">Image dimensions: Wide landscape format to showcase the rich visual diversity</p>
                    </div>
                  </div>
                </div>

                {/* Design Elements Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Colors</h5>
                    <p className="text-xs text-gray-700 font-poppins">
                      Vibrant reds, oranges, yellows, and traditional earthy tones
                    </p>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Patterns</h5>
                    <p className="text-xs text-gray-700 font-poppins">
                      Madhubani art motifs and traditional geometric designs
                    </p>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Imagery</h5>
                    <p className="text-xs text-gray-700 font-poppins">
                      Authentic photos of people, places, food, and cultural practices
                    </p>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Typography</h5>
                    <p className="text-xs text-gray-700 font-poppins">
                      Warm, welcoming fonts that reflect cultural authenticity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 10 - Its colours and vibrancy */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary font-poppins">
                Its colours and vibrancy
              </h3>

              {/* Color Moodboard Image Placeholder */}
              <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="bg-white rounded-xl overflow-hidden min-h-[600px] flex items-center justify-center">
                  <div className="text-center text-gray-500 font-poppins max-w-2xl p-8">
                    <svg className="w-32 h-32 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <p className="text-lg font-semibold mb-3">Color Palette Moodboard Placeholder</p>
                    <p className="text-sm text-gray-400 mb-2">This will include a comprehensive color palette moodboard featuring:</p>
                    <ul className="text-sm text-gray-400 text-left space-y-1 inline-block">
                      <li>• Spice photos showing natural earthy tones (turmeric, red chili, cumin, etc.)</li>
                      <li>• Color swatch grids with hex codes</li>
                      <li>• Vibrant reds, oranges, yellows extracted from cultural elements</li>
                      <li>• Earthy browns, golds, and warm tones</li>
                      <li>• Madhubani art pattern samples</li>
                      <li>• Traditional textile and food photography</li>
                      <li>• Color codes visible (e.g., #DECF60, #D6AC4F, #8B5320, #752D07, #49040C)</li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-4 italic">Large collage format showcasing the rich color palette of Bihar</p>
                  </div>
                </div>
              </div>

              {/* Color Palette Key Categories */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow"></div>
                  <p className="text-xs text-center text-gray-700 font-poppins font-semibold">Vibrant Reds</p>
                  <p className="text-xs text-center text-gray-500 font-poppins">Sacred, energetic</p>
                </div>

                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow"></div>
                  <p className="text-xs text-center text-gray-700 font-poppins font-semibold">Warm Oranges</p>
                  <p className="text-xs text-center text-gray-500 font-poppins">Festive, welcoming</p>
                </div>

                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow"></div>
                  <p className="text-xs text-center text-gray-700 font-poppins font-semibold">Golden Yellows</p>
                  <p className="text-xs text-center text-gray-500 font-poppins">Auspicious, bright</p>
                </div>

                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-br from-amber-700 to-orange-900 rounded-lg shadow"></div>
                  <p className="text-xs text-center text-gray-700 font-poppins font-semibold">Earthy Browns</p>
                  <p className="text-xs text-center text-gray-500 font-poppins">Grounded, natural</p>
                </div>

                <div className="space-y-2">
                  <div className="h-20 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-lg shadow"></div>
                  <p className="text-xs text-center text-gray-700 font-poppins font-semibold">Vibrant Pinks</p>
                  <p className="text-xs text-center text-gray-500 font-poppins">Traditional, bold</p>
                </div>
              </div>

              {/* Color Inspiration Source */}
              <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6">
                <p className="text-base text-gray-800 font-poppins leading-relaxed">
                  <span className="font-semibold text-amber-800">Color Inspiration:</span> The palette draws from Bihar's spices, traditional Madhubani art, festive celebrations, and the natural landscape—creating a warm, authentic, and culturally rooted visual language.
                </p>
              </div>
            </div>
          </section>


          {/* Slide 11 - Ideation */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                  Ideation
                </h2>

                <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                  We, as a team, started ideating and brainstorming possible <span className="font-semibold text-amber-800">interface designs</span> and <span className="font-semibold text-amber-800">interactions</span>. We aimed to ground our design in four pillars: Immersion, Authenticity, Accessibility, and Emotional Resonance.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Initial explorations: <span className="text-text-primary">Landing page</span>
                </h3>

                {/* Landing Page Mockups */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Mockup 1 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-orange-200 to-amber-300 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-gray-600 font-poppins p-6">
                        <svg className="w-16 h-16 mx-auto mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">Landing Page Version 1</p>
                        <p className="text-xs mt-1 text-gray-500">Sunset/river scene with "Represent Bihar"</p>
                      </div>
                    </div>
                  </div>

                  {/* Mockup 2 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-red-900 to-orange-800 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-white font-poppins p-6">
                        <svg className="w-16 h-16 mx-auto mb-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">Landing Page Version 2</p>
                        <p className="text-xs mt-1 text-white/70">"About" page with rich burgundy theme</p>
                      </div>
                    </div>
                  </div>

                  {/* Mockup 3 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-yellow-700 to-green-800 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-white font-poppins p-6">
                        <svg className="w-16 h-16 mx-auto mb-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium">Landing Page Version 3</p>
                        <p className="text-xs mt-1 text-white/70">Earth-toned alternative with overlay text</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iteration Note */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200">
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  Our iterations of the 'About Page'. Through multiple versions, we tried to figure out the best way to place the necessary information about the website, while bringing out the essence of Bihar when a user lands on the platform.
                </p>
              </div>

              {/* Design Pillars */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-white border-2 border-amber-400 rounded-lg p-4 text-center">
                  <p className="text-base font-semibold text-amber-800 font-poppins">Immersion</p>
                </div>
                <div className="bg-white border-2 border-amber-400 rounded-lg p-4 text-center">
                  <p className="text-base font-semibold text-amber-800 font-poppins">Authenticity</p>
                </div>
                <div className="bg-white border-2 border-amber-400 rounded-lg p-4 text-center">
                  <p className="text-base font-semibold text-amber-800 font-poppins">Accessibility</p>
                </div>
                <div className="bg-white border-2 border-amber-400 rounded-lg p-4 text-center">
                  <p className="text-base font-semibold text-amber-800 font-poppins">Emotional Resonance</p>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 12 - Initial explorations: Interactive map */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary font-poppins">
                Initial explorations: <span className="text-text-primary">Interactive map</span>
              </h3>

              {/* Map Mockups */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Map Version 1 - Brown Panel */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 aspect-[4/3] flex items-center justify-center p-4">
                    <div className="relative w-full h-full bg-yellow-50/50 rounded border border-amber-200 flex items-center justify-center">
                      <div className="text-center text-gray-600 font-poppins">
                        <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p className="text-xs font-medium">Map V1</p>
                        <p className="text-xs text-gray-500 mt-1">Brown info panel</p>
                      </div>
                      {/* Brown panel indicator */}
                      <div className="absolute bottom-2 right-2 w-16 h-12 bg-amber-800 rounded opacity-50"></div>
                    </div>
                  </div>
                </div>

                {/* Map Version 2 - Yellow Panel */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 aspect-[4/3] flex items-center justify-center p-4">
                    <div className="relative w-full h-full bg-yellow-50/50 rounded border border-amber-200 flex items-center justify-center">
                      <div className="text-center text-gray-600 font-poppins">
                        <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p className="text-xs font-medium">Map V2</p>
                        <p className="text-xs text-gray-500 mt-1">Yellow info panel</p>
                      </div>
                      {/* Yellow panel indicator */}
                      <div className="absolute top-2 right-2 w-20 h-16 bg-yellow-400 rounded opacity-60"></div>
                    </div>
                  </div>
                </div>

                {/* Map Version 3 - Green Panel */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 aspect-[4/3] flex items-center justify-center p-4">
                    <div className="relative w-full h-full bg-yellow-50/50 rounded border border-amber-200 flex items-center justify-center">
                      <div className="text-center text-gray-600 font-poppins">
                        <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p className="text-xs font-medium">Map V3</p>
                        <p className="text-xs text-gray-500 mt-1">Green info panel</p>
                      </div>
                      {/* Green panel indicator */}
                      <div className="absolute top-2 right-2 w-20 h-16 bg-green-600 rounded opacity-60"></div>
                      {/* Peach overlay indicator */}
                      <div className="absolute bottom-4 left-4 right-12 h-8 bg-orange-200 rounded opacity-40"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iteration Description */}
              <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6">
                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  Our iterations of the interactive map for exploring all available stories. We wanted to ensure that the map is interesting and vibrant in a way that invites explorations and gives all the stories a personal touch.
                </p>
              </div>

              {/* Map Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Story Markers</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Circular markers on the map showing story locations across Bihar
                  </p>
                </div>

                <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Info Panels</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Side panels displaying story details when markers are selected
                  </p>
                </div>

                <div className="bg-white border-2 border-amber-300 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-amber-800 font-poppins mb-2">Visual Exploration</h5>
                  <p className="text-xs text-gray-700 font-poppins">
                    Vibrant colors invite users to explore Bihar's rich storytelling heritage
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 13 - Initial explorations: Immersive story-listening experience */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary font-poppins">
                Initial explorations: <span className="text-text-primary">Immersive story-listening experience</span>
              </h3>

              {/* Story Player Mockups */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Video/Audio Player 1 - Dark Theme */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-amber-900 to-orange-950 aspect-video flex items-center justify-center p-6">
                    <div className="text-center text-white/70 font-poppins">
                      <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm">Story Player - Dark Theme</p>
                      <p className="text-xs mt-1 text-white/50">Madhubani art thumbnail with audio controls</p>
                    </div>
                  </div>
                </div>

                {/* Story Player 2 - Green Theme */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-green-700 to-emerald-800 aspect-video flex items-center justify-center p-6">
                    <div className="text-center text-white/70 font-poppins">
                      <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm">Story Player - Green Theme</p>
                      <p className="text-xs mt-1 text-white/50">Full story description with textual translations</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                Our explorations to make the users' listening experience more immersive and engaging by allowing them to go full screen and follow textual translations.
              </p>
            </div>
          </section>


          {/* Slide 14 - Prototyping Represent Bihar */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Prototyping Represent Bihar
              </h2>

              <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed">
                After the initial ideation phase, we prototyped the new interface of the platform. We grounded our design in authenticity of the culture of Bihar and aimed to surface the emotional resonance of users.
              </p>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  The landing page: before and after
                </h3>

                {/* Before/After Image Placeholder */}
                <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-xl p-6 shadow-lg">
                  <div className="bg-white rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
                    <div className="text-center text-gray-500 font-poppins p-8 max-w-xl">
                      <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-lg font-semibold mb-2">Landing Page Before/After Comparison</p>
                      <p className="text-sm text-gray-400">Split image showing the old design (left) and new design (right) of the bridge landing page</p>
                    </div>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  The initial landing page lacked refinement and intuition in interactive cues and the graphics, typography, and color scheme felt a bit haphazard.
                </p>

                {/* Updated Landing Pages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {/* Landing Page - Represent Bihar */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-yellow-700 to-amber-800 aspect-[3/4] flex items-center justify-center p-6">
                      <div className="text-center text-white/70 font-poppins">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <p className="text-sm font-medium">"Represent Bihar" Landing Page</p>
                        <p className="text-xs mt-1 text-white/50">Storyteller silhouette with tagline</p>
                      </div>
                    </div>
                  </div>

                  {/* About Page */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-amber-700 to-orange-800 aspect-[3/4] flex items-center justify-center p-6">
                      <div className="text-center text-white/70 font-poppins">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium">"About" Page</p>
                        <p className="text-xs mt-1 text-white/50">Site information with storyteller images</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    In the updated landing page, we defined a consistent color scheme and typography while using more symbolic visuals from Bihar and the pictures of real storytellers to bring in the cultural identity aspect.
                  </p>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The user can get more information about the website or start exploring the stories.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 15 - The map: before and after */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary font-poppins">
                The map: before and after
              </h3>

              {/* Map Image Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
                  <div className="text-center text-gray-500 font-poppins p-8 max-w-xl">
                    <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">Interactive Map Image</p>
                    <p className="text-sm text-gray-400">Map showing story markers across Bihar with limited interactivity</p>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                The initial interactive map was not too inviting for the users to explore and there was no other information about the story except for the title. It lacked several other interactive features.
              </p>

              {/* Updated Map */}
              <div className="bg-white rounded-xl p-6 shadow-lg mt-12">
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
                  <div className="text-center text-gray-500 font-poppins p-8 max-w-xl">
                    <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-lg font-semibold mb-2">Updated Interactive Map</p>
                    <p className="text-sm text-gray-400">Color-coded story markers with hover tooltips and navigation bar</p>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                For the new interactive map, we color-coded the stories based on their locations and added a hover interaction to provide additional information. A top navigation bar with options for reading more about the initiative, contacting the relevant people associated with the project, and applying filters for the stories was added.
              </p>
            </div>
          </section>


          {/* Slide 16 - Exploring and listening to stories: before and after */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary font-poppins">
                Exploring and listening to stories: before and after
              </h3>

              {/* Before - Two Images Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-xl p-4 shadow-lg">
                  <div className="bg-white rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-500 font-poppins p-6">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs">Story Card - Before</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-xl p-4 shadow-lg">
                  <div className="bg-white rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-500 font-poppins p-6">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-xs">Map View - Before</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                The initial story playing and navigating interface did not have important features like saving, sharing, or increasing the size of the screen to have a more immersive listening experience.
              </p>

              {/* After - Two Images Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-xl p-4 shadow-lg">
                  <div className="bg-white rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-500 font-poppins p-6">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-xs">Map with Tooltip - After</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-xl p-4 shadow-lg">
                  <div className="bg-white/10 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-center text-white/70 font-poppins p-6">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs">Full Screen Player - After</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                The updated interface design had the necessary actions like easy sharing and saving options. We wanted to create a better listening experience for a user hence an option to go full screen with translated captions to increase the immersive-ness was added.
              </p>
            </div>
          </section>


          {/* Slide 17 - Key takeaways */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Key takeaways
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="text-amber-700 text-xl font-bold flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    <span className="font-semibold text-amber-800">Design grounded in lived experiences:</span> Working directly with real users helped me understand how authentic feedback can meaningfully shape design decisions and usability improvements.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-amber-700 text-xl font-bold flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    <span className="font-semibold text-amber-800">Collaborative decision-making:</span> Co-creating with a team taught me how collective discussions and shared perspectives can strengthen the empathy quotient.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-amber-700 text-xl font-bold flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    <span className="font-semibold text-amber-800">Translating culture into design and balancing emotion with function:</span> Exploring design elements like color and typography helped me learn how small decisions can actually aid in capturing the cultural and emotional essence of a place.
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

export default RepresentBihar;
