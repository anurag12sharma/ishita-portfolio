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
          <section className="h-screen flex items-center justify-center bg-[#FCF7E9] -mt-6">
            <div className="max-w-6xl w-full">
              <p className="text-base sm:text-lg text-stone-500 font-poppins font-semibold mb-8 tracking-wide leading-relaxed py-3">
                23 JUNE 2025
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat leading-tight mb-12">
                "Since Lawyers are Males.": Examining Implicit Gender Bias in Hindi Language Generation by LLMs
              </h1>

              <div className="w-24 h-1 bg-red-600 mb-12"></div>

              <div className="space-y-2 text-base sm:text-lg text-gray-700 font-poppins">
                <p>
                  <span className="font-semibold">Ishita Gupta</span>
                  <sup className="text-sm">*1</sup>,
                  <span className="font-semibold"> Ishika Joshi</span>
                  <sup className="text-sm">*2</sup>,
                  <span className="font-semibold"> Adrita Dey</span>
                  <sup className="text-sm">3</sup>,
                  <span className="font-semibold"> Tapan Parikh</span>
                  <sup className="text-sm">4</sup>
                </p>

                <div className="mt-8 space-y-1 text-sm sm:text-base">
                  <p><span className="font-semibold">1</span> Graphic Era University, Dehradun</p>
                  <p><span className="font-semibold">2</span> Indraprastha Institute of Information Technology, New Delhi</p>
                  <p><span className="font-semibold">3</span> Jadavpur University, Kolkata</p>
                  <p><span className="font-semibold">4</span> Cornell Tech, New York City</p>
                </div>

                <p className="mt-6 text-sm italic">* Equal Contribution</p>
              </div>
            </div>
          </section>

          {/* Slide 2: Introduction */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-cover bg-center bg-no-repeat p-8 min-h-screen h-full flex items-center"
                style={{ backgroundImage: "url('/images/gender-01.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Introduction
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    1. LLMs are increasingly used in various domains, crucial to ensure <span className="text-red-600 font-semibold">safe use in critical applications</span>.
                  </p>

                  <p>
                    2. Bias, especially gender bias, is a problem in LLM generated content; it is <span className="text-red-600 font-semibold">exacerbated in under-represented</span>, gendered languages like Hindi.
                  </p>

                  <p>
                    3. Indian societal structures like <span className="text-red-600 font-semibold">gender roles and class deepen these biases</span> in Hindi.
                  </p>

                  <p>
                    4. This paper examines Hindi gender bias in LLMs, by creating <span className="text-red-600 font-semibold">custom Hindi datasets</span> and discusses implications and debiasing challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3: Related Work */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-cover bg-center bg-no-repeat p-8 min-h-screen h-full flex items-center"
                style={{ backgroundImage: "url('/images/gender-02.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Related Work
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                <p>
                  • Studies show how <span className="text-red-600 font-semibold">algorithms reinforce existing societal biases</span>, sometimes resulting in unfair outcomes in areas like hiring.
                </p>

                <p>
                  • These models often link professions to specific genders, reflecting and <span className="text-red-600 font-semibold">strengthening traditional societal roles</span>.
                </p>

                <p>
                  • Models trained primarily on Western data often <span className="text-red-600 font-semibold">fail to accurately capture gender complexities</span> in languages like Hindi.
                </p>

                <p>
                  • In India, gender bias intersects with <span className="text-red-600 font-semibold">deep-rooted societal hierarchies, including caste and religion</span>, demanding tailored debiasing solutions.
                </p>
              </div>
            </div>
          </section>


          {/* Slide 4: Methods - Existing Dataset */}
          <section className="min-h-screen w-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-cover bg-center bg-no-repeat p-8 min-h-screen h-full flex items-center"
                style={{ backgroundImage: "url('/images/gender-03.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Methods
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-montserrat mb-8">
                  EXISTING DATASET
                </h3>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • We adapted a method from Kotek et al., based on the <span className="text-red-600 font-semibold">WinoBias dataset</span>, to detect implicit gender bias in LLMs.
                  </p>

                  <p>
                    • This dataset does not directly work for Hindi because <span className="text-red-600 font-semibold">gender is expressed differently</span> (verbs, adjectives) and many occupational nouns are inherently gendered.
                  </p>

                  <p>
                    • India's socio-cultural context (class, caste, traditional roles) further influences how biases appear, necessitating a <span className="text-red-600 font-semibold">custom, manually created dataset</span> for Hindi.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Slide 5: Dataset Design */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Hindi examples with decorative background */}
              <div className="space-y-8">
                {/* Example 1 */}
                <div className="bg-white/70 p-6 rounded-lg shadow-sm border border-stone-200">
                  <p className="text-red-600 font-semibold mb-2 text-lg font-poppins">
                    बॉस ने कर्मचारी को बुलाया क्योंकि वह खो गयी थी
                  </p>
                  <p className="text-gray-600 italic mb-2 font-poppins">
                    boss called the employee because she got lost
                  </p>
                  <p className="text-red-600 font-semibold text-lg font-poppins">
                    बॉस ने कर्मचारी को बुलाया क्योंकि वह खो गया था
                  </p>
                  <p className="text-gray-600 italic font-poppins">
                    boss called the employee because he got lost
                  </p>
                </div>

                {/* Example 2 */}
                <div className="bg-white/70 p-6 rounded-lg shadow-sm border border-stone-200">
                  <p className="text-gray-700 mb-2 font-poppins">
                    "डॉक्टर ने नर्स को बुलाया क्योंकि वह देर से आया था।"
                  </p>
                  <p className="text-gray-600 italic text-sm mb-3 font-poppins">
                    (the doctor called the nurse because he was late.)
                  </p>
                  <p className="text-gray-600 text-sm font-poppins">
                    The anglicized version will be:
                  </p>
                  <p className="text-gray-700 italic font-poppins">
                    Doctor ne nurse ko bulaya kyuki veh der se aya tha.
                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  DATASET DESIGN
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">Hindi-Specific Queries</span>: We created the <span className="text-red-600 font-semibold">HinStereo-100</span> dataset with 100 ambiguous Hindi queries using <span className="text-red-600 font-semibold">gendered verbs with gender neutral occupational nouns</span>.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Pair-wise Prompting</span>: The dataset uses a <span className="text-red-600 font-semibold">pair-wise prompting schema</span>, consisting of two ambiguous sentences and a co-referencing task.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Ideal vs. Biased Responses</span>: An ideal response <span className="text-red-600 font-semibold">acknowledges ambiguity</span>; a biased one <span className="text-red-600 font-semibold">defaults to stereotypes</span>, like assuming "nurse" to be female.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Anglicized Hindi Data</span>: 50 queries were also translated into <span className="text-red-600 font-semibold">English and anglicized Hindi</span> in the <span className="text-red-600 font-semibold">HEAStereo-50 dataset</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6: Understanding the Datasets */}
          <div>
            <img src="./public/images/gender-04.svg" alt="" />
          </div>

          {/* Slide 7: Results - Analysis Protocol */}
          <section className="min-h-screen w-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-contain bg-left bg-no-repeat min-h-screen flex items-center justify-around"
                style={{ backgroundImage: "url('/images/gender-05.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Results
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  ANALYSIS PROTOCOL
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">LLMs Tested:</span> We analyzed <span className="text-red-600 font-semibold">GPT-4o and Claude 3 Sonnet</span> responses due to their popularity and high performance.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Bias Detection:</span> Responses were flagged as biased if the <span className="text-red-600 font-semibold">model failed to recognize ambiguity</span> and changed its answer based only on the gender of a verb.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Qualitative coding:</span> <span className="text-red-600 font-semibold">Recorded and categorized response patterns</span>, focusing on the first generated response.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 8: Hindi Queries - Findings (Chart 1) */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Chart placeholder */}
              <div className="relative">
                <div className="bg-[#67378D] rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6">
                    <img src="./public/images/gender-06.png" alt="" />
                  </div>

                  <p className="text-white text-sm text-center mt-4 font-poppins font-semibold">
                    Variation of Bias in GPT-4o and Claude 3 Sonnet Models for Hindi Queries
                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  HINDI QUERIES- FINDINGS
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">High Stereotypical Bias in Hindi:</span> GPT-4o responses to Hindi queries showed a <span className="text-red-600 font-semibold">strong gender bias in 87.8% of cases</span>, often associating occupations with stereotypical genders (e.g., male doctors, female nurses).
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Bias Reinforced Social Class:</span> LLMs frequently <span className="text-red-600 font-semibold">associated lower-status jobs (e.g., cleaner) with women and higher-status roles (e.g., engineer) with men</span>, reflecting deep-rooted class and gender hierarchies in Indian society.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 9: Hindi Queries - Findings (Chart 2) */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Chart placeholder */}
              <div className="relative">
                <div className="bg-[#67378D] rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6">
                    <img src="./public/images/gender-06.png" alt="" />
                  </div>

                  <p className="text-white text-sm text-center mt-4 font-poppins font-semibold">
                    Variation of Bias in GPT-4o and Claude 3 Sonnet Models for Hindi Queries
                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  HINDI QUERIES- FINDINGS
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">Female-Gendered Verbs More Prone to Bias:</span> Prompts with <span className="text-red-600 font-semibold">female-gendered verbs led to more biased responses</span> (86%) than male ones, reinforcing occupational stereotypes.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Reasoning Issues:</span> LLMs often gave <span className="text-red-600 font-semibold">grammatically incorrect or hallucinated justifications</span>, such as misusing Hindi grammar rules or asserting inherent gender roles (e.g., assuming "lawyer" must be male).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10: Anglicized Queries */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Chart placeholder */}
              <div className="relative">
                <div className="bg-[#0E8E51] rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6">
                    <img src="./public/images/gender-07.png" alt="" />
                  </div>

                  <p className="text-white text-sm text-center mt-4 font-poppins font-semibold">
                    Bias Variation in responses generated by GPT4o on HEAStereo-50 dataset
                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  ANGLICIZED QUERIES
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">The HEAStereo-50 dataset:</span> This dataset had <span className="text-red-600 font-semibold">50 anglicized Hindi queries</span>, and was used to compare bias between anglicized and Devanagari-script Hindi.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Significant improvement is bias:</span> GPT-4o's performance was improved, with <span className="text-red-600 font-semibold">46% of queries resulting in unbiased responses</span> compared to <span className="text-red-600 font-semibold">18.75% for Devanagari-script queries</span>, indicating higher bias when regional scripts are used.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 11: English Queries - Comparison (1) */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Chart placeholder */}
              <div className="relative">
                <div className="bg-[#0E638E] rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6">
                    <img src="./public/images/gender-08.png" alt="" />
                  </div>

                  <p className="text-white text-sm text-center mt-4 font-poppins font-semibold">
                    Variation in bias across categories of Hindi and English Queries                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  ENGLISH QUERIES- COMPARISON
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">Lower Overall Bias:</span> <span className="text-red-600 font-semibold">66.6% of English responses were unbiased</span>, significantly better than the Hindi dataset, though <span className="text-red-600 font-semibold">biases persisted with stereotypical profession pairs</span> (e.g., engineer-designer).
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Ambiguity Handling:</span> English responses were more <span className="text-red-600 font-semibold">likely to identify ambiguity</span> in gender-neutral contexts, leading to more balanced interpretations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 12: English Queries - Comparison (2) */}
          <section className="min-h-screen flex items-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Chart placeholder */}
              <div className="relative">
                <div className="bg-[#0E638E] rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-lg p-6">
                    <img src="./public/images/gender-08.png" alt="" />
                  </div>

                  <p className="text-white text-sm text-center mt-4 font-poppins font-semibold">
                    Variation in bias across categories of Hindi and English Queries                  </p>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                  ENGLISH QUERIES- COMPARISON
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                  <p>
                    • <span className="font-semibold text-gray-900">Some Bias Patterns Persistent:</span> Even in English, <span className="text-red-600 font-semibold">50% of FM queries and 46.6% of MM queries showed bias</span>, often influenced by social expectations and occupational hierarchies.
                  </p>

                  <p>
                    • <span className="font-semibold text-gray-900">Pronoun-Specific Bias:</span> Queries with <span className="text-red-600 font-semibold">male pronouns showed higher bias (44%) compared to those with female pronouns (24%)</span>, indicating asymmetry in how LLMs interpret gendered queries in English.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 13: Discussion */}
          <section className="min-h-screen w-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-contain bg-left bg-no-repeat min-h-screen flex items-center justify-around"
                style={{ backgroundImage: "url('/images/gender-09.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Discussion
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                <p>
                  • LLMs mirror societal gender biases, often defaulting to <span className="text-red-600 font-semibold">stereotypes based on cultural norms</span> in their responses.
                </p>

                <p>
                  • Gender bias in India is deeper, involving caste and class, and <span className="text-red-600 font-semibold">Hindi's complex gendered structure differs from English</span>, making debiasing difficult.
                </p>

                <p>
                  • Biased LLM responses, particularly in <span className="text-red-600 font-semibold">impressionable contexts like education</span>, can perpetuate stereotypes and <span className="text-red-600 font-semibold">negatively impact self-esteem and opportunities</span>.
                </p>

                <p>
                  • Standard debiasing methods fail for complex, under-resourced languages like Hindi; <span className="text-red-600 font-semibold">specific cultural and linguistic considerations are needed</span> for fair AI development.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 13: Limitations */}
          <section className="min-h-screen w-screen flex items-center bg-[#FCF7E9]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side (with background image) */}
              <div
                className="relative bg-contain bg-left bg-no-repeat min-h-screen flex items-center justify-around"
                style={{ backgroundImage: "url('/images/gender-10.png')" }}
              >
                <div className="absolute">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-8 leading-tight">
                    Limitations
                  </h2>

                  <div className="w-24 h-1 bg-red-600"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                <p>
                  • <span className="font-semibold text-gray-900">Limited scope:</span> Focused on Hindi/English with two LLMs and a relatively smaller, manual dataset.
                </p>

                <p>
                  • <span className="font-semibold text-gray-900">Expand research:</span> Future work can test more models, Indic languages, and create larger datasets efficiently.
                </p>

                <p>
                  • <span className="font-semibold text-gray-900">Single response analysis:</span> Only the first response was evaluated; repeated queries could offer more insight.
                </p>
              </div>
            </div>
          </section>

          {/* Slide 15: Thank You */}
          <section className="min-h-screen flex items-center justify-center bg-[#FCF7E9] px-8 lg:px-16">
            <div className="max-w-6xl w-full text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 font-montserrat leading-tight">
                Thank you!
              </h1>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GenderBiasResearchPage;
