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
        {/* Preload the hero SVG so the browser prioritizes fetching it */}
        <link rel="preload" as="image" href="/images/rep.svg" />
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

          {/* <section
                className="min-h-screen flex items-center justify-center bg-top sm:bg-center md:bg-right lg:bg-center bg-cover px-6 sm:px-12 py-20 relative overflow-hidden"
                style={{ backgroundImage: "url('/images/rep-bg.png')" }}
              >
          {/* Slide 1 - Title Slide */}
          {/* <div className="max-w-6xl w-full relative z-10">
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
          </section> */}

          <div className='-mt-[10%] w-full overflow-hidden'>
            <img
              className="w-full block"
              src="/images/rep.svg"
              alt="Represent Bihar - hero"
              width="1920"
              height="1080"
              decoding="async"
              loading="eager"
              fetchpriority="high"
            />
          </div>


          {/* ----------------- */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RepresentBihar;
