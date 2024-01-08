import React from 'react';

import LayoutAnimateY from '../layout/LayoutAnimateY';
import TitleSection from '../titleSection/TitleSection';

const AboutMe = () => {
  return (
    <div id="about-me" className="flex min-h-[100vh] flex-col justify-center">
      <TitleSection title="About Me" />
      <LayoutAnimateY delay={0.2}>
        <p className="mx-4 max-w-[600px]  text-white md:mx-16  lg:mx-20">
          As a passionate and dedicated programmer, I have had the opportunity
          to collaborate with some of the most talented and creative individuals
          in the industry, delivering cutting-edge digital products to clients
          globally. My expertise lies in crafting visually stunning applications
          with clean, efficient code and best practices. I am constantly
          striving to improve and evolve my skills through ongoing education and
          professional development, driven by my love for creating truly
          impactful and innovative digital solutions.
        </p>
      </LayoutAnimateY>
    </div>
  );
};

export default AboutMe;
