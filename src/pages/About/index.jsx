import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PersonalIntro from './PersonalIntro';
import CoreValues from './CoreValues';
import FunFacts from './FunFacts';
import ContactSection from './ContactSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Ishita Gupta | HCI Researcher & UX Designer Journey</title>
        <meta name="description" content="Learn about Ishita Gupta's journey as a Human-Computer Interaction researcher and self-taught designer. Discover her core values, expertise in AI bias research, and passion for intuitive user experiences." />
        <meta property="og:title" content="About Ishita Gupta | HCI Researcher & UX Designer Journey" />
        <meta property="og:description" content="Learn about Ishita Gupta's journey as a Human-Computer Interaction researcher and self-taught designer. Discover her core values, expertise in AI bias research, and passion for intuitive user experiences." />
      </Helmet>

      <div className="w-full bg-background-card overflow-x-hidden">
        <Header />

        <main>
          <PersonalIntro />
          <CoreValues />
          <FunFacts />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;