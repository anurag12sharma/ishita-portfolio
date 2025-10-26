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

      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[108px]">
            {/* Hero Section */}
            <section className="pt-[120px] pb-[60px] animate-fade-in">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] text-text-dark font-poppins mb-6 animate-slide-in-left">
                Gender Bias in Hindi Language Text Generation by Large Language Models
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px]">
                  Research
                </span>
                <span className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px]">
                  AI Ethics
                </span>
                <span className="text-md font-medium leading-md text-chip-text font-poppins border border-chip-border rounded-md px-[10px] py-[10px]">
                  ACM FAccT 2025
                </span>
              </div>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.6] text-[#4c4c4c] font-poppins mb-8">
                Cornell Tech
              </p>
            </section>

            {/* Project Image */}
            <section className="mb-[80px]">
              <div className="w-full overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/images/img_rectangle_1355.png" 
                  alt="ACM Conference Research Paper"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Abstract */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Abstract
              </h2>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins mb-4">
                This research investigates gender bias in Large Language Models (LLMs) when generating text in Hindi, 
                a grammatically gendered language spoken by over 600 million people worldwide. While much of the research 
                on AI bias has focused on English, this work examines how gender stereotypes manifest differently in 
                languages with grammatical gender systems.
              </p>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                The findings reveal significant gender-based biases in LLM-generated Hindi text, with important 
                implications for the deployment of AI systems in multilingual contexts. This work was accepted and 
                published in the proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT) 2025.
              </p>
            </section>

            {/* Research Context */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Research Context
              </h2>
              <div className="bg-background-overlay p-8 rounded-lg shadow-medium">
                <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins mb-4">
                  As Large Language Models become increasingly deployed in diverse linguistic contexts, understanding 
                  their behavior in non-English languages is crucial. Hindi, with its grammatical gender system where 
                  nouns, adjectives, and verbs are gendered, provides a unique lens to examine how AI systems encode 
                  and perpetuate gender stereotypes.
                </p>
                <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                  This research contributes to the growing body of work on algorithmic fairness in multilingual AI systems, 
                  with a particular focus on languages spoken in the Global South.
                </p>
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Methodology
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-secondary-dark pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    Corpus Development
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Created a comprehensive dataset of Hindi prompts across various domains including professional 
                    contexts, domestic scenarios, and social interactions to test LLM responses.
                  </p>
                </div>
                <div className="border-l-4 border-secondary-dark pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    Bias Detection Framework
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Developed a novel framework for detecting and measuring gender bias in grammatically gendered 
                    languages, accounting for linguistic structures unique to Hindi.
                  </p>
                </div>
                <div className="border-l-4 border-secondary-dark pl-6">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-2">
                    Comparative Analysis
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Analyzed outputs from multiple state-of-the-art LLMs to identify patterns of gender bias and 
                    stereotyping across different model architectures and training approaches.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Findings */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Key Findings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Occupational Stereotypes
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    LLMs consistently associated masculine pronouns with high-status professions and feminine 
                    pronouns with caregiving roles.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Linguistic Amplification
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    The grammatical gender system in Hindi amplified stereotypical associations beyond what is 
                    observed in English-language models.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Cultural Context
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Bias patterns reflected both global gender stereotypes and culturally specific assumptions 
                    about gender roles in South Asian contexts.
                  </p>
                </div>
                <div className="bg-background-card p-6 rounded-lg shadow-small">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-3">
                    Mitigation Challenges
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                    Existing bias mitigation techniques designed for English showed limited effectiveness when 
                    applied to grammatically gendered languages.
                  </p>
                </div>
              </div>
            </section>

            {/* Publication Details */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Publication Details
              </h2>
              <div className="bg-background-overlay p-8 rounded-lg shadow-medium border-l-4 border-secondary-dark">
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-text-dark font-poppins mb-4">
                  ACM Conference on Fairness, Accountability, and Transparency (FAccT) 2025
                </h3>
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins mb-4">
                  This work was accepted and published in the proceedings of ACM FAccT 2025, a premier venue for 
                  research on algorithmic fairness, accountability, and transparency.
                </p>
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                  The research contributes to critical conversations about inclusive AI development and the need 
                  for multilingual perspectives in AI ethics research.
                </p>
              </div>
            </section>

            {/* Impact & Implications */}
            <section className="mb-[80px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Impact & Implications
              </h2>
              <div className="space-y-4">
                <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                  This research has important implications for the development and deployment of AI systems in 
                  multilingual contexts. The findings highlight the need for:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-secondary-dark font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Language-specific bias detection and mitigation strategies
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-dark font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Greater representation of non-English languages in AI fairness research
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-dark font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Cultural context awareness in AI model development and evaluation
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-dark font-bold text-xl mr-3">•</span>
                    <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#4c4c4c] font-poppins">
                      Inclusive design practices that consider linguistic diversity
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Personal Reflection */}
            <section className="mb-[120px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.3] text-text-dark font-poppins mb-6">
                Personal Reflection
              </h2>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins mb-4">
                Working on this research project at Cornell Tech deepened my understanding of the intersection between 
                language, culture, and technology. As a native Hindi speaker and HCI researcher, I was able to bring 
                both linguistic insight and a user-centered perspective to examining AI bias.
              </p>
              <p className="text-[18px] sm:text-[20px] font-normal leading-[1.7] text-[#4c4c4c] font-poppins">
                This experience reinforced my commitment to advocating for inclusive AI systems that serve diverse 
                global communities. It also highlighted the importance of interdisciplinary collaboration in addressing 
                complex challenges at the intersection of technology and society.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GenderBiasResearchPage;
