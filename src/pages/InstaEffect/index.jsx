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
        
        <main className="flex-grow">
          {/* Slide 1 - Title Slide */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full text-center space-y-12">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat leading-tight">
                  The Insta effect:
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-secondary font-poppins leading-tight">
                  Impact of Instagram Usage on Body Image and Eating Habits in Young Adults
                </h2>
              </div>
            </div>
          </section>

          {/* Slide 2 - Contents */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Title */}
                <div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary font-montserrat">
                    Contents
                  </h2>
                </div>

                {/* Right side - Contents list */}
                <div className="space-y-4">
                  <ul className="space-y-3 text-base sm:text-lg text-text-secondary font-poppins">
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Collaborators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Background of the problem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Research Goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Scope of the study</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Research Question</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Sub-research Questions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Methodology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Pilot Study</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Main Study (Timeline, Sample Size and Participants, Recruitment and Data Collection)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Analysis Approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Findings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Value Proposition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Assumptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-text-primary">•</span>
                      <span>Limitations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 3 - Collaborators */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Collaborators
              </h2>

              <div className="flex flex-col items-center justify-center space-y-6 py-12">
                <div className="text-center space-y-4">
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins">
                    Ishita Gupta (Graphic Era University)
                  </p>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins">
                    Maitreyi Redkar (PhD, IIT-Bombay)
                  </p>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins">
                    Dr. Rajiv Ratn Shah (IIIT-Delhi)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 - Where does the problem lie? */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Where does the problem lie?
              </h2>

              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Understanding the gap and why it is important
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Numerous studies have demonstrated that exposure to idealized representations of beauty and appearance in visual media formats negatively affects body image.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Dissatisfaction with one's body has been linked to health-compromising behavior including but not limited to eating disorders, depression, and low self-esteem.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Viewing enhanced images of young individuals who match narrow societal attractiveness ideals on social media can increase body dissatisfaction and negative mood.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      There is a gap when it comes to analyzing the effects of platforms like Instagram on the eating habits of male users and little is known about the association between the type of social media content individuals view and body image.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 5 - Research Goals */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Research goals
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-text-primary font-poppins flex-shrink-0">1.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-1">
                    To understand how young adults interact with highly visual social media platforms like Instagram.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-text-primary font-poppins flex-shrink-0">2.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-1">
                    What is the nature of their interactions and how that depends on their biological sex, what are the differences in male and female interactions with a platform like that?
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-text-primary font-poppins flex-shrink-0">3.</span>
                  <p className="text-xl sm:text-2xl text-text-secondary font-poppins leading-relaxed pt-1">
                    The goal is also to then understand how this interaction affects their perception of themselves, if it affects them negatively?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 6 - Scope of the Research */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Scope of the research
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The study was focused on users from age 18 to 35 years.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The study included both female and male participants.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The research specifically studied only Instagram as the primary social media platform.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    All the participants were based in India, had access to internet facilities, and needed to be conversant in English.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The participants with gynecological conditions such as pregnancy or those diagnosed with a hormonal disorder and psychiatric illness were excluded.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 7 - Research Question */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-5xl w-full space-y-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Research question
              </h2>

              <div className="flex items-center justify-center py-12">
                <p className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-poppins leading-relaxed text-center max-w-4xl">
                  How does interaction with Instagram affect body image satisfaction and eating habits in young adult males and females?
                </p>
              </div>
            </div>
          </section>

          {/* Slide 8 - Sub-research Questions */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Sub-research questions
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-text-primary font-poppins flex-shrink-0">1.</span>
                  <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed pt-1">
                    How does active vs. passive Instagram usage impact body image?
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-text-primary font-poppins flex-shrink-0">2.</span>
                  <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed pt-1">
                    How does active vs. passive Instagram usage impact eating habits?
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-text-primary font-poppins flex-shrink-0">3.</span>
                  <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed pt-1">
                    Does type of content followed influence body image and eating habits?
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-text-primary font-poppins flex-shrink-0">4.</span>
                  <p className="text-lg sm:text-xl text-text-secondary font-poppins leading-relaxed pt-1">
                    Are there biological sex differences in the impact of Instagram usage i.e., differences in females vs males?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 9 - Methodology: Research Methods */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Methodology: Research methods
              </h2>

              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Psychological Scales in Pre-ESM Survey
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The Pre-ESM survey consisted of 2 scales: Physical Appearance Comparison Scale-Revised (PACS-R) and Social Attitude Towards Appearance Questionnaire (SATAQ-4).
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        PACS-R is an 11-item self-report questionnaire measuring physical appearance comparisons to others.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The Sociocultural Attitudes Towards Appearance Questionnaire (SATAQ) is a scale designed to assess interpersonal and societal aspects of ideals around beauty and appearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 9 - Methodology: Research Methods */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Methodology: Research methods
              </h2>

              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Psychological Scales in Pre-ESM Survey
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The Pre-ESM survey consisted of 2 scales: Physical Appearance Comparison Scale-Revised (PACS-R) and Social Attitude Towards Appearance Questionnaire (SATAQ-4).
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        PACS-R is an 11-item self-report questionnaire measuring physical appearance comparisons to others.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The Sociocultural Attitudes Towards Appearance Questionnaire (SATAQ) is a scale designed to assess interpersonal and societal aspects of ideals around beauty and appearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 10 - Methodology Continued: ESM and Post-ESM */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-10">
                {/* Experience Sampling (diary study) */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Experience Sampling (diary study)
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Daily ESM questionnaire was provided to capture behavior and emotions as naturally as possible by recording data in real time.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The questionnaire was mailed 3 times daily and took a maximum of one minute to complete.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        It recorded the assigned participant ID and time slot of the day. It asked about Instagram usage, satisfaction with appearance, satisfaction with diet, and emotional well-being on a 5-point Likert scale.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Psychological Scale in Post-ESM Survey */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Psychological Scale in Post-ESM Survey
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Post-ESM questionnaire aimed to examine overall experience, and noting average usage of Instagram per day.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        It included the extent to which the participants thought Instagram drives their Body Image (BI) and eating habits.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The participants also answered the Eating Disorder Examination Questionnaire 6.0, a 28-item questionnaire which is designed to assess the range, frequency and severity of behaviours associated with disordered eating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 11 - Pilot Study */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Pilot Study
              </h2>

              <div className="space-y-10">
                {/* Purpose */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Purpose
                  </h3>

                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The pilot was conducted with 5 participants over 1 week.
                  </p>

                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The purpose was:
                  </p>

                  <div className="space-y-4 pl-6">
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        To test and refine the proposed methodology
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Validate the chosen psychological scales
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Optimize the diary study questions and frequency for effectiveness
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        To get an estimate of the time it would take for the main study to be completed.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Refine the data analysis strategy for the main study.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Outcome
                  </h3>

                  <div className="space-y-4 pl-6">
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Questions and frequency of the diary study were revised based on user responses
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Further clarifying instructions were added to the methodology to ensure understanding
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        It provided estimates of the time required for data collection and main study timeline was adjusted accordingly
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Preliminary data analysis identified potential challenges in analyzing certain variables, leading to refinements in the main study's analysis plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 12 - Main Study: Timeline */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Main Study:
              </h2>

              <div className="space-y-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  Timeline
                </h3>

                <div className="space-y-8">
                  {/* Preparation */}
                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-semibold text-text-primary font-poppins">
                      Preparation
                    </h4>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      3 days (including: consent form circulation and recruitment, finalizing participants, and explaining the study process)
                    </p>
                  </div>

                  {/* Study duration */}
                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-semibold text-text-primary font-poppins">
                      Study duration
                    </h4>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      1 week (including: diary study, and pre and post-diary study surveys)
                    </p>
                  </div>

                  {/* Analysis */}
                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-semibold text-text-primary font-poppins">
                      Analysis
                    </h4>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      3 days (including: cleaning and coding data, running statistical analysis using SPSS, and synthesizing results)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 13 - Main Study: Sample Size & Recruitment */}
          <section className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <div className="space-y-10">
                {/* Sample size & Participants */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Sample size & Participants
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        35 participants volunteered in this study, of which 21 completed the study by returning to the final survey (Mage = 20.14; SD = 2.61)
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        There were 10 female participants (47.62%) and 11 male participants (52.38%)
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        All the participants reported their height and weight and the Body Mass Index (BMI) was calculated.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recruitment and Data Collection */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                    Recruitment and Data Collection
                  </h3>

                  <div className="space-y-6 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The participants were recruited through randomized sampling method to prevent sampling bias.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        The informed consent form was circulated on professional networking platforms including LinkedIn.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-text-primary font-bold text-lg flex-shrink-0">•</span>
                      <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                        Data was collected through google forms and excel sheets were maintained.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 14 - Analysis Approach */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Analysis approach
              </h2>

              <div className="space-y-10">
                {/* Data cleaning */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    Data cleaning
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The data needed to be cleaned, and some quantitative variables needed to be coded to prepare for analysis.
                  </p>
                </div>

                {/* Quantitative data */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    Quantitative data
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    The quantitative data was analysed through SPSS by running various statistical tests to understand dependence of different variables on each other.
                  </p>
                </div>

                {/* Qualitative data */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    Qualitative data
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    Thematic analysis and word clouds were used to identify patterns in variables of a qualitative nature.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 15 - Findings Overview */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Findings overview
              </h2>

              <div className="space-y-12">
                {/* Word cloud section */}
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    Word cloud for the type of content followed by both sexes
                  </h3>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center">
                    <div className="w-full aspect-video bg-gray-50 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-lg font-medium">Word Cloud Visualization</p>
                        <p className="text-sm mt-2">Lifestyle, Music, Memes, Comedy, Art, Fitness, Health, Animals, Sports, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body satisfaction finding */}
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    Males tend to have lower body image satisfaction when compared to females
                  </h3>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="w-full aspect-video bg-gray-50 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-lg font-medium">Body Satisfaction Chart</p>
                        <p className="text-sm mt-2">Line graph showing Male: 1.7429 vs Female: 2.3794</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diet satisfaction finding */}
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-secondary font-poppins">
                    There was no statistically significant difference between the diet satisfaction of male and females
                  </h3>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="w-full aspect-video bg-gray-50 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-400 font-poppins">
                        <p className="text-lg font-medium">Diet Satisfaction Chart</p>
                        <p className="text-sm mt-2">Bar chart showing Male: 2.1181 vs Female: 2.1275</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 16 - Impact and Value Proposition */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Impact and value proposition
              </h2>

              <div className="space-y-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-secondary font-poppins">
                  User-centred design Implications
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Incorporate design features that encourage users to track their social media consumption and its potential impact on their mental health more actively.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Offer users greater control over the types of content they see, allowing them to filter out potentially triggering content easily.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      Integrate educational and awareness resources that promote body positivity and healthy eating habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 17 - Assumptions */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Assumptions
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    It was assumed that participants provided honest and accurate self-reports in the diary entries and on the psychological scales.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    It was assumed that participants correctly understood and followed the provided definitions of active and passive instagram usage.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                    It was assumed that self reported BMI is a reasonably accurate measure of body mass.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slide 18 - Limitations */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 sm:px-12 py-20">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary font-montserrat">
                Limitations
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      <span className="font-semibold text-text-primary">Self-Report Bias:</span> The study relied on self-reported data, which may be subject to social desirability bias and recall bias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      <span className="font-semibold text-text-primary">Sample Size and Representativeness:</span> The sample size (n=21) may limit the generalizability of the findings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      <span className="font-semibold text-text-primary">Causality:</span> This study was correlational in nature and cannot establish causal relationships between Instagram usage and body image or eating habits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-text-primary font-bold text-xl flex-shrink-0">•</span>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-text-secondary font-poppins leading-relaxed">
                      <span className="font-semibold text-text-primary">Platform Specificity:</span> The findings may be specific to Instagram and may not generalize to other text based social media platforms.
                    </p>
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

export default InstaEffectPage;
