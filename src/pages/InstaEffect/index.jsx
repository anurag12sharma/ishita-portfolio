import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const InstaEffectPage = () => {
  return (
    <>
      <Helmet>
        <title>Impact of Social Media on Body Image Satisfaction - Ishita Gupta</title>
        <meta name="description" content="Research study evaluating the real-time effect of social media interaction on body image satisfaction and eating habits of young adults at IIIT-Delhi MIDAS Lab." />
        <meta property="og:title" content="Impact of Social Media on Body Image Satisfaction - Ishita Gupta" />
        <meta property="og:description" content="Research study evaluating the real-time effect of social media interaction on body image satisfaction and eating habits of young adults at IIIT-Delhi MIDAS Lab." />
      </Helmet>

      <div className="w-full bg-white min-h-screen">
        <Header />
        
        <main>
          <div className='-mt-[20%] w-full overflow-hidden'>
            <img className="w-full block" src="./public/images/insta.svg" alt="Impact of Social Media on Body Image Satisfaction Title Slide" />
          </div>

          {/* Additional slides can be added here following the same pattern */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InstaEffectPage;
