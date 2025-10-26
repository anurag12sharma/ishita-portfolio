import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ProjectShowcase from './ProjectShowcase';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ishita Gupta Portfolio | HCI Researcher & UX Designer Showcase</title>
        <meta name="description" content="Explore Ishita Gupta's portfolio featuring Human-Computer Interaction research, UX design projects including EcoWallet sustainability app, Delhi Metro accessibility study, and AI bias research published at ACM Conference." />
        <meta property="og:title" content="Ishita Gupta Portfolio | HCI Researcher & UX Designer Showcase" />
        <meta property="og:description" content="Explore Ishita Gupta's portfolio featuring Human-Computer Interaction research, UX design projects including EcoWallet sustainability app, Delhi Metro accessibility study, and AI bias research published at ACM Conference." />
      </Helmet>

      <div className="min-h-screen bg-background-card">
        <Header />
        
        <main>
          <HeroSection />
          <ProjectShowcase />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;