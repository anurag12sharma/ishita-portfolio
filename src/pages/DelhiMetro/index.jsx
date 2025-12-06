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
        
        <main>
          {/* Slide 1 - Title Slide */}
          <div className='-mt-[10%] w-full overflow-hidden'>
            <img className="w-full block" src="./public/images/delhi-01.svg" alt="Delhi Metro Accessibility Study Title Slide" />
          </div>

          {/* Additional slides can be added here following the same pattern */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DelhiMetroPage;
