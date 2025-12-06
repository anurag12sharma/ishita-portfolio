import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const GenderBiasResearchPage = () => {
  return (
    <>
      <Helmet>
        <title>Gender Bias in Hindi Language LLMs - Ishita Gupta</title>
        <meta name="description" content="Research on gender bias in Hindi language text generation by Large Language Models, published at ACM Conference on Fairness, Accountability, and Transparency 2025." />
        <meta property="og:title" content="Gender Bias in Hindi Language LLMs - Ishita Gupta" />
        <meta property="og:description" content="Research on gender bias in Hindi language text generation by Large Language Models, published at ACM Conference on Fairness, Accountability, and Transparency 2025." />
      </Helmet>

      <div className="flex flex-col bg-white">
        <Header />

        <main>
          {/* Slide 1: Title Slide */}
          <div>
            <img src="./public/images/gender-11.svg" alt="" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GenderBiasResearchPage;
