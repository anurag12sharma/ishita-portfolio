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

      <style>{`
        .represent-bihar-root h1,
        .represent-bihar-root h2,
        .represent-bihar-root h3,
        .represent-bihar-root h4 {
          color: #191919 !important;
        }

        .represent-bihar-root p {
          color: #5E5E5E !important;
        }

        /* highlighted spans */
        .represent-bihar-root span{
          color: #A16E28 !important;
        }

      `}</style>

      <div className="w-full bg-white min-h-screen represent-bihar-root">
        <Header />

        <main className="flex-grow">

              <section
                className="min-h-screen flex items-center justify-center bg-top sm:bg-center md:bg-right lg:bg-center bg-cover px-6 sm:px-12 py-20 relative overflow-hidden"
                style={{ backgroundImage: "url('/images/rep-bg.png')" }}
              >
          {/* Slide 1 - Title Slide */}
            <div className="max-w-6xl w-full relative z-10">
              <div className="text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                  <span
                    style={{
                      width: '522.5023193359375px',
                      height: '129.58612060546875px',
                      opacity: 1,
                      fontFamily: '\"Rozha One\", serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                      display: 'inline-block',
                    }}
                  >
                    Represent
                  </span>
                  <br />
                  <span
                    style={{
                      width: '632.6852416992188px',
                      height: '229.3743896484375px',
                      opacity: 1,
                      fontFamily: '"Rozha One", serif',
                      fontWeight: 400,
                      fontSize: 180,
                      fontStyle: 'normal',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                      display: 'inline-block',
                      marginTop: -42,
                    }}
                  >
                    Bihar
                  </span>
                </h1>

                <p
                  className='relative bottom-15'
                  style={{
                    width: '757.4205322265625px',
                    height: '90.08662414550781px',
                    opacity: 1,
                    fontFamily: '"Laila", serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 40,
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#E6E6E6',
                    display: 'inline-block',
                  }}
                >
                  Everyone has a story to tell..
                </p>
              </div>
            </div>
          </section>

          {/* Slide 2 - What is Represent Bihar? */}
          <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                What is Represent Bihar?
              </h2>

              <div className="space-y-8">
                <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed">
                  A <span className="font-semibold    ">digital storytelling platform</span> designed to connect individuals with the rich cultural heritage of Bihar by providing access to local stories, including myths, poems, songs, and folk tales
                </p>

                <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed">
                  This initiative leverages digital storytelling to safeguard a vital cultural heritage, empower local voices, and bridge the gap for a dispersed diaspora, fostering a deeper connection to their roots.
                </p>
              </div>
              {/* What we did */}
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                  What we did
                </h2>

                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Evaluate</span>
                  <span className="w-3 h-3 bg-amber   rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Research</span>
                  <span className="w-3 h-3 bg-amber   rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Reimagine</span>
                  <span className="w-3 h-3 bg-amber   rounded-full"></span>
                  <span className="text-lg font-semibold text-text-secondary font-poppins">Redesign</span>
                </div>

                <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                  The work was done in collaboration with Professor Tapan Parikh and the Represent team. Our work is available to read on <a href="#" className="    underline hover: -900">ResearchGate</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 3 - What we did & What we asked ourselves */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">

              {/* What we asked ourselves */}
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  What we asked ourselves
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className=' relative bottom-20'>
                    <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed w-[170%]">
                      How might we redesign to create an authentic, <span className="font-semibold    ">immersive digital experience</span> that preserves cultural heritage, resonates emotionally, and engages modern users across geographies?
                    </p>

                    <div className="mt-20 space-y-4">
                      <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                        Defining the goals
                      </h3>
                      <p className="mt-10 text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed w-[130%]">
                        We conducted <span className="font-semibold    ">cognitive walk-throughs</span> within the team to jot down some initial thoughts and observations about the existing interface. We followed a simple, semi-structured script while prompting each other for deeper insights on interactive elements of the interface.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                      <img src="/images/about-03-brown.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 - Analysing the existing interface */}
          <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-orange-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Analysing the existing interface
                </h2>

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                        A cognitive walkthrough exercise
                      </h3>

                <div className="space-y-6 text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed w-[90%]">
                  <p>
                    We conducted <span className="font-semibold    ">cognitive walk-throughs</span> within the team to jot down some initial thoughts and observations about the existing interface. We followed a simple, semi-structured script while prompting each other for deeper insights on interactive elements of the interface.
                  </p>

                  <p>
                    The exercise revealed several key usability issues which affected the immersive-ness of the story streaming experience and the navigability of the website. The overall experience felt static that failed to capture the vibrancy of the orations.
                  </p>
                </div>

                {/* Image placeholder with annotations - to be replaced later */}
                <div className="mt-12 space-y-6">
                  <img src="/images/rep-01.svg" alt=""/>
                </div>

                <div className="mt-12 space-y-6">
                  <img src="/images/rep-02.svg" alt=""/>
                </div>

                <div className="mt-12 space-y-6">
                  <img src="/images/rep-03.svg" alt=""/>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6 - Groundwork */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary font-montserrat">
                  Groundwork
                </h2>

              <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed w-[85%]">
                To understand the potential user group, we conducted <span className="font-semibold    ">4 semi-structured telephonic interviews</span>. The insights guided us in creating <span className="font-semibold    ">personas</span> and <span className="font-semibold    ">end-to-end user journey flowcharts</span>.
              </p>

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                  Common themes that emerged in user research
                </h3>

              <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-04.svg" alt=""/>
              </div>
                
              </div>
            </div>
          </section>


          {/* Slide 7 - User Categories (Part 1) */}
          <section className="min-h-screen flex items-center justify-center bg-orange-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-16">
              <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed">
                We divided the potential users in <span className="font-semibold    ">4 broad categories</span> and created personas for each of those categories.
              </p>

              <div className="mt-12 space-y-6 ml-80">
                <img src="/images/rep-05.svg" alt=""/>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                  A sample user persona for the young adult category
                </h3>

              <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-06.svg" alt=""/>
              </div>
                
              </div>
            </div>
          </section>
          {/* Slide 8 - User Journey Flowchart */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-7xl w-full space-y-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-text-primary font-poppins">
                  Understanding the journey of the user
                </h3>

              <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-07.svg" alt=""/>
              </div>
                
              </div>
              
            </div>
          </section>


          {/* Slide 9 - Visually decoding the soul of Bihar */}
          <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-amber-50 px-6 sm:px-12 py-20">
              <div className="mt-12 space-y-6 ml-24">
                <img src="/images/rep-08.svg" alt=""/>
              </div>
          </section>


          {/* Slide 11 - Ideation */}
          <section className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="">
                <img src="/images/rep-09.svg" alt=""/>
              </div>
          </section>


        {/* ----------------- */}
        <section className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="">
                <img src="/images/rep-10.svg" alt=""/>
              </div>
          </section>
          <section className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="">
                <img src="/images/rep-11.svg" alt=""/>
              </div>
          </section>
        {/* ----------------- */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RepresentBihar;
